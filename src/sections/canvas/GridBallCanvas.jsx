import { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Decal, Float, useTexture } from '@react-three/drei';
import CanvasLoader from '../../components/Loading';

// Component to update camera dynamically
const CameraController = ({ position, fov }) => {
  const { camera } = useThree();
  
  useEffect(() => {
    if (position) {
      camera.position.set(...position);
    }
    if (fov !== undefined) {
      camera.fov = fov;
      camera.updateProjectionMatrix();
    }
  }, [camera, position, fov]);
  
  return null;
};

// Individual Ball component positioned in 3D space
const Ball = ({ icon, position, onHover }) => {
  const [decal] = useTexture([icon]);

  return (
    <Float 
      speed={3} 
      rotationIntensity={0} 
      floatIntensity={2}
    >
      <group position={position}>
        <mesh castShadow receiveShadow scale={2.75}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#fff8eb"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
          />
        </mesh>
        {/* Invisible interaction zone for hover detection */}
        <mesh 
          position={[0, 0, 0]}
          onPointerEnter={() => onHover(true)}
          onPointerLeave={() => onHover(false)}
        >
          <sphereGeometry args={[1.5, 16, 16]} />
          <meshBasicMaterial visible={false} />
        </mesh>
      </group>
    </Float>
  );
};

// Single Canvas that renders all balls in a grid
const GridBallCanvas = ({ technologies }) => {
  const containerRef = useRef(null);
  const [positions, setPositions] = useState([]);
  const [cameraConfig, setCameraConfig] = useState({ position: [0, 0, 25], fov: 60 });

  // ============================================================
  // POSITION CALCULATION & RESPONSIVE UPDATES
  // ============================================================
  // This effect:
  // 1. Reads the actual DOM positions of the invisible grid items
  // 2. Converts those pixel positions to 3D coordinates
  // 3. Calculates optimal camera position to show all balls
  // 4. Updates when window resizes or layout changes
  useEffect(() => {
    const gridRef = containerRef.current?.querySelector('.grid-spacer');
    
    if (!gridRef) return;

    const calculatePositions = () => {
      const gridItems = gridRef.children;
      if (gridItems.length === 0) return;

      // Get the container's dimensions and center point
      // This is our reference for converting pixel positions to 3D space
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerCenterX = containerRect.width / 2;
      const containerCenterY = containerRect.height / 2;
      
      // Conversion factor: pixels to 3D units
      // This determines how "spread out" the balls are in 3D space
      // 0.04 means 1 pixel = 0.04 3D units
      // Adjusted to match the visual spacing we want
      const pixelTo3D = 0.04;

      // Convert each grid item's DOM position to 3D coordinates
      const newPositions = Array.from(gridItems).map((item) => {
        // Get the item's position relative to the viewport
        const rect = item.getBoundingClientRect();
        
        // Calculate the item's center relative to the container
        const itemCenterX = rect.left + rect.width / 2 - containerRect.left;
        const itemCenterY = rect.top + rect.height / 2 - containerRect.top;
        
        // Convert to 3D coordinates centered at origin (0, 0, 0)
        // X: horizontal position (left/right)
        // Y: vertical position (up/down) - flipped because screen Y increases downward
        // Z: depth (all balls on same plane = 0)
        const x = (itemCenterX - containerCenterX) * pixelTo3D;
        const y = (containerCenterY - itemCenterY) * pixelTo3D; // Flip Y axis
        const z = 0;
        
        return [x, y, z];
      });

      setPositions(newPositions);

      // ============================================================
      // CAMERA POSITION CALCULATION
      // ============================================================
      // This calculates where to position the camera so all balls
      // are visible and properly zoomed based on screen size
      
      if (newPositions.length > 0) {
        // STEP 1: Account for ball size
        // Each ball is scaled to 2.75, so its radius is approximately 2.75 units
        // We need to include this in our calculations so balls at the edges
        // don't get cut off
        const ballRadius = 2.75;
        
        // STEP 2: Find the bounding box of all ball center positions
        // This finds the min/max X and Y coordinates of all ball centers
        // to determine the overall grid dimensions
        const bounds = newPositions.reduce(
          (acc, [x, y]) => ({
            minX: Math.min(acc.minX, x),  // Leftmost ball center
            maxX: Math.max(acc.maxX, x),  // Rightmost ball center
            minY: Math.min(acc.minY, y),  // Bottommost ball center
            maxY: Math.max(acc.maxY, y),  // Topmost ball center
          }),
          { minX: Infinity, maxX: -Infinity, minY: Infinity, maxY: -Infinity }
        );

        // STEP 3: Add ball radius to bounds to get the full visible area
        // We add ballRadius * 2 (diameter) to both width and height because
        // we need to account for the ball extending beyond its center point
        // This ensures balls at the edges are fully visible
        const width = (bounds.maxX - bounds.minX) + (ballRadius * 2);
        const height = (bounds.maxY - bounds.minY) + (ballRadius * 2);
        const maxDimension = Math.max(width, height); // Use the larger dimension
        
        // STEP 4: Calculate the base camera distance using field of view
        // Formula: distance = (maxDimension / 2) / tan(FOV / 2)
        // This gives us the minimum distance needed to fit everything in view
        // FOV (Field of View) of 60 degrees is a standard perspective angle
        const fov = 60;
        const baseDistance = (maxDimension / 2) / Math.tan((fov * Math.PI / 180) / 2);
        
        // STEP 5: Apply responsive padding multiplier for zoom control
        // Larger screens get more zoom (smaller multiplier = closer camera)
        // Since we already account for ball radius in baseDistance, we can go below 1.0
        // for aggressive zoom while still maintaining visibility
        const screenWidth = window.innerWidth;
        let paddingMultiplier;
        if (screenWidth >= 1920) {
          // Large/full screens: Maximum zoom - balls fill the canvas
          // 0.7 means camera is 30% closer than minimum distance
          paddingMultiplier = 0.7;
        } else if (screenWidth >= 1280) {
          // Medium-large screens: Strong zoom
          paddingMultiplier = 0.85;
        } else {
          // Smaller screens: Moderate padding to ensure everything fits
          paddingMultiplier = 1.0;
        }
        
        // STEP 6: Calculate final camera Z position
        // Multiply base distance by padding multiplier
        // Note: We removed the +1 buffer since we're already accounting for ball radius
        // and want maximum zoom on large screens
        const zPosition = baseDistance * paddingMultiplier;
        
        setCameraConfig({
          position: [0, 0, zPosition],
          fov: fov,
        });
      }
    };

    // Debounce function to prevent too many recalculations
    let timeoutId = null;
    const debouncedCalculate = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(calculatePositions, 150); // Wait for layout to settle
    };

    // Use ResizeObserver to watch for layout changes
    const resizeObserver = new ResizeObserver(debouncedCalculate);

    resizeObserver.observe(gridRef);
    resizeObserver.observe(containerRef.current);
    
    // Also listen to window resize events for screen size changes
    const handleWindowResize = () => {
      debouncedCalculate();
    };
    
    window.addEventListener('resize', handleWindowResize);
    
    // Initial calculation after a short delay to ensure layout is ready
    setTimeout(calculatePositions, 200);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [technologies]);

  return (
    <div ref={containerRef} className="w-full relative" style={{ minHeight: '400px' }}>
      {/* Invisible grid structure to maintain spacing and calculate layout */}
      <div className="grid-spacer flex flex-row flex-wrap justify-center gap-10 opacity-0 pointer-events-none" style={{ width: '100%', position: 'relative' }}>
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name} />
        ))}
      </div>
      {/* Canvas renders all balls positioned to match the grid */}
      <Canvas
        camera={{ position: cameraConfig.position, fov: cameraConfig.fov }}
        gl={{ preserveDrawingBuffer: true, alpha: true }}
        style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1 }}
      >
        <CameraController position={cameraConfig.position} fov={cameraConfig.fov} />
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        <Suspense fallback={<CanvasLoader />}>
          {technologies.map((technology, index) => 
            positions[index] ? (
              <Ball
                key={technology.name}
                icon={technology.icon?.src || technology.icon}
                position={positions[index]}
                onHover={() => {}} // Hover handler kept for potential future use
              />
            ) : null
          )}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default GridBallCanvas;

