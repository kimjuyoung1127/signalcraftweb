# 🛸 SignalCraft: The Master Protocol (SSOT)
> **"Turning Mechanical Noise into Predictive Intelligence"**
>
> 본 문서는 시그널크래프트의 기술적 철학, 엔지니어링 아키텍처, 사업 전략, 그리고 조직 운영 체계를 통합한 단일 진실 공급원(Single Source of Truth)입니다.

---

## 1. Core Engineering & Intellectual Property (기술적 해자)

### 1.1 MAGI: 3단계 고장 진단 아키텍처 (Central Dogma)
칩에서 수집된 신호(Terminal Dogma)를 서버에서 정밀 분석하여 최적의 솔루션(Sound Front)을 배포하는 핵심 시스템입니다.

*   **MELCHIOR (멜키오르): 가동 패턴 및 기본 분석**
    *   **역할:** 60Hz Fundamental PSD(Power Spectral Density)를 분석하여 기기의 생사 확인.
    *   **기능:** ON/OFF 판별, Long-run(냉매 부족, 문 열림) 감지.
    *   **세부 지표:** 가동 시간(ON Duration)이 정상 범위(15~20분)를 벗어나는지 추적.
*   **BALTHASAR (발타자르): 전기/운동 에너지 분석**
    *   **역할:** 모터의 힘과 전기적 불균형을 감지.
    *   **기능:** 60Hz 대비 120Hz/180Hz 배음 비율 분석.
    *   **분석 포인트:** Phase Drift(60Hz와 120Hz 위상차 흔들림), 기동 시 120Hz 에너지 스파이크(Startup Mode) 분석.
*   **CASPER (캐스퍼): 기계적 결함 및 미세 소리 분석**
    *   **역할:** 고주파 대역(Coil, Valve)의 미세 소리 및 스펙트럼 평탄도 분석.
    *   **기능:** 240Hz/60Hz 비율 급증 시 축 정렬 불량(Misalignment) 감지.
    *   **특징:** 스펙트럼 평탄도(Spectral Flatness) 및 고주파 천장(Signal Ceiling) 부양 현상 감지.

### 1.2 IASP (Industrial Acoustic Standard Protocol)
산업용 음향 진단의 세계 표준을 지향하는 5대 핵심 프로토콜입니다.

1.  **Acoustic Chiseling:** 벡터 감산(Vector Subtraction)을 통해 노이즈를 제거하고 순수 기계음만 복원.
2.  **Sound Tokenization:** WAV 파형을 의미론적 기호(예: `[STR: 기동]`)로 압축하여 데이터 전송량 99.9% 절감.
3.  **Harmonic Lock & Audit:** 기본파와 배음의 물리적 상관관계를 이용한 음향 다중 인증(MFA).
4.  **Phase Jitter RUL:** 박자의 불안정성(Phase Variance)을 측정하여 잔여 수명을 1% 단위로 예측.
5.  **Virtual Sensor Fusion:** 단 하나의 마이크 센서로 온도, 진동, 전류 등 5종의 가상 데이터를 생성.

### 1.3 Vertical AI Layers (구현 알고리즘 상세)
기존 FFT의 연산 부하를 극복하고 IoT 칩(ESP32)에서 구동하기 위한 계층형 구조입니다.

*   **Layer 0: Domain Knowledge (기반 지식)**
    *   **Dynamic Goertzel Search:** 전체 FFT 대신 ROI(관심 대역: 60, 120, 180, 240, 300, 360Hz)에만 괴르첼 필터를 동적 할당하여 연산 효율 극대화.
*   **Layer 1: ROI Target Sensing (임계치 설정)**
    *   **Otsu Algorithm:** 히스토그램 기반 이진화 기법으로 배경 소음(Noise Floor)과 유효 신호(Signal)의 경계값을 실시간 자동 설정 (Adaptive Thresholding).
*   **Layer 2: Self-Adaptive Thresholding (가동 분석)**
    *   **2차 IIR 필터:** 재귀적 구조를 사용하여 적은 메모리로 ON/OFF 듀레이션 비율 추적.
*   **Layer 3: Noise-Cancelling (노이즈 제거)**
    *   **Spectral Subtraction:** OFF 구간의 배경 소음을 학습하여 ON 구간 신호에서 제거. 미세 결함 탐지력 향상.
*   **Layer 4: Harmonics & H-ratio (심화 진단)**
    *   **Harmonic Growth:** 3차(180Hz), 4차(240Hz) 배음 에너지의 상승 속도(미분값) 분석.

### 1.4 세부 진단 알고리즘 모듈
*   **Alpha:** 120Hz/60Hz 비율 급증 → 전기적 불균형, 자기적 포화.
*   **Beta:** 특정 시간 이상 과부하 지속 → 냉매 부족, 과부하.
*   **Charlie:** 180Hz/60Hz 비율 급증 → 고정자(Stator) 결함, 전원 품질 불량.
*   **Delta:** 110Hz 배음 및 330Hz 변화 → 밸브 기계적 특성 및 증발기 온도 상관관계 분석.

---

## 2. Product & Market Strategy (시장 및 서비스)

