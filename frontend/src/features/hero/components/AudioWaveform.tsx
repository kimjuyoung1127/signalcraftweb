"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 3000 }) {
    const mesh = useRef<THREE.Points>(null!);

    // Generate random particles
    const particles = useMemo(() => {
        const temp = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            // Initial chaotic state (Noise)
            temp[i * 3] = (Math.random() - 0.5) * 10;     // x
            temp[i * 3 + 1] = (Math.random() - 0.5) * 10; // y
            temp[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
        }
        return temp;
    }, [count]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const positions = mesh.current.geometry.attributes.position.array as Float32Array;

        const targetX = (state.pointer.x * 5);
        const targetY = (state.pointer.y * 5);

        for (let i = 0; i < count; i++) {
            const x = positions[i * 3];
            // Note: In a real app we would store original Y to avoid weird accumulation, 
            // but for this visualizer drifting is fine/desired.
            // However, to keep it stable, we should ideally re-calculate Y from an 'original' state.
            // For MVP, we will just animate based on X and time which is stateless per frame for wave, 
            // but 'x' is drifting so 'waveY' changes.

            const waveY = Math.sin(x + time) * 1.5;
            const noise = Math.cos(x * 5 + time * 2) * 0.5;

            const dist = Math.sqrt(Math.pow(x - targetX, 2) + Math.pow(waveY - targetY, 2)); // Use waveY as approx Y
            const interaction = Math.max(0, 5 - dist) * 0.2;

            // Update Y Position: Blend of wave and noise + interaction
            positions[i * 3 + 1] = waveY + noise + Math.sin(time + x * 2) * interaction;

            // Drift X slightly to look alive
            positions[i * 3] += Math.sin(time * 0.1 + i) * 0.002;
        }

        mesh.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[particles, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.03}
                color="#3b82f6" // Blue-500
                sizeAttenuation
                transparent
                opacity={0.8}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

export default function AudioWaveform() {
    return (
        <div className="absolute inset-0 w-full h-full">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                gl={{ antialias: true, alpha: true }}
            >
                <color attach="background" args={["#000000"]} />
                <Particles />
            </Canvas>
        </div>
    );
}
