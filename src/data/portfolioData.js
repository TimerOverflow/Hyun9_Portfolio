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
            "기술 : C, AUTOSAR, Mobilgene Studio, Trace32, Power Architecture MCU, ASPICE, Git"
          ]
        },
        {
          label: "Implementation & Achievements",
          content: [
            "Mobilgene Studio를 이용한 AutoSAR 설정",
            "기능 요구사항 구현을 위해 BSW Configuration 수행 (BswM, NvM Stack, Dcm, Com Stack ...)",
            "오토에버 전개 플랫폼 수평전개 검토 및 패치 적용, 통합 중 발생하는 dependency 문제 해결",
            "개정된 ES 사양 대응: Security Access False Key Attempt 횟수 NvM 저장 및 카운트 로직 구현",
            "전력 소모 최적화: BswM 인터페이스를 이용한 Sleep / Wakeup 시퀀스 제어 로직 구현"
          ]
        },
        {
          label: "TroubleShooting",
          content: [
            "CAN 송수신 금지 전압 기능을 CDD_CanCM 모듈로 이관하여 플랫폼 설정 변경 및 코드 리팩토링 수행. 이를 통해 코드 안정성 향상 및 모듈화 검증 완료",
            "NvM False Key Attempt 저장 변수 추가 시 플래시 메모리 레이아웃 중첩 문제 해결"
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
            "기술 : C, C++, C#, STM32, Renesas, Atmel, Modbus RTU/TCP, BACnet"
          ]
        },
        {
          label: "Implementation & Achievements",
          content: [
            "30여 종의 산업용 제어기 메인보드 및 HMI 타켓 보드 초기 하드웨어 브링업(Bring-up)",
            "로우 레벨 보드 드라이버 직접 설계 및 구현",
            "파일 시스템(FATFS)과 비휘발성 메모리를 활용한 데이터 로깅 및 자체 DB 관리 로직 구현",
            "통신 프로토콜 구현: Modbus RTU/TCP, BACnet 등 산업용 표준 프로토콜 스택 개발"
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
