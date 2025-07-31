import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Room(props) {
  const roomRef = useRef();

  useFrame((state, delta) => {
    if (roomRef.current) {
      roomRef.current.rotation.y += delta * 0.1;
    }
  });

  // Create simple geometric room without external models
  return (
    <group ref={roomRef} {...props} dispose={null}>
      {/* Room floor */}
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>

      {/* Desk */}
      <mesh position={[0, -1, 0]}>
        <boxGeometry args={[4, 0.2, 2]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* Monitor */}
      <mesh position={[0, 0, -0.5]}>
        <boxGeometry args={[2, 1.2, 0.1]} />
        <meshStandardMaterial color="#222" />
      </mesh>

      {/* Monitor screen with glow */}
      <mesh position={[0, 0, -0.45]}>
        <planeGeometry args={[1.8, 1]} />
        <meshStandardMaterial 
          color="#4444ff" 
          emissive="#2222ff"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Chair */}
      <group position={[0, -1, 2]}>
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 1]} />
          <meshStandardMaterial color="#333" />
        </mesh>
        <mesh position={[0, 1.2, -0.3]}>
          <boxGeometry args={[1, 1.5, 0.1]} />
          <meshStandardMaterial color="#333" />
        </mesh>
      </group>

      {/* Keyboard */}
      <mesh position={[0, -0.8, 0.5]}>
        <boxGeometry args={[1.5, 0.1, 0.5]} />
        <meshStandardMaterial color="#333" />
      </mesh>

      {/* Mouse */}
      <mesh position={[1, -0.8, 0.3]}>
        <boxGeometry args={[0.3, 0.1, 0.5]} />
        <meshStandardMaterial color="#555" />
      </mesh>

      {/* Ambient lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[2, 2, 2]} intensity={1} />
      <pointLight position={[-2, 2, 2]} intensity={0.5} />
    </group>
  );
}
