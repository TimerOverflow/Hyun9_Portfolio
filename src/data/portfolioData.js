export const portfolioData = {
  header: {
    name: "정현구 (Hyun9)",
    role: "Embedded & Automotive Software Engineer",
    description: "14년 차 임베디드 및 차량용 소프트웨어 엔지니어입니다. AutoSAR 기반 개발 및 CI/CD 파이프라인 구축에 강점을 가지고 있습니다.",
    github: "https://github.com/TimerOverflow",
    email: "test@example.com"
  },
  experience: [
    {
      id: 1,
      period: "2023.02 - 현재",
      company: "엠씨넥스",
      role: "Software Developer",
      description: "HKMC 바디 도메인 편의 제어기(ECU) SW 개발 및 양산"
    },
    {
      id: 2,
      period: "2012.01 - 2023.02",
      company: "시스트로닉스",
      role: "SW Engineer",
      description: "산업용 자동제어 시스템 SW 개발 및 하드웨어 브링업"
    }
  ],
  skills: {
    board: ["STM32", "NXP S32K", "Aurix TC3xx", "Renesas", "Atmel"],
    language: ["C", "C++", "C#", "Python", "PowerShell"],
    tools: ["AutoSAR (Mobilgene)", "Trace32", "GitLab CI/CD", "Docker", "CANoe", "ASPICE"]
  },
  projects: [
    {
      id: 1,
      title: "HKMC 바디 도메인 편의 제어기(ECU) SW 개발 및 양산",
      period: "2023/02 ~ 2026/03",
      role: "Software Developer",
      details: [
        {
          label: "Overview",
          content: [
            "소개 : AutoSAR 기반 바디 도메인 편의 제어기(ECU)의 SW 개발 및 양산 업무를 수행하면서 경험한 내용",
            "기간 : 2023/02 ~ 2026/03",
            "근무처 : 엠씨넥스",
            "담당 역할 : Software Developer",
            "기술 : C, `AUTOSAR`, `Mobilgene Studio`, `Trace32`, `Power Architecture MCU`, `ASPICE`, `Git`"
          ]
        },
        {
          label: "Implementation & Achievements",
          content: [
            { type: 'header', text: 'Mobilgene Studio를 이용한 AutoSAR 설정', icon: '⚙️' },
            "기능 요구사항 구현을 위해 `BSW Configuration` 수행 (`BswM`, `NvM Stack`, `Dcm`, `Com Stack` ...)",
            "오토에버 전개 플랫폼 수평전개 검토 및 패치 적용하고, 플랫폼 패치 적용 및 통합 중 발생하는 `dependency` 문제 원인 파악 및 해결.",
            "개정된 ES 사양 대응 하기 위해 `Dcm` 스택이 `Security Access`에서 `False Key Attempt` 횟수를 `NvM` 에 저장하도록 하고, `Access Level`에 따라 별도 카운트 하도록 설정 변경.",
            { type: 'header', text: '고객사 SR 기반 기능 요구사항 개발을 위한 SWC 설계 및 구현', icon: '🚀' },
            "제어기 주요 파라미터 상태 변수 보존을 위한 `NvM` 연동 인터페이스 설계 및 추가.",
            "ECU 전력 소모 최적화를 위해 `BswM` 인터페이스를 이용한 `Sleep / Wakeup` 시퀀스 제어 로직 구현.",
            "`Dcm` 의 `False Key Attempt` 저장 변수가 `NvM` 에 추가되면서 기존 기능 구현을 위한 메모리 영역과 `overlap` 되어 플래시 메모리 레이아웃 재구성 필요. `*.ld` 파일 수정을 주도하여 추가된 기능과 기존 기능 정상 동작 확인."
          ]
        },
        {
          label: "TroubleShooting",
          content: [
            {
              type: 'toggle',
              title: 'OTA 백그라운드 전송 중 제어기 리셋 이슈 디버깅',
              content: [
                { type: 'subTitle', text: '문제 현상' },
                "제어기 OTA 백그라운드 다운로드가 진행되는 도중, 특정 기능을 실행하면 OTA와 특정 기능이 모두 실패하며 제어기가 리셋되는 치명적 결함 발생. (재현율 약 30%)",
                { type: 'subTitle', text: '원인 분석 및 해결' },
                "리셋 트리거 분석: `Trace32`를 이용하여 메인 코어의 레지스터(`F_SOFT_FUNC`) 확인 결과, `Functional reset` 확인.",
                "코어 간 동기화 추적: 서브 코어에서 발생한 치명적 하드웨어 예외(`Os_ImpMachineCheckException`)가 코어 간 셧다운 메시지(`OS_IC_ShutdownCore`)를 통해 메인 코어로 전달되어 전체 시스템 셧다운 유도.",
                "어셈블리 및 레지스터 분석: 코어의 `MCSR` 분석을 통해 `Instruction Fetch Error` 확인. 에러 발생 지점 주소를 저장한 레지스터 확인 결과 특정 기능 실행을 위한 정보를 플래시 메모리에서 읽어오는 `memcpy` 명령어임을 특정.",
                { type: 'subTitle', text: '결과' },
                "OTA 및 특정 기능 병렬 테스트 조건에서 발생하던 MCU 리셋(`Machine Check Exception`) 현상 해결."
              ]
            },
            {
              type: 'toggle',
              title: '제어기 동작 및 CAN 송수신 금지 전압 기능 리팩토링',
              content: [
                "ASW에 핸드 코드로 작성 되어 있던 부분을 `CDD_CanCM` 모듈이 핸들링 하도록 플랫폼 설정 변경 및 코드 리팩토링.",
                "그 결과 검증된 모듈을 통한 기능 구현으로 코드 안정성 향상."
              ]
            }
          ]
        }

      ],
      stack: ["AutoSAR", "C", "Mobilgene Studio", "Trace32"]
    },
    {
      id: 2,
      title: "산업용 자동제어 시스템 SW 개발",
      period: "2012/01 ~ 2023/02",
      role: "SW Engineer",
      details: [
        {
          label: "Overview",
          content: [
            "소개 : 산업용 제어기 메인보드 및 HMI 타켓 보드 하드웨어 브링업 및 로우 레벨 드라이버 설계",
            "기술 : C, C++, C#, `STM32`, `Renesas`, `Atmel`, `Modbus RTU/TCP`, `BACnet`"
          ]
        },
        {
          label: "Implementation & Achievements",
          content: [
            { type: 'header', text: '다양한 타겟 하드웨어 브링업 및 고객 맞춤형 제어 시스템 구현', icon: '📟' },
            "30여 종에 달하는 산업용 제어기 메인보드와 소형 디스플레이부터 8인치 고해상도 터치 패널에 이르는 8종 이상의 HMI 타켓 보드 초기 하드웨어 브링업(Bring-up) 및 로우 레벨 보드 드라이버 직접 설계 및 구현.",
            "파일 시스템(`FATFS`)과 비휘발성 메모리를 활용하여, 장비의 운전 트렌드 데이터 조회 및 실시간/과거 경보(`Alarm`) 리스트 이력을 효율적으로 저장하고 검색할 수 있는 경량화된 자체 DB 관리 로직 구현.",
            { type: 'header', text: '자체 임베디드 소프트웨어 라이브러리 개발', icon: '📂' },
            "어플리케이션과 하드웨어 종속 로직이 결합(`coupled`)된 레거시 코드를 분리하는 구조적 리팩토링 주도.",
            "하드웨어 종속성이 있는 로직을 디바이스 드라이버로 모듈화하고, 재사용 가능한 어플리케이션 로직을 별도 모듈로 구현."
          ]
        },
        {
          label: "TroubleShooting",
          content: [
            "고속 신호처리 보드 브링업 중 메모리 인터페이스 타이밍 이슈를 오실로스코프 분석을 통해 레지스터 설정 변경으로 해결"
          ]
        }
      ],
      stack: ["C", "C++", "STM32", "Modbus"]
    }
  ]
};
