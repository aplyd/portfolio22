import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { Canvas } from '@react-three/fiber';

const Home: NextPage = () => {
  const [meshY, setMeshY] = useState(0);

  useEffect(() => {
    const rotateMeshY = () => {
      setMeshY(meshY + 0.1);
    };

    document.addEventListener('click', rotateMeshY);

    return () => {
      document.removeEventListener('click', rotateMeshY);
    };
  }, [meshY]);

  return (
    <div className={styles.scene}>
      <Canvas>
        <mesh rotation={[0, meshY, 0]}>
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial />
        </mesh>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
      </Canvas>
    </div>
  );
};

export default Home;