### 2.1 Smart Defrost (Plougher): 소프트웨어 정의 제상
비접촉식으로 성에를 감지하고 제어하는 지능형 시스템입니다.
*   **감지 지표:** 180Hz/60Hz 비율 급증(부하 상승), Long Running(효율 저하), Phase Jitter(액 유입).
*   **V11 알고리즘:** Load Index와 Duration Index가 모두 임계치를 초과할 때만 제상을 트리거하여 오보 차단.
*   **제어 방식:** 릴레이(DI 트리거) 또는 Modbus(RS-485) 통신.

### 2.2 Client Journey & Service Flow
*   **신규 고객 유입:**
    *   **Auto-detection Algorithm:** 단상/3상 판별 → 압축기 타입(왕복동/스크롤) 판별 → 부하 타입(정속/인버터) 자동 인식.
*   **서비스 운영:**
    *   **스마트 일지:** 사용자에게 직관적인 기기 상태 로그 제공.
    *   **수리 생태계 (Repair Ecology):**
        *   고장 예측 시, GPS 기반 가장 가까운 수리기사 매칭.
        *   **출장비 자동 산출:** 거리 및 수리 난이도에 따른 투명한 견적 제공.
        *   **Repairman App:** 기사 전용 앱을 통해 수락/거절, 실제 고장 부품 피드백(알고리즘 정확도 개선 루프).

### 2.3 하드웨어 및 양산 전략
*   **하드웨어 스펙:** ESP32 기반 MCU.
*   **통신 전략:** Wi-Fi(데이터 전송) + LoRa/LoRaWAN(장거리 현장 커버리지) 하이브리드.
*   **양산 로드맵:** 샘플 제작 → 필드 검증 → KC 승인 → 6월 양산 목표.
*   **가격 정책:**
    *   중소형 창고: 월 5만 원 (구독형).
    *   대형 공장: 별도 견적 산정.
    *   소구점: 보험 대비 압도적인 조기 감지(2~3일 전) 능력.

### 2.4 타겟 시장 (Target Market)
1.  **육류 가공/보관:** 엄격한 온도 관리가 필수적인 중소형~대형 공장.
2.  **콜드체인 물류 센터:** 고장 시 수억 원의 피해가 발생하는 핵심 시설.
3.  **특수 보관:** 제약, 바이오, 도축업 등.
*   **핵심 타겟:** 15년 이상 노후 기기를 보유하여 연 3~4회 고장을 겪는 사업장.

---

## 3. Human & Culture (조직 운영 체계)

### 3.1 HR Protocol: Organizational Chiseling
기술적 방법론(IASP)을 조직 운영에 적용한 독자적 HR 체계입니다.
*   **Talent Chiseling:** 과거 경력(Noise)보다는 학습의 가속도(미분값)를 중시하여 인재 선별.
*   **Harmonic Lock:** 입사 후 72시간(온보딩) 동안 개인의 열정과 조직 비전의 주파수를 동기화.
*   **Feedback Denoising:** 비난(Vector)은 제거하고 대안(Coordinate)만 남기는 순수한 피드백 문화.
*   **Career Path Reasoning:** 가우시안 프로세스 확률 모델을 통해 1년 뒤의 성장 지점을 설계.

### 3.2 Operational Guide (주간 루틴)
*   **월요일 (12:00):** 금주 계획 제출 및 리더 체크.
*   **수요일 (16:00):** 진행률 현행화(Update).
*   **금요일 (16:00):** 주간 마감 및 달성률 체크 (70% 미만 시 사유 분석).
*   **R&R (Role & Responsibility):**
    *   이희진: 패턴 분석 / 알고리즘 설계.
    *   김민교: 센서 / 하드웨어 개발.
    *   이담: HR / 사업 지원.

---

## 4. Hardware Physics & Competitor Analysis

### 4.1 Why Sound? (소리를 사용하는 이유)
*   **Acoustic Emission (AE):** 열이나 진동이 발생하기 전, 미세 균열이나 마찰이 시작되는 '찰나'의 탄성파를 포착.
*   **Wideband Signal:** 소리는 기계의 모든 부품(모터, 베어링, 밸브 등)의 상태 정보를 담고 있는 광대역 신호.
*   **Fingerprint:** 회전 기계는 고유의 주파수 지문(60Hz + n차 배음)을 가지며, 고장 시 이 구조가 붕괴되는 것을 쉽게 포착 가능.

### 4.2 경쟁사 분석 및 대응
*   **직접 경쟁 (예: 쿨리닉):**
    *   대응: 카메라 기반 방식 대비 '소리'의 저비용, 설치 용이성, 조기 감지 능력 강조.
*   **간접 경쟁 (IoT 온도 조절기):**
    *   대응: 단순 모니터링을 넘어선 '지능형 예측 및 제어(Smart Defrost)' 솔루션으로 차별화.
*   **기술적 Q&A 대응:**
    *   **진동 센서 대비 우위:** 마이크 센서의 가격 경쟁력 및 크랙 전파 속도 우위.
    *   **보안/노이즈:** Spectral Subtraction 및 사운드 지문 기술로 현장 소음 완벽 분리.

---

## 5. 파트너십 (Partnership)
*   **청산바다:** 테스트베드 제공.
*   **인앤아웃 코퍼레이션:** 하드웨어 제작 협력.
*   **오즈온바이오:** Bio 냉동고 PoC 진행.
*   **R&D 지원:** 한국해양대 산학협력단, 기술보증기금.
