import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export const FloatingOdooCube = ({ position, color = "#0ea5e9" }: { position: [number, number, number], color?: string }) => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.005;
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2} position={position}>
            <mesh ref={meshRef} castShadow receiveShadow>
                <boxGeometry args={[1, 1, 1]} />
                <meshPhysicalMaterial
                    color={color}
                    metalness={0.8}
                    roughness={0.2}
                    clearcoat={1}
                    clearcoatRoughness={0.2}
                    transparent
                    opacity={0.8}
                />
            </mesh>
        </Float>
    );
};
