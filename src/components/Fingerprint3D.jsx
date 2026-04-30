import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function FingerprintShape() {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.y += 0.005;
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1, 0.3, 200, 32]} />
      <meshStandardMaterial color="#2563eb" wireframe />
    </mesh>
  );
}

export default function Fingerprint3D() {
  return (
    <div className="h-[400px]">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <FingerprintShape />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}