import { Html, useProgress } from '@react-three/drei';
import { useDeferredValue } from 'react';

const CanvasLoader = () => {
  const { progress } = useProgress();
  // Use useDeferredValue to defer progress updates and prevent render-phase state updates
  const deferredProgress = useDeferredValue(progress);

  return (
    <Html
      as="div"
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: '#F1F1F1',
          fontWeight: 800,
          marginTop: 40,
        }}>
        {deferredProgress !== 0 ? `${deferredProgress.toFixed(2)}%` : 'Loading...'}
      </p>
    </Html>
  );
};

export default CanvasLoader;
