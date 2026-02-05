"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// --------------------------------------------------------
// Vertex Shader: Smoother Motion & Depth Passing
// --------------------------------------------------------
const vertexShader = `
  uniform float uTime;
  uniform float uHover; 
  uniform float uAmplitude;
  uniform float uPointSize;
  
  attribute float aScale;
  attribute float aRandom;
  
  varying float vElevation;
  varying float vViewZ; // For Depth of Field

  void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    
    // [Mod] Smooth, Undulating Motion
    
    // Wave 1: Large smooth wave
    float wave1 = sin(modelPosition.x * 0.3 + uTime * 0.6);
    
    // Wave 2: Diagonal flow for organic feel
    float wave2 = sin(modelPosition.x * 0.4 + modelPosition.z * 0.3 + uTime * 0.9);
    
    // Interaction: Amplitude increases
    float amplitude = uAmplitude + (uHover * 0.7); 
    
    float elevation = (wave1 + wave2) * amplitude;
    
    modelPosition.y += elevation;

    vec4 viewPosition = viewMatrix * modelPosition;
    gl_Position = projectionMatrix * viewPosition;
    
    // Particle Size
    // Front particles = Larger, Back = Smaller
    gl_PointSize = (uPointSize * aScale) * (1.0 / -viewPosition.z);
    
    vElevation = elevation;
    vViewZ = -viewPosition.z; 
  }
`;

// --------------------------------------------------------
// Fragment Shader: Depth of Field & Cyan/White Palette
// --------------------------------------------------------
const fragmentShader = `
  uniform float uHover;
  varying float vElevation;
  varying float vViewZ;

  void main() {
    float dist = distance(gl_PointCoord, vec2(0.5));
    
    // [Mod] Depth of Field Logic
    // Focus range: ~5.0 - 15.0 units away from camera
    // Closer (Low vViewZ) = Sharper
    // Further (High vViewZ) = Blurrier
    
    // Normalize depth roughly (0.0 near, 1.0 far)
    float depth = smoothstep(5.0, 20.0, vViewZ);
    
    // Sharpness: Front = 8.0 (Hard), Back = 2.0 (Soft)
    float sharpness = mix(8.0, 2.0, depth);
    
    float strength = 1.0 - (dist * 2.0);
    
    // Discard edges
    if(strength < 0.0) discard;
    
    // Apply dynamic sharpness
    strength = pow(strength, sharpness);

    // [Mod] Color Palette: White & Cyan ONLY
    vec3 colorCyan = vec3(0.0, 1.0, 1.0); // Pure Cyan
    vec3 colorWhite = vec3(1.0, 1.0, 1.0); // Pure White

    // Mix logic:
    // Higher elevation OR Closer to camera = White
    // Lower elevation OR Further = Cyan
    
    float mixFactor = (vElevation * 0.5 + 0.5); // 0~1 based on height
    // Add interaction brightness
    mixFactor += uHover * 0.3;
    
    vec3 mixedColor = mix(colorCyan, colorWhite, mixFactor);

    // Final Alpha
    // Fade out distant particles significantly
    float alpha = strength * (1.0 - depth * 0.8);
    
    gl_FragColor = vec4(mixedColor, alpha);
  }
`;

function ElegantWaves({ count = 8000 }) {
    const meshRef = useRef<THREE.Points>(null!);
    const hoverValue = useRef(0);

    const { positions, scales, randoms } = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const scales = new Float32Array(count);
        const randoms = new Float32Array(count);

        const rows = 60;
        const cols = count / rows;

        for (let i = 0; i < count; i++) {
            const row = Math.floor(i / cols);
            const col = i % cols;

            // Wide spread
            const x = (col / cols) * 30 - 15;
            const z = (row / rows) * 14 - 7;

            positions[i * 3] = x;
            positions[i * 3 + 1] = 0;
            positions[i * 3 + 2] = z;

            scales[i] = Math.random();
            randoms[i] = Math.random();
        }
        return { positions, scales, randoms };
    }, [count]);

    const [hovered, setHover] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uHover: { value: 0 },
            uAmplitude: { value: 0.5 },
            uPointSize: { value: 400.0 },
        }),
        []
    );

    useFrame((state) => {
        uniforms.uTime.value = state.clock.getElapsedTime();

        // Responsive adjustment (only once or periodically)
        const mobile = state.size.width < 768;
        if (mobile !== isMobile) {
            setIsMobile(mobile);
        }

        uniforms.uAmplitude.value = mobile ? 0.8 : 0.5;
        uniforms.uPointSize.value = mobile ? 800.0 : 400.0;

        const targetHover = hovered ? 1 : 0;
        hoverValue.current = THREE.MathUtils.lerp(hoverValue.current, targetHover, 0.05);
        uniforms.uHover.value = hoverValue.current;
    });

    return (
        <points
            ref={meshRef}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                    args={[positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-aScale"
                    count={scales.length}
                    array={scales}
                    itemSize={1}
                    args={[scales, 1]}
                />
                <bufferAttribute
                    attach="attributes-aRandom"
                    count={randoms.length}
                    array={randoms}
                    itemSize={1}
                    args={[randoms, 1]}
                />
            </bufferGeometry>
            <shaderMaterial
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                vertexColors={false}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                transparent={true}
            />
        </points>
    );
}

export default function SmoothWaveCanvas() {
    return (
        <div className="absolute inset-0 w-full h-full bg-transparent">
            <Canvas camera={{ position: [0, 4, 12], fov: 45 }} dpr={[1, 2]}>
                <fog attach="fog" args={["#000000", 5, 30]} />
                <ElegantWaves />
            </Canvas>
        </div>
    );
}
