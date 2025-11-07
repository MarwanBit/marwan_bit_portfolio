import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Decal, Float, Preload, useTexture } from '@react-three/drei'
import CanvasLoader from '../../components/Loading'

const Ball = (props) => {
  const [decal] = useTexture([props.imgSrc])
  const meshRef = useRef()

  return (
    /* speed={1.75} rotationIntensity={1} floatIntensity={2} */
    <Float>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh ref={meshRef} castShadow receiveShadow scale={2.75}>
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
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="always"
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgSrc={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas