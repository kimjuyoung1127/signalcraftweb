"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// --------------------------------------------------------
// Vertex Shader: 우아한 움직임의 핵심
// --------------------------------------------------------
const vertexShader = `
  uniform float uTime;
  uniform float uHover; // 0.0 ~ 1.0
  
  attribute float aScale;
  
  varying float vElevation;

  void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    
    // [핵심 수정] 폭풍 같은 노이즈를 제거하고, 긴 파장의 사인파 2개를 겹침
    
    // Wave 1: 크게 넘실거리는 기본 파도 (X축 기준)
    float wave1 = sin(modelPosition.x * 0.3 + uTime * 0.8);
    
    // Wave 2: 약간 비스듬하게 흐르는 보조 파도 (입체감 부여)
    float wave2 = sin(modelPosition.x * 0.5 + modelPosition.z * 0.4 + uTime * 1.2);
    
    // 상호작용: 마우스 오버 시 파도의 높이(Amplitude)가 커짐
    // 평소엔 0.5배로 잔잔하게 -> 활성화되면 1.2배로 풍성하게
    float amplitude = 0.5 + (uHover * 0.7); 
    
    float elevation = (wave1 + wave2) * amplitude;
    
    modelPosition.y += elevation;

    vec4 viewPosition = viewMatrix * modelPosition;
    gl_Position = projectionMatrix * viewPosition;
    
    // 입자 크기: 너무 작지 않게 키우고, 원근감 적용
    gl_PointSize = (100.0 * aScale) * (1.0 / -viewPosition.z);
    
    // 색상 밝기를 위해 높이값 전달
    vElevation = elevation;
  }
`;

// --------------------------------------------------------
// Fragment Shader: 밝고 투명한 느낌
// --------------------------------------------------------
const fragmentShader = `
  uniform float uHover;
  varying float vElevation;

  void main() {
    // 입자를 부드러운 원형으로 깎음 (Glow 효과)
    float dist = distance(gl_PointCoord, vec2(0.5));
    float strength = 1.0 - (dist * 2.0);
    strength = pow(strength, 2.0); // 외곽을 더 흐릿하게

    // 색상 팔레트: 어두운 파랑 -> 밝은 청록/화이트
    // 우아함을 위해 Cyan(청록)과 White를 섞음
    vec3 colorDeep = vec3(0.1, 0.3, 0.6);  // 깊은 바다색
    vec3 colorBright = vec3(0.4, 0.9, 1.0); // 밝은 아쿠아

    // 파도의 높이에 따라 색상 믹스 (높은 곳일수록 밝게 빛남)
    vec3 mixedColor = mix(colorDeep, colorBright, vElevation * 0.5 + 0.5);
    
    // 상호작용 시 전체적으로 더 밝게(White) 틴트
    mixedColor = mix(mixedColor, vec3(1.0), uHover * 0.3);

    gl_FragColor = vec4(mixedColor, strength * 0.8); // 투명도 0.8
  }
`;

function ElegantWaves({ count = 6000 }) {
    const meshRef = useRef<THREE.Points>(null!);
    const hoverValue = useRef(0);

    // 정갈한 라인(Line) 형태로 배치하되, 약간의 불규칙성(Scale)만 부여
    const { positions, scales } = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const scales = new Float32Array(count);

        const rows = 50;
        const cols = count / rows;

        for (let i = 0; i < count; i++) {
            const row = Math.floor(i / cols);
            const col = i % cols;

            // X: 넓게 펼침
            positions[i * 3] = (col / cols) * 24 - 12;
            // Y: 0 (쉐이더에서 변형)
            positions[i * 3 + 1] = 0;
            // Z: 깊이감 있게 배치
            positions[i * 3 + 2] = (row / rows) * 10 - 5;

            // 크기 랜덤 (반짝이는 효과)
            scales[i] = Math.random() * 0.5 + 0.5;
        }
        return { positions, scales };
    }, [count]);

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uHover: { value: 0 },
        }),
        []
    );

    const [hovered, setHover] = useState(false);

    useFrame((state) => {
        uniforms.uTime.value = state.clock.getElapsedTime();

        // 아주 부드러운 전환 (Damping 값을 0.03으로 낮춰 천천히 변하게 함)
        const targetHover = hovered ? 1 : 0;
        hoverValue.current = THREE.MathUtils.lerp(hoverValue.current, targetHover, 0.03);
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
        // 배경: 완전 블랙이 아닌, 깊은 밤하늘 같은 그라데이션 적용
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-slate-900 to-black">
            <Canvas camera={{ position: [0, 4, 10], fov: 50 }} dpr={[1, 2]}>
                {/* Fog를 짙은 남색으로 설정하여 입자가 자연스럽게 사라지게 함 */}
                <fog attach="fog" args={["#0f172a", 5, 20]} />
                <ElegantWaves />
            </Canvas>
        </div>
    );
}