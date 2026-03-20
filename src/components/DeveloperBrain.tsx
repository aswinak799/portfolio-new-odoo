import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const DeveloperBrain = () => {
    const groupRef = useRef<THREE.Group>(null);
    const linesRef = useRef<THREE.LineSegments>(null);
    const particlesRef = useRef<THREE.Points>(null);

    // Configuration
    const particleCount = 200;
    const connectionDistance = 2.5;

    // Setup nodes and edges
    const [positions, connectLines] = useMemo(() => {
        const coords = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            const r = 5 * Math.cbrt(Math.random()); // distribute within a sphere
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);

            coords[i * 3] = r * Math.sin(phi) * Math.cos(theta); // x
            coords[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta); // y
            coords[i * 3 + 2] = r * Math.cos(phi); // z
        }

        // pre-calculate connections
        const linePositions = [];
        for (let i = 0; i < particleCount; i++) {
            for (let j = i + 1; j < particleCount; j++) {
                const dx = coords[i * 3] - coords[j * 3];
                const dy = coords[i * 3 + 1] - coords[j * 3 + 1];
                const dz = coords[i * 3 + 2] - coords[j * 3 + 2];
                const distSq = dx * dx + dy * dy + dz * dz;

                if (distSq < connectionDistance * connectionDistance) {
                    linePositions.push(
                        coords[i * 3], coords[i * 3 + 1], coords[i * 3 + 2],
                        coords[j * 3], coords[j * 3 + 1], coords[j * 3 + 2]
                    );
                }
            }
        }

        return [new Float32Array(coords), new Float32Array(linePositions)];
    }, []);

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.1;
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
        }

        // Pulse effect
        if (particlesRef.current && particlesRef.current.material) {
            const material = particlesRef.current.material as THREE.PointsMaterial;
            material.size = 0.05 + Math.sin(state.clock.elapsedTime * 2) * 0.02;
        }
    });

    return (
        <group ref={groupRef}>
            <points ref={particlesRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={positions.length / 3}
                        array={positions}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.06}
                    color="#3b82f6" // Primary neon blue
                    transparent
                    opacity={0.8}
                    blending={THREE.AdditiveBlending}
                />
            </points>
            <lineSegments ref={linesRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={connectLines.length / 3}
                        array={connectLines}
                        itemSize={3}
                    />
                </bufferGeometry>
                <lineBasicMaterial
                    color="#22c55e" // Secondary neon green
                    transparent
                    opacity={0.15}
                    blending={THREE.AdditiveBlending}
                />
            </lineSegments>
        </group>
    );
};
