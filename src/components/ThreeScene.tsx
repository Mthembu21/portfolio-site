import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);

  return (
    <Sphere args={[1, 32, 32]} ref={sphereRef}>
      <meshStandardMaterial
        color="#4B9CD3"
        wireframe
        side={THREE.DoubleSide}
      />
    </Sphere>
  );
}

export function ThreeScene() {
  return (
    <div className="h-[400px] w-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedSphere />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={5} />
      </Canvas>
    </div>
  );
}