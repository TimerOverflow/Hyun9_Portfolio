export const portfolioData = {
  header: {
    name: "정현구 (Hyun9)",
    role: "Embedded & Automotive Software Engineer",
    description: "14년 차 임베디드 및 차량용 소프트웨어 엔지니어입니다. AutoSAR 기반 개발 및 CI/CD 파이프라인 구축에 강점을 가지고 있습니다.",
    github: "https://github.com/Hyun9",
    email: "test@example.com" // Placeholder
  },
  experience: [
    {
      id: 1,
      period: "2010.01 - 현재",
      company: "A 회사",
      role: "수석 연구원",
      description: "차량용 임베디드 소프트웨어 개발 및 AutoSAR 아키텍처 설계"
    },
    {
      id: 2,
      period: "2008.03 - 2009.12",
      company: "B 회사",
      role: "연구원",
      description: "펌웨어 및 디바이스 드라이버 개발"
    }
  ],
  skills: {
    board: ["STM32", "NXP S32K", "Aurix TC3xx", "Raspberry Pi"],
    language: ["C", "C++", "Python", "JavaScript"],
    tools: ["AutoSAR", "Git", "Jenkins", "Docker", "JIRA", "CANoe"]
  },
  projects: [
    {
      id: 1,
      title: "차량용 제어기 BSW 개발",
      period: "2022.01 - 2023.12",
      role: "Lead Engineer",
      overview: "AutoSAR 기반의 차량용 제어기 기본 소프트웨어(BSW) 설계 및 구현.",
      troubleshooting: "초기 부팅 속도 지연 문제를 Task 스케줄링 최적화로 해결하여 30% 개선.",
      stack: ["C", "AutoSAR", "CANoe"]
    },
    {
      id: 2,
      title: "소프트웨어 검증 자동화 환경 구축",
      period: "2021.05 - 2021.11",
      role: "CI/CD Engineer",
      overview: "Jenkins와 Docker를 활용한 펌웨어 빌드 및 테스트 자동화 시스템 구축.",
      troubleshooting: "다양한 컴파일러 환경 호환성 문제를 Docker 컨테이너화로 완벽하게 분리하여 해결.",
      stack: ["Python", "Jenkins", "Docker"]
    },
    {
      id: 3,
      title: "스마트 팩토리 모니터링 시스템 단말 개발",
      period: "2019.03 - 2020.08",
      role: "Firmware Engineer",
      overview: "센서 데이터 수집 및 서버 전송을 위한 무선 통신 단말 펌웨어 개발.",
      troubleshooting: "간헐적 네트워크 끊김 현상을 재접속 로직 최적화로 해결.",
      stack: ["C++", "FreeRTOS", "MQTT"]
    },
    {
      id: 4,
      title: "고속 신호처리 보드 브링업(Bring-up)",
      period: "2015.01 - 2016.12",
      role: "Hardware/Software Engineer",
      overview: "신규 ARM 기반 SoC 보드의 초기화 코드 작성 및 기본 동작 검증.",
      troubleshooting: "메모리 인터페이스 타이밍 이슈를 오실로스코프 분석을 통해 레지스터 설정 변경으로 해결.",
      stack: ["C", "Assembly", "Hardware Debugging"]
    }
  ]
};
