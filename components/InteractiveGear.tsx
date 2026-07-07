"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, ContactShadows, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function GearShape() {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x += delta * 0.1;
      
      // Interactive subtle reaction to mouse
      const targetX = (state.pointer.x * Math.PI) / 4;
      const targetY = (state.pointer.y * Math.PI) / 4;
      
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, meshRef.current.rotation.y + targetX * 0.05, 0.1);
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, meshRef.current.rotation.x - targetY * 0.05, 0.1);
    }
  });

  return (
    <group ref={meshRef}>
      <mesh castShadow receiveShadow>
        <torusGeometry args={[1.5, 0.4, 32, 64]} />
        <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Inner spokes */}
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} rotation={[0, 0, (Math.PI / 4) * i]}>
          <cylinderGeometry args={[0.1, 0.1, 3, 16]} />
          <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
        </mesh>
      ))}
      
      {/* Center axis */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.6, 32]} />
        <MeshTransmissionMaterial 
          backside 
          thickness={0.5} 
          roughness={0} 
          transmission={1} 
          ior={1.5} 
          chromaticAberration={0.1} 
          anisotropy={0.1} 
        />
      </mesh>
    </group>
  );
}

export default function InteractiveGear() {
  return (
    <div className="w-full h-full relative cursor-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#0050FF" />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <GearShape />
        </Float>
        
        <Environment preset="city" />
        <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2} far={4} />
      </Canvas>
    </div>
  );
}
