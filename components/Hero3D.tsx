'use client';

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Globe() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, d) => { if (ref.current) ref.current.rotation.y += d * 0.08; });
  return (
    <Float speed={1.2} rotationIntensity={0.12} floatIntensity={0.25}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.75, 5]} />
        <meshStandardMaterial color="#152a6b" emissive="#122b75" emissiveIntensity={0.75} roughness={0.38} metalness={0.75} wireframe />
      </mesh>
    </Float>
  );
}

function Scene() {
  return <><color attach="background" args={["#02050d"]}/><ambientLight intensity={0.55}/><pointLight position={[3,2,4]} intensity={18} color="#5b7cff"/><pointLight position={[-4,-2,1]} intensity={12} color="#ff4fd8"/><Globe/><Stars radius={8} depth={3} count={900} factor={1.4} saturation={0} fade/><OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3}/></>;
}

export default function Hero3D() {
  return <div className="hero3d" aria-label="Interactive EIMAS market intelligence globe"><Canvas camera={{position:[0,0,5.2], fov:42}} dpr={[1,1.5]}><Scene/></Canvas><div className="sceneTag">LIVE MARKET FIELD</div></div>;
}