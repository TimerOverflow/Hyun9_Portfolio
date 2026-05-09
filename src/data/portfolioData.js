export const portfolioData = {
  header: {
    name: "정현구",
    englishName: "Hyungu Jeong",
    role: "Embedded / Firmware Engineer",
    description: "14년 차 임베디드 및 차량용 소프트웨어 엔지니어입니다. AutoSAR 기반 개발 및 CI/CD 파이프라인 구축에 강점을 가지고 있습니다.",
    github: "https://github.com/TimerOverflow",
    phone: "010-4720-9421",
    email: "38400bps@gmail.com"
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
            "기술 : `C`, `AutoSAR`, `Mobilgene Studio`, `Trace32`, `STM SPC58 Series MCU`, `ASPICE`, `Git`"
          ]
        },
        {
          label: "Implementation & Achievements",
          content: [
            { type: 'header', text: 'Mobilgene Studio를 이용한 AutoSAR 설정', icon: '⚙️' },
            {
              type: 'bullet',
              text: "기능 요구사항 구현을 위해 BSW Cofiguration 수행 (`BswM`, `NvM Stack`, `Dcm`, `Com Stack` …)",
            },
            {
              type: 'bullet',
              text: "오토에버 플랫폼 수평전개 검토 및 패치 적용하고, 패치 적용 및 통합 중 발생하는 dependency 문제 원인 파악 및 해결.",
            },
            {
              type: 'bullet',
              text: "개정된 ES 사양 대응 하기 위해 `Dcm` 스택이 Security Access에서 False Key Attempt 횟 수를 `NvM`에 저장하도록 하고, Access Level에 따라 별도 카운트 하도록 설정 변경.",
            },
            {
              type: 'bullet',
              text: "제어기 동작 및 CAN 송수신 금지 전압 기능이 ASW에 핸드 코드로 작성 되어 있던 부분을 `CDD_CanCM` 모듈이 핸들링 하도록 플랫폼 설정 변경 및 코드 리팩토링. 그 결과 검증된 모듈을 통한 기능 구현으로 코드 안정성 향상.",
            },
            { type: 'header', text: '고객사 SR 기반 요구사항 개발을 위한 SWC 설계 및 구현', icon: '🚀' },
            {
              type: 'bullet',
              text: "제어기 주요 파라미터 상태 변수 보존을 위한 `NvM` 연동 인터페이스 설계 및 추가.",
            },
            {
              type: 'bullet',
              text: "ECU 전력 소모 최적화를 위해 `BswM` 인터페이스를 이용한 Sleep / Wakeup 시퀀스 제어 로직 구현.",
            },
            {
              type: 'bullet',
              text: "`Dcm`의 False Key Attempt 저장 변수가 `NvM`에 추가되면서 기존 기능 구현을 위한 메모리 영역과 overlap 되어 플래시 메모리 레이아웃 재구성 필요. `*.ld` 파일 수정을 주도하여 추가된 기능과 기존 기능 정상 동작 확인.",
            },
            {
              type: 'bullet',
              text: "협조 제어기간 암호 키 학습을 위한 시퀀스, PBKDF2를 이용한 키 유도, 유도된 암호 키 HSM 저장 로직 구현.",
            },
            {
              type: 'bullet',
              text: "협조 제어기간 보안 통신 메시지 암호화/복호화 로직을 구현하고, OTA 상황에서 BSW의 `Csm` 모듈 점유를 고려한 비동기 처리 반영.",
            },
            { type: 'header', text: 'ASPICE 프로세스 기반 제어기 개발 및 검증 활동', icon: '📋' },
            {
              type: 'bullet',
              text: "요구사항 명세, 아키텍쳐 디자인, 상세 유닛 개발 등 산출물 ALM 통해 작성 및 관리.",
            },
            {
              type: 'bullet',
              text: "고객사 프로세스 심사 대응 (SPQA)",
            },
            { type: 'header', text: '4개 차종 제어기 양산 업무 대응 경험', icon: '🚘' },
            {
              type: 'bullet',
              text: "고객사 마일스톤 별 소프트웨어 배포, 실차 평가 대응.",
            },
            {
              type: 'bullet',
              text: "ES 사양서 해석, 그에 따른 제어기 시스템 검증 계획 수립 및 성적서 작성.",
            },
            {
              type: 'bullet',
              text: "필드 이슈 접수 시 `Trace32`를 이용한 심층 원인 분석, 대응 방안 수립. (TroubleShooting 참고)"
            }
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
                {
                  type: 'bullet',
                  text: "제어기 OTA  백그라운드 다운로드가 진행되는 도중, 특정 기능을 실행하면 OTA와 특정 기능이 모두 실패하며 제어기가 리셋되는 치명적 결함 발생. (재현율 약 30%)",
                },
                { type: 'subTitle', text: '원인 분석 및 해결' },
                {
                  type: 'bullet',
                  text: "Trace32를 이용하여 메인 코어의 레지스터(`F_SOFT_FUNC`) 확인 결과, Functional reset 확인.",
                },
                {
                  type: 'bullet',
                  text: "서브 코어에서 발생한 치명적 하드웨어 예외(`Os_ImpMachineCheckException`)가 코어 간 셧다운 메시지(`OS_IC_ShutdownCore`)를 통해 메인 코어로 전달되어 전체 시스템 셧다운 유도.",
                },
                {
                  type: 'bullet',
                  text: "코어의 `MCSR` 레지스터 분석을 통해 Instruction Fetch Error 확인. 에러 발생 지점 주소를 저장한 레지스터 확인 결과 특정 기능 실행을 위한 정보를 플래시 메모리에서 읽어오는 `memcpy` 명령어임을 특정.",
                },
                {
                  type: 'bullet',
                  text: "백그라운드 OTA Task가 플래시 메모리 영역을 지우고 쓰는 동시에, 특정 기능 실행을 위한 데이터를 읽으려 시도하면서 플래시 메모리 컨트롤러의 Read-While-Write (RWW) 충돌 발생.",
                },
                {
                  type: 'bullet',
                  text: "플래시 메모리의 워킹 상태를 확인하고 read 또는 write와 같은 요청을 처리하도록 예외 처리 추가. (`idle` / `busy`)",
                },
                { type: 'subTitle', text: '결과' },
                {
                  type: 'bullet',
                  text: "OTA 및 특정 기능 병렬 테스트 조건에서 발생하던 MCU 리셋(`Machine Check Exception`) 현상 해결.",
                },
                {
                  type: 'bullet',
                  text: "멀티코어 환경의 복잡한 예외 처리 메커니즘을 명확히 분석하여, 향후 유사한 리셋 현상 발생 시 대처 가능한 디버깅 경험 체득.",
                }
              ]
            },
            {
              type: 'toggle',
              title: '북미 제어기 DTC 이슈 실차 Live 디버깅',
              content: [
                { type: 'subTitle', text: '문제 현상' },
                {
                  type: 'bullet',
                  text: "북미 지역 판매 차량에서 다수의 제어기 DTC 발생 보고.",
                },
                {
                  type: 'bullet',
                  text: "고객사 로그 확인 결과, 제어기의 주기적인 CAN 메시지 송신이 누락되었으나 공급 전압은 정상 범위로 확인됨.",
                },
                {
                  type: 'bullet',
                  text: "해당 이슈는 차량 배터리 전원 차단 후 재인가(Hard Reset) 시 일시적으로 증상이 해소되는 특징을 보임.",
                },
                { type: 'subTitle', text: '원인 분석 및 해결' },
                {
                  type: 'bullet',
                  text: "문제 발생 차량에서 직접 디버깅을 수행하기 위해 북미 ○○○○ 지역 현지 출장.",
                },
                {
                  type: 'bullet',
                  text: "실차에서 문제가 발생한 Live 상태를 유지한 채, Debug Port가 제거된 양산용 제어기에 Wiring하여 `Trace32` Attach 성공.",
                },
                {
                  type: 'bullet',
                  text: "디버깅 결과, MCU의 IVPR(Interrupt Vector Prefix Register) 레지스터 값이 변조되어, OS 인터럽트 발생 시 정상적인 ISR 주소로 분기하지 못하는 현상 확인.",
                },
                {
                  type: 'bullet',
                  text: "이로 인해 OS 레벨에서 정상적으로 동작하지 않았고, 하위의 SW Task 및 CAN 통신 송신 기능이 불능 상태임을 규명.",
                },
                {
                  type: 'bullet',
                  text: "IVPR 은 MCU `POR(Powr On Reset)`시 1회 설정 후 조작하지 않도록 설계됨. SW 리뷰(소스코드, RAM/FLASH Dump 분석, 기계어 단위 전수 조사)를 통해 SW 오동작에 의한 변경 가능성이 없음을 객관적인 데이터로 증명하고 고객사에 회신.",
                },
                {
                  type: 'bullet',
                  text: "해당 MCU를 회수하여 Silicon Vendor 측에 원인 조사를 의뢰하였으나 Root Cause 파악 불가로 회신되었으며, 고객사에 관련 내용 정리하여 회신.",
                },
                { type: 'subTitle', text: '결과' },
                {
                  type: 'bullet',
                  text: "이슈의 Root Cause를 규명하지는 못하였으나, 문제가 발생된 실제 차량의 Live 상태에서 하드웨어적 제약을 극복하고 디버깅 수행 경험 체득.",
                },
                {
                  type: 'bullet',
                  text: "북미 현지에서 고객사 및 협력사 엔지니어들과 커뮤니케이션하며, 이해관계 속에서 문제 해결 사례 경험.",
                },
                {
                  type: 'bullet',
                  text: "필드 클레임 건에 대하여 메모리 덤프, 코드 리뷰 등 기술적 데이터를 근거로 SW의 무결성을 입증하고, 고객사를 논리적으로 설득하는 대응 사례 경험."
                }
              ]
            },
            {
              type: 'toggle',
              title: 'AppMsg 송수신 불가 이슈 디버깅',
              content: [
                { type: 'subTitle', text: '문제 현상' },
                {
                  type: 'bullet',
                  text: "현대오토에버가 전개한 AutoSAR 플랫폼 수평전개 적용 이후, 기능 테스트 과정에서 타 제어기와의 주요 연동 기능이 동작하지 않는 통신 결함 발생.",
                },
                {
                  type: 'bullet',
                  text: "진단 통신은 정상적으로 동작하는 반면, Application 계층의 주기적 CAN 송신 메시지를 포함한 전반적인 AppMsg 송수신 불가능.",
                },
                { type: 'subTitle', text: '원인 분석 및 해결' },
                {
                  type: 'bullet',
                  text: "App 메시지의 주기적 송신을 담당하는 `Com_MainFunctionTx()` 함수가 정상 동작하려면 내부 상태 배열(`Com_GaaTxIpduStatus[]`)이 활성화(1)되어야 하나, 디버깅 결과 문제 버전에서는 해당 값이 모두 비활성화(0)로 초기화.",
                },
                {
                  type: 'bullet',
                  text: "플랫폼 패치 과정에서 툴이 부분 네트워크(Partial Network) 제어와 관련된 BswM Rule을 잘못 생성하였고, 이로 인해 Action List(TrueAL)가 정상적인 BSW 제어 경로(`BswM_PduGroupSwitch()`)대신 비어있는 사용자 구현 함수로 비정상 라우팅. 결과적으로 I-PDU가 START 되지 않아 통신 계층이 활성화되지 않음.",
                },
                {
                  type: 'bullet',
                  text: "`Com_IpduGroupControl()` 함수의 호출 흐름 추적 결과, 작업자의 설정 오류가 아닌 `mobilgene Studio`의 비정상적인 Rule 생성이 근본 원인으로 확인됨.",
                },
                {
                  type: 'bullet',
                  text: "현대오토에버 개발자 포럼에서 이와 유사한 사례를 서치하여 트러블슈팅 가이드 확보.",
                },
                {
                  type: 'bullet',
                  text: "확보한 가이드를 바탕으로, Com 모듈과 BswM 모듈을 함께 하모나이즈 처리. 이를 통해 제어 흐름(Rule 및 Action List)을 재구성하였고, 통신 제어 Action List가 정상적으로 I-PDU 상태 제어 인터페이스를 호출하도록 복구.",
                },
                { type: 'subTitle', text: '결과' },
                {
                  type: 'bullet',
                  text: "AUTOSAR 아키텍처 환경에서 개발자의 수동 설정(Configuration) 오류뿐만 아니라, 도구 자체의 자동 생성 메커니즘 버그로 인한 치명적인 결함 발생 가능성을 실무에서 체득.",
                },
                {
                  type: 'bullet',
                  text: "블랙박스처럼 다뤄지기 쉬운 BSW 계층 내부를 코드 레벨에서 직접 역추적하며, AUTOSAR 플랫폼 아키텍처에서의 논리적인 원인 규명과 디버깅 능력 체득."
                }
              ]
            },
            {
              type: 'toggle',
              title: 'OTA SWAP 후 비휘발성 데이터 삭제 이슈 디버깅',
              content: [
                { type: 'subTitle', text: '문제 현상' },
                {
                  type: 'bullet',
                  text: "제어기 OTA 업데이트 완료 후 시스템 재부팅 중 특정 기능을 수행하는 경우, 간헐적인 비휘발성 데이터(NVM) 유실 발생.",
                },
                { type: 'subTitle', text: '원인 분석 및 해결' },
                {
                  type: 'bullet',
                  text: "OTA 뱅크 스왑(Bank Swap)에 따른 플래시 메모리 접근과, 특정 기능 동작에 따른 플래시 메모리 접근이 동시에 발생함.",
                },
                {
                  type: 'bullet',
                  text: "플래시 관리 로직의 다중 비동기 제어 요청에 대한 보호가 미흡하여, 명령 선점으로 기존 쓰기 작업 중단 현상이 확인됨.",
                },
                {
                  type: 'bullet',
                  text: "플래시 메모리의 지우기 및 쓰기와 같이 처리 시간이 소요되는 비동기 작업 요청 시, 명령을 직접 변수에 덮어쓰지 않고 큐에 적재(`Enqueue`)하도록 변경. 주기적인 스케줄러는 큐에서 명령을 꺼내어(`Dequeue`) 실행함으로써 작업 간의 선점 충돌을 방지하고 순차 처리하도록 수정.",
                },
                { type: 'subTitle', text: '결과' },
                {
                  type: 'bullet',
                  text: "동시다발적인 메모리 접근 요청이 발생하는 가혹 조건에서도 플래시 작업의 순차적 처리가 보장되어 시스템 안정성 개선."
                }
              ]
            }
          ]
        }
      ],
      stack: ["AutoSAR", "C", "Mobilgene Studio", "Trace32"]
    },
    {
      id: 2,
      title: "제어기(ECU) SW CI/CD 환경 구축",
      period: "2026/03 ~ 2026/04",
      role: "DevOps",
      details: [
        {
          label: "Overview",
          content: [
            "소개 : 수동으로 진행되던 제어기(ECU) 소프트웨어 빌드, OTA 이미지 변환, 정적 검증 과정을 자동화하여 팀의 개발 생산성과 안정성 향상",
            "기간 : 2026/03 ~ 2026/04",
            "근무처 : 엠씨넥스",
            "담당 역할 : DevOps",
            "기술 : `GitLab CI/CD`, `GitLab Runner (Windows Shell)`, `PowerShell`, `Linux`, `SMTP (사내 메일 서버)`"
          ]
        },
        {
          label: "Implementation & Achievements",
          content: [
            { type: 'header', text: '빌드 파이프라인 자동화', icon: '🤖' },
            {
              type: 'bullet',
              text: "commit이 새로 push되면 자동으로 CI/CD가 트리거되어 빌드 및 배포 파이프라인 수행.",
            },
            {
              type: 'bullet',
              text: "`Prepare` -> `Bank A / B Build` -> `S19 Generate` -> `static analysis` -> `Package` -> `cleanup` 단계로 이어지는 펌웨어 CI/CD 파이프라인 구현 (`.gitlab-ci.yml`)",
            },
            { type: 'header', text: '동적 리포트 및 배포', icon: '📄' },
            {
              type: 'bullet',
              text: "파이프라인 실행 일시, 커밋 정보, 수행된 Job 목록, 소요 시간 등을 포함한 빌드 리포트(`CI_CD_Build_Report.txt`)를 생성하는 `PowerShell` 스크립트 작성. 펌웨어 바이너리, 정적 검증 리포트와 함께 배포.",
              children: [
                {
                  type: 'code',
                  language: 'text',
                  code: `=== CI/CD Build Report ===
Pipeline ID   : 54
Branch        : Feature_CICD
Commit Hash   : 272407ee2867bcddbe013673a576a99e65b1ece0
Commit Message: ci: Update STATICFILE and spec to include new source files and configuration 
Committer     : hgjeong <hgjeong@mcnex.com>
Model Args    : sx3i, mp, 5
Executed Jobs : prepare_env, build_bank_A, build_bank_B, generate_s19_files, run_static_analysis, package_artifacts, cleanup
Start Time    : 2026-04-14 08:35:52
End Time      : 2026-04-14 08:46:26
Duration      : 00:10:34
==========================`
                }
              ]
            },
            { type: 'header', text: '실시간 알림 시스템 연동', icon: '📧' },
            {
              type: 'bullet',
              text: "파이프라인 수행 완료 시, 사내 메일 서버와 연동하여 유관 부서 담당자들에게 성공/실패 여부를 자동으로 이메일 발송.",
            },
            {
              type: 'bullet',
              text: "Git이 설치된 리눅스 서버에 ssh로 접근하여 사내 전산팀으로부터 할당받은 메일 계정 설정하고, 발신 테스트 수행.",
              children: [
                {
                  type: 'code',
                  language: 'PowerShell',
                  code: `#smtp 메일과 관련된 설정 검색
sudo grep -i "smtp" /etc/gitlab/gitlab.rb 

# smtp 설정 파일 편집
sudo nano /etc/gitlab/gitlab.rb 

# 변경 설정 반영
sudo gitlab-ctl reconfigure 

# Gitlab 내부 콘솔 접근
sudo gitlab-rails console 

#메일 발송 테스트
Notify.test_email('user@mcnex.com', 'GitLab 이메일 테스트', 'GitLab 서버에서 발송된 테스트 메일입니다!').deliver_now`
                }
              ]
            },
            { type: 'header', text: '빌드 호스트 스토리지 볼륨 관리', icon: '💾' },
            {
              type: 'bullet',
              text: "파이프라인의 `cleanup` 단계에 `PowerShell` 스크립트를 활용해 가장 최근 5개의 워크 스페이스는 디버깅 목적으로 남겨두고, 오래된 폴더만 자동으로 삭제하여 빌드 서버의 디스크 볼륨 관리 최적화.",
            },
            { type: 'header', text: '코딩 룰 정적 검증 자동화', icon: '✅' },
            {
              type: 'bullet',
              text: "[빌드 캡처 -> 서버 업로드 -> 검증 결과 확인 -> 리포트 다운로드]로 이어지는 과정이 자동화됨.",
            },
            {
              type: 'bullet',
              text: "파이프라인의 빌드가 성공하면 정적 검증 서버로 업로드하고 open API를 이용하여 검증 단계 확인 및 검증 결과 리포트를 다운로드하는 `PowerShell` 스크립트 작성.",
            },
            {
              type: 'bullet',
              text: "정적 검증 리포트를 배포 산출물에 포함시켜 검증 결과를 보다 쉽게 확인할 수 있도록 워크 플로우 개선.",
            }
          ]
        },
        {
          label: "TroubleShooting",
          content: [
            {
              type: 'toggle',
              title: '파이프라인 병렬 수행에 따른 배포 산출물 혼입 이슈',
              content: [
                { type: 'subTitle', text: '문제 현상' },
                {
                  type: 'bullet',
                  text: "다수의 개발자가 동시에 커밋을 푸시하여 파이프라인이 병렬로 실행되는 경우, 다른 파이프라인의 산출물이 혼입되는 산출물 간섭 현상 발생.",
                },
                { type: 'subTitle', text: '원인 분석 및 해결' },
                {
                  type: 'bullet',
                  text: "빌드를 수행하는 gitlab-runner가 하나의 작업 폴더에서 모든 파이프라인을 수행하여, 파이프라인 수행 중 임시 생성된 artifacts 들이 정리되지 않고 혼입됨.",
                },
                {
                  type: 'bullet',
                  text: "gitlab runner의 `config.toml`에서 `custom_build_dir` 기능을 활성화하고, `$CI_PIPELINE_ID`를 활용해 파이프라인이 실행될 때마다 고유한 독립 워크스페이스를 생성하도록 개선.",
                },
                { type: 'subTitle', text: '결과' },
                {
                  type: 'bullet',
                  text: "다수의 개발자가 동시에 커밋을 푸시하여 파이프라인이 병렬로 진행 되더라도, 배포 산출물이 혼입되지 않고 무결성을 유지함."
                },
              ]
            },
            {
              type: 'toggle',
              title: '동적 빌드 경로(GitLab Runner) 환경에서의 Trace32 디버깅 소스코드 맵핑',
              content: [
                { type: 'subTitle', text: '문제 현상' },
                {
                  type: 'bullet',
                  text: "CI/CD 환경에서 자동 빌드된 바이너리(`.elf`)를 개발자 로컬 PC의 Trace32로 디버깅 시도하는 경우 C코드가 맵핑되지 않고, 어셈블리어만 출력되어 디버깅 수행 어려움."
                },
                { type: 'subTitle', text: '원인 분석 및 해결' },
                {
                  type: 'bullet',
                  text: "`*.elf` 은 DWARF와 같은 디버그 데이터 표준 포맷으로 소스 파일의 경로, 메모리 주소와 코드 라인 맵핑과 같은 정보를 저장하고 있음."
                },
                {
                  type: 'bullet',
                  text: "빌드 서버와 로컬 PC의 환경차로 소스 코드 절대 경로 불일치."
                },
                {
                  type: 'bullet',
                  text: "동적으로 변하는 빌드 서버의 소스코드 경로를 고려하여 Trace32 로드 옵션 최적화 : `*.cmm` 스크립트에서 `.elf` 파일을 로드할 때 `Data.LOAD.Elf` 명령어와 `/STRIPPART 5` 옵션을 적용한 스크립트 추가. 빌드 서버의 상위 경로 5단계(`C:\\GitLab-Runner\\builds\\ECU_Project\\39\\`)를 로드 시점에 동적으로 잘라내고 프로젝트 루트 디렉토리 경로만 남기도록 처리함."
                },
                {
                  type: 'bullet',
                  text: "`sYmbol.SourcePATH.SetBaseDir` 명령어를 통해 로컬 PC의 워크 스페이스를 베이스 디렉토리로 지정하여 소스코드 맵핑."
                },
                { type: 'subTitle', text: '결과' },
                {
                  type: 'bullet',
                  text: "파이프라인 ID에 따라 빌드 환경이 동적으로 변화하더라도 CI/CD를 통해 배포 받은 디버그 바이너리를 로컬 PC에서 Trace32로 로드하여 디버깅 수행 가능하도록 가이드 제시함."
                }
              ]
            },
            {
              type: 'toggle',
              title: '파이프라인 FIFO 스케줄링 개선',
              content: [
                { type: 'subTitle', text: '문제 현상' },
                {
                  type: 'bullet',
                  text: "여러 개발자가 동시에 코드를 푸시하는 경우 나중에 생성된 파이프라인은 PENDING 되어 선행 파이프라인의 완료를 대기할 것으로 기대.",
                },
                {
                  type: 'bullet',
                  text: "선행 파이프라인의 Job stage가 다음 단계로 전환될 때 후행 파이프라인이 Runner 리소스를  선점하여 빌드 순서가 섞이고 작업이 지연됨.",
                },
                { type: 'subTitle', text: '원인 분석 및 해결' },
                {
                  type: 'bullet',
                  text: "gitlab의 리소스 할당 기본 정책이 `unordered` 로 되어 있어 PENDING 중인 파이프라인의 Job이 working queue로 삽입됨. 그 결과 선행 파이프라인의 작업을 선점하는 문제 발생.",
                },
                {
                  type: 'bullet',
                  text: "파이프라인 단위의 상호 배제를 위해 `.gitlab-ci.yml`의 모든 Job에 동일한 `resource_group`을 적용하여 동시성 제어 로직 추가.",
                },
                {
                  type: 'bullet',
                  text: "Git이 설치 되어 있는 리눅스 서버에 SSH로 접근하여 GitLab Rails Console을 통해 데이터베이스의 `process_mode`를 `unordered`에서 `oldest_first`로 변경함.",
                },
                { type: 'subTitle', text: '결과' },
                {
                  type: 'bullet',
                  text: "FIFO 기반의 순차적 스케줄링이 보장됨. 파이프라인 간의 충돌 및 대기 시간 불확실성이 해소되어 CI/CD 환경의 안정성과 신뢰도 향상됨.",
                }
              ]
            }
          ]
        }
      ],
      stack: ["GitLab CI/CD", "PowerShell", "Linux", "DevOps"]
    },
    {
      id: 3,
      title: "AutoSAR NM 모듈 개발",
      period: "2025/10 ~ 2026/02",
      role: "Software Developer",
      details: [
        {
          label: "Overview",
          content: [
            "소개 : AutoSAR 표준 SWS 기반의 Network Management 모듈 자체 개발 및 NM 알고리즘/구조 기술 내재화 사례",
            "기간 : 2025/10 ~ 2026/02",
            "근무처 : 엠씨넥스",
            "담당 역할 : Software Developer",
            "기술 : `C`, `AUTOSAR Classic Platform 4.0.3`, `ALM`"
          ]
        },
        {
          label: "Implementation & Achievements",
          content: [
            { type: 'header', text: '표준 사양 기반 설계 및 추적성 확보', icon: '📝' },
            {
              type: 'bullet',
              text: "AutoSAR 표준 SWS(Software Specification)를 분석하여 Nm 모듈에 대한 소프트웨어 요구사항을 상세히 명세함.",
            },
            {
              type: 'bullet',
              text: "ALM(Application Lifecycle Management) 시스템을 활용하여 '요구사항 - 아키텍처 디자인 - 유닛 디자인' 간의 양방향 추적성 구축, 체계적인 개발 프로세스를 적용함.",
            },
            { type: 'header', text: 'NM 스택 모듈 풀스크래치(Full-scratch) 구현', icon: '💻' },
            {
              type: 'bullet',
              text: "도출된 요구사항을 바탕으로 Nm 모듈 C 코드로 직접 구현.",
            },
            {
              type: 'bullet',
              text: "전체 소스 코드에 Doxygen 포맷의 코드 레벨 문서화 적용, 코드 구현과 API 레퍼런스 문서 간의 동기화 및 산출물이 자동으로 생성되도록하여 코드와 산출물간 불일치 문제 해소 및 업무 효율성 향상",
              children: [
                {
                  type: 'toggle',
                  title: '예시 보기',
                  content: [
                    { type: 'image', src: '/SampleImage.png', alt: 'Doxygen 문서화 예시 1' },
                    { type: 'image', src: '/SampleImage.png', alt: 'Doxygen 문서화 예시 2' }
                  ]
                }
              ]
            },
            {
              type: 'bullet',
              text: "매크로 기반의 파일 단위 버전 관리 체계를 코드 레벨에 추가, 통합 시 발생할 수 있는 버전 불일치 리스크를 해소하여 모듈 안정성 개선.",
              children: [
                {
                  type: 'code',
                  language: 'c',
                  code: `/* File Version */
#define CANNM_INTERNAL_H_VERSION_MAJOR   (1)
#define CANNM_INTERNAL_H_VERSION_MINOR   (0)
#define CANNM_INTERNAL_H_VERSION_PATCH   (0)

/******************************************************************************
 * VERSION CHECK
 ******************************************************************************/
#if (CANNM_INTERNAL_H_VERSION_MAJOR != CANNM_MASTER_VERSION_MAJOR) || \
    (CANNM_INTERNAL_H_VERSION_MINOR != CANNM_MASTER_VERSION_MINOR) || \
    (CANNM_INTERNAL_H_VERSION_PATCH != CANNM_MASTER_VERSION_PATCH)
#error "Version mismatch CanNm_Internal.h, Please check the version numbers."
#endif`
                }
              ]
            },
            { type: 'header', text: '코드 신뢰성 확보', icon: '🛡️' },
            {
              type: 'bullet',
              text: "정적 분석 도구인 슈어소프트의 STATIC을 활용하여 구현된 전체 코드에 대해 정적 검사를 수행함.",
            },
            {
              type: 'bullet',
              text: "MISRA-C 2012 코딩 가이드라인 준수하여 차량용 소프트웨어 수준의 코드 안정성과 신뢰성을 확보함."
            },
          ]
        },
        {
          label: "Review",
          content: [
            {
              type: 'bullet',
              text: "선행 개발을 주도하며 상태 머신(State Machine) 기반의 NM 알고리즘과 AUTOSAR 계층 구조의 동작 원리 심층 분석 및 파악.",
            },
            {
              type: 'bullet',
              text: "V-Model 프로세스를 수행하여 체계적인 소프트웨어 설계 및 개발 경험 체득."
            }
          ]
        }
      ],
      stack: ["AutoSAR", "C", "ALM"]
    },
    {
      id: 4,
      title: "산업용 자동제어 시스템 SW 개발",
      period: "2012/01 ~ 2023/02",
      role: "SW Engineer",
      details: [
        {
          label: "Overview",
          content: [
            "소개 : 시스트로닉스는 주문형 산업용 제어장치, 다양한 인터페이스가 가능한 센서, HMI(Human Machine Interface) 등을 개발, 제조하는 회사입니다. 수십종의 임베디드 시스템을 브링업부터 구현, 검증까지 수행하면서 경험했던 내용을 압축, 설명하여 임베디드 SW 개발자로서의 역량을 소개합니다.",
            "기간 : 2012/01 ~ 2023/02",
            "근무처 : 시스트로닉스",
            "담당 역할 : Software Developer",
            "기술 : `C`, `RS-485 (Modbus RTU Protocol)`"
          ]
        },
        {
          label: "Implementation & Achievements",
          content: [
            { type: 'header', text: '다양한 타겟 하드웨어 브링업 및 고객 맞춤형 제어 시스템 구현', icon: '📟' },
            {
              type: 'bullet',
              text: "`39`종에 달하는 산업용 제어기 메인보드와 소형 디스플레이부터 8인치 고해상도 터치 패널에 이르는 `8`종 이상의 HMI 타겟 보드를 초기 하드웨어 브링업(Bring-up) 및 로우 레벨 보드 드라이버를 직접 설계 및 구현."
            },
            {
              type: 'bullet',
              text: "메인보드의 입출력(I/O) 포트를 활용하여 밸브, 댐퍼, 릴레이 등 장비의 액추에이터를 구동하는 다양한 제어 로직 구현."
            },
            {
              type: 'bullet',
              text: "128x64 해상도의 소형 LCD부터 2.4인치, 5인치, 7인치, 8인치에 이르는 다양한 크기의 디스플레이와 택트 스위치, 정전용량 방식의 터치키, 감압식 터치스크린 등 각 기기별 하드웨어 특성에 다양한 HMI 펌웨어 설계 경험."
            },
            {
              type: 'bullet',
              text: "파일 시스템(FATFS)과 비휘발성 메모리를 활용하여, 장비의 운전 트렌드 데이터 조회 및 실시간/과거 경보(Alarm) 리스트 이력을 효율적으로 저장하고 검색할 수 있는 경량화된 자체 DB 관리 로직 구현."
            },
            {
              type: 'toggle',
              title: 'MCU List',
              content: [
                {
                  type: 'table',
                  minWidth: '700px',
                  headers: ['Part Number', 'Series', 'Vendor', 'Tool'],
                  widths: ['25%', '25%', '25%', '25%'],
                  rows: [
                    ['STM32F429ZIT', 'STM32 F4', 'STMicroelectronics', 'keil μvision 5'],
                    ['STM32F051K8U7', 'STM32 F0', 'STMicroelectronics', 'keil μvision 5'],
                    ['GD32F103VGT6', 'GD32 F103', 'GigaDevice', 'keil μvision 5'],
                    ['GD32E230K8U6', 'GD32 E230', 'GigaDevice', 'keil μvision 5'],
                    ['adStart-D', '-', 'Advanced Digital Chips', 'EISC Studio3'],
                    ['ATmega8', 'AVR8', 'Microchip', 'IAR EW'],
                    ['ATmega16', 'AVR8', 'Microchip', 'IAR EW'],
                    ['ATmega32', 'AVR8', 'Microchip', 'IAR EW'],
                    ['ATmega64', 'AVR8', 'Microchip', 'IAR EW'],
                    ['ATmega128', 'AVR8', 'Microchip', 'IAR EW'],
                    ['ATmega2560', 'AVR8', 'Microchip', 'IAR EW'],
                    ['ATmega169PA', 'AVR8', 'Microchip', 'IAR EW'],
                    ['ATxmega32A4U', 'AVR8-XMEGA', 'Microchip', 'IAR EW'],
                    ['ATxmega32D4', 'AVR8-XMEGA', 'Microchip', 'IAR EW'],
                    ['ATxmega128A1U', 'AVR8-XMEGA', 'Microchip', 'IAR EW']
                  ]
                }
              ]
            },
            {
              type: 'toggle',
              title: 'Peripheral device List',
              content: [
                {
                  type: 'table',
                  minWidth: '700px',
                  headers: ['Part Number', 'Interface', 'Feature'],
                  widths: ['30%', '30%', '30%'],
                  rows: [
                    ['DS1302', 'I²C', 'RTC'],
                    ['RV8803', 'I²C', 'RTC'],
                    ['AK4183', 'I²C / RGB565', 'touch screen controller'],
                    ['TSC2007', 'I²C / RGB565', 'touch screen controller'],
                    ['ILI9341', 'SPI / RGB565', 'TFT LCD controller'],
                    ['ST7735', 'SPI', 'TFT LCD controller'],
                    ['TS20', 'I²C', 'touch sensor'],
                    ['MAX7221', 'SPI', '8 digit LED drivers'],
                    ['TC1321', 'I²C', 'DAC'],
                    ['MCP4728', 'I²C', 'DAC'],
                    ['AD7490', 'I²C', 'DAC'],
                    ['AT24C64D', 'I²C', 'EEPROM'],
                    ['WTS3535', 'analog', 'temperature, humidity sensor'],
                    ['SHT30', 'I²C', 'temperature, humidity sensor'],
                    ['RS9A', 'UART', 'radon sensor'],
                    ['ZE08', 'UART', 'formaldehyde sensor'],
                    ['ExplorIR', 'UART', 'carbon dioxide sensor'],
                    ['CM1107', 'UART', 'carbon dioxide sensor'],
                    ['T6615', 'UART', 'carbon dioxide sensor'],
                    ['LOX-O2', 'UART', 'oxygen sensor'],
                    ['SGP30', 'I²C', 'VOC sensor'],
                    ['AM1008W', 'UART', 'air quality sensor'],
                  ]
                }
              ]
            },
            { type: 'header', text: '자체 임베디드 소프트웨어 라이브러리 개발', icon: '📂' },
            {
              type: 'bullet',
              text: "어플리케이션과 하드웨어 종속 로직이 결합된 레거시 코드를 분리하는 구조적 리팩토링을 주도."
            },
            {
              type: 'bullet',
              text: "하드웨어 종속성이 있는 로직을 디바이스 드라이버로 모듈화하고, 재사용 가능한 어플리케이션 로직을 별도 모듈로 구현."
            },
            {
              type: 'bullet',
              text: "이를 통해 신규 프로젝트 착수 시 불필요한 회귀 테스트 및 재검증 공수를 줄이고, 조직의 생산성과 품질 안정성 개선."
            },
            {
              type: 'toggle',
              title: 'Module List',
              content: [
                {
                  type: 'table',
                  minWidth: '900px',
                  headers: ['Name', 'Description', 'Hardware(MCU) Dependency'],
                  widths: ['20%', '65%', '15%'],
                  rows: [
                    ['AvrUart', '✅ FIFO 방식의 AVR UART 통신 지원\n✅ 채널 별 인스턴스 관리 및 RS-485 통신 지원을 위한 GPIO 제어 지원', 'Yes'],
                    ['AvrUartBaud', '✅ UART Baudrate 동적 변경 지원\n✅ 부분적 HAL 지원으로 AVR8 Series MCU 제품군 지원\n✅ 9,600~115,200bps 자동 계산', 'Yes'],
                    ['AvrModbus', '✅ AvrUart 모듈 기반 Modbus-RTU 프로토콜 지원\n✅ Master / Slave 모두 지원하며 전처리 정의에 따른 선택적 빌드 가능\n✅ `Read Coils(0x01)`, `Read Discrete Inputs(0x02)`, `Read Holding Registers(0x03)`, `Read Input Registers(0x04)`, `Write Single Coil(0x05)`, `Write Single Register(0x06)`, `Write MultipleForce Single Coil(0x05)`, `Preset Single Register(0x06)`, `Preset Multiple(0x10)` 지원\n✅ CRC16 외 UserCallout 연결을 통한 오류 검출 옵션 지원\n✅ `Master` : 동적 슬레이브 관리, 비선형적 슬레이브 폴링, 통신 상태 모니터링 지원, 쓰기 명령 우선 순위 부여\n✅ `Slave` : 메모리 맵 바인딩 지원, 다양한 사양지 Callout 지원 (`CheckOutRange`, `PreUserException`, `UserException`)', 'Yes'],
                    ['SysEeprom', '✅ 하드웨어 추상화 계층 (HAL) 지원\n✅ EEPROM 주소 자동 할당\n✅ 수명 보호 (Overwrite Protection)\n✅ 최초 실행 (초기화) 자동 감지 및 블록 데이터 자동 불러오기\n✅ 비동기 (Non-blocking) 쓰기 처리', 'No'],
                    ['SysQueue', '✅ 경량화된 임베디드 자료구조 라이브러리\n✅ 듀얼 모드 지원 (`QUE_TYPE_FIFO` : 일반 Queue 모드, `QUE_TYPE_LIFO` : Stack 모드)\n✅ `void *`를 사용하여 데이터 타입에 제약 없음\n✅ 동적 오버플로우 정책 설정 지원\n✅ 기타 유틸리티 지원 (`SysQueuePeak`, `SysQueueDrop` …)', 'No'],
                    ['SysSoftCom', '✅ MCU의 하드웨어적 (Peripheral) 지원 없이 GPIO 제어만을 이용한 반이중 시리얼 통신\n✅ 하드웨어 추상화 계층 (HAL) 지원\n✅ 1:N Master-Slave 통신 아키텍쳐, 전처리 선언에 따른 Master / Slave 선택적 빌드 지원\n✅ 콜백 기반의 유연한 예외 처리 (`UserTxFunction`, `UserRxFunction`)\n✅ 동적 Slave 추가, 제거 지원', 'No'],
                    ['DataSampling', '✅ 이동 평균 계산 모듈\n✅ 동적 버퍼 할당\n✅ 다양한 데이터 타입 지원 (`tS8` , `tS16` , `tS32`)\n✅ 동적 샘플링 레벨 변경', 'No'],
                    ['DigitalOutStepCtrl', '✅ 제어 대상 부하의 레벨별 단계 제어를 위한 모듈\n✅ 이중 연결 리스트 기반의 상태 관리\n✅ 다양한 교번(Alternate) 순차 제어 알고리즘 지원 (`ALT_RUN_TIME`, `ALT_LIFO`, `ALT_FIFO`, `ALT_MEMORY_RUN_TIME_LIFO`, `ALT_MEMORY_LIFO`)\n✅ 스텝 간 기동 지연 및 동적 목표 추종 메커니즘\n✅ 경보, 운전 시간 등에 따른 실시간 제어 우선 순위 재정렬', 'No'],
                    ['crc16', '✅ crc16 무결성 검사 모듈\n✅ 테이블 기반의 고속 연산\n✅ 순환 버퍼 처리 지원', 'No']
                  ]
                }
              ]
            }
          ]
        },
        {
          label: "Key Project",
          content: [
            {
              type: 'toggle',
              title: '삼성 디스플레이 장비 제어장치',
              content: [
                {
                  type: 'bullet',
                  text: "삼성 디스플레이 아산 캠퍼스 검사 장비 팬 제어 장치, 팬을 제어하는 edge controller와 이를 제어하는 HMI 시스템으로 구성."
                },
                {
                  type: 'bullet',
                  text: "edge device는 PPR(Pulse Per Revolution) 방식으로 팬 회전수를 구하고, 현재 회전수와 목표 회전수에 따라 정해진 알고리즘으로 팬 리니어 제어. (4~20mA)"
                },
                {
                  type: 'bullet',
                  text: "HMI는 하위에 RS-485 통신으로 그룹당 최대 32대의 edge device를 모니터링 및 통제하며, 상위 제어 어플리케이션과 edge device의 통신 라우팅."
                },
                { type: 'image', src: '/SampleImage.png', alt: '삼성 디스플레이 장비 제어장치' }
              ]
            },
            {
              type: 'toggle',
              title: '농촌진흥청 스마트팜 시스템',
              content: [
                {
                  type: 'bullet',
                  text: "농촌진흥청 다양한 센서(온도, 습도, CO2, 조도, 일사량, 대지 함수량 …)로부터 획득한 데이터를 이용하여 농작물 재배 시설을 자동화한 스마트팜 프로젝트이다. 액츄에이터를 제어하는 제어 본체와 HMI로 구성."
                },
                {
                  type: 'bullet',
                  text: "제어 본체는 센서로부터 획득한 데이터와 사용자가 설정한 1~5단계의 스케줄 설정 값과 제어 알고리즘에 따라 시설의 창문, 포그 분사기, 냉난방기 등의 액츄에이터를 제어한다."
                },
                {
                  type: 'bullet',
                  text: "HMI는 본체 제어부와 RS-485 통신으로 인터페이스하고, 상위 관제 시스템과 통신을 중계한다."
                },
                { type: 'image', src: '/SampleImage.png', alt: '스마트팜 시스템 HMI 화면' }
              ]
            }
          ]
        },
        {
          label: "TroubleShooting",
          content: [
            {
              type: 'toggle',
              title: 'EEPROM 접근 방식 및 내구성 개선',
              content: [
                { type: 'subTitle', text: '문제 현상' },
                {
                  type: 'bullet',
                  text: "제어 장치의 설정 파라미터가 랜덤 값으로 변경되는 이슈 보고됨."
                },
                { type: 'subTitle', text: '원인 분석 및 해결' },
                {
                  type: 'bullet',
                  text: "통신 상위에 있는 타 업체 장비에서 1초 간격 설정 파라미터 write 명령 송신."
                },
                {
                  type: 'bullet',
                  text: "제어 장치가 write 명령에 따라 1초 간격으로 EEPROM write를 수행하고, 결국 설계 수명보다 빠른 기간 내에 memory write cycle 초과하여 파괴됨."
                },
                {
                  type: 'bullet',
                  text: "EEPROM 관리 모듈을 개발하여, write 대상 주소를 읽은 후 변경 사항이 있을 경우에만 write하도록 수정."
                },
                {
                  type: 'bullet',
                  text: "Application에서 write_eeprom()과 같이 디바이스 드라이버 직접 호출을 제한하고, 모듈이 자동으로 블록 단위 주소를 할당하게 하여 메모리 침범 문제 방지."
                },
                { type: 'subTitle', text: '결과' },
                {
                  type: 'bullet',
                  text: "비정상적인 외부 통신 환경에서도 시스템을 보호하고, 불필요한 쓰기 사이클(Write Cycle)을 최소화하여 EEPROM의 물리적 수명 연장"
                },
                {
                  type: 'bullet',
                  text: "모듈 기반의 접근 통제 및 자동 할당을 통해 메모리 침범에 의한 파라미터 변조 리스크 개선."
                }
              ]
            }
          ]
        }
      ],
      stack: ["C", "C++", "STM32", "Modbus", "RS-485"]
    }
  ]
};
