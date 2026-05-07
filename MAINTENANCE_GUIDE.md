# 📘 포트폴리오 유지보수 가이드 (Maintenance Guide)

이 포트폴리오는 디자인 코드(React)와 데이터(Content)가 분리되어 있습니다. 모든 내용은 **`src/data/portfolioData.js`** 파일 하나만 수정하여 관리할 수 있습니다.

---

## 1. 파일 위치
- **수정할 파일**: `src/data/portfolioData.js`

---

## 2. 주요 항목별 수정 방법

### A. 프로필 및 헤더 (Header)
가장 상단에 노출되는 이름과 자기소개를 수정합니다.
```javascript
header: {
  name: "이름",
  role: "직무 (예: Embedded Engineer)",
  description: "자기소개 문구",
  github: "GitHub 주소",
  email: "이메일 주소"
}
```

### B. 기술 스택 (Skills)
스킬 섹션의 탭 메뉴 내용을 수정합니다. 배열에 단어를 추가/삭제하면 웹에 즉시 반영됩니다.
```javascript
skills: {
  board: ["STM32", "NXP"], // 'Board' 탭 내용
  language: ["C", "C++"],   // 'Language' 탭 내용
  tools: ["Git", "Docker"]  // 'Tools' 탭 내용
}
```

### C. 핵심 프로젝트 (Key Projects) ⭐️
노션과 같이 정교한 레이아웃을 구성하는 방법입니다.

#### ① 기본 구조
`projects` 배열 안에 새로운 객체를 추가합니다.
```javascript
{
  id: 1,
  title: "프로젝트 제목",
  period: "2024/01 ~ 2024/12",
  role: "본인의 역할",
  details: [ /* 상세 내용 */ ],
  stack: ["사용한", "기술들"]
}
```

#### ② 상세 내용(details) 작성법 (노션 스타일)
`details` 배열은 좌측의 **섹션명(label)**과 우측의 **본문(content)**으로 구성됩니다.

- **글머리 기호(•) 본문**: 그냥 문자열을 입력합니다.
- **하위 섹션 강조(Callout)**: `{ type: 'header', text: '제목', icon: '이모지' }` 객체를 입력합니다.
- **키워드 강조(적색 배경)**: 강조하고 싶은 단어를 **백틱(`` ` ``)**으로 감쌉니다.

**예시 코드:**
```javascript
details: [
  {
    label: "Overview", // 좌측 섹션명
    content: [
      "이 프로젝트는 `핵심기술`을 활용한 예제입니다.", // 키워드 강조
      "두 번째 줄도 자동으로 글머리 기호가 붙습니다."
    ]
  },
  {
    label: "Implementation",
    content: [
      { type: 'header', text: '세부 단계 1', icon: '⚙️' }, // 하위 섹션 강조
      "세부 단계 1에 대한 설명입니다.",
      { type: 'header', text: '세부 단계 2', icon: '🚀' },
      "세부 단계 2에 대한 설명입니다."
    ]
  }
]
```

---

## 3. 변경 사항 반영하기 (배포)

수정이 완료되었다면 터미널에 다음 명령어를 순서대로 입력하여 GitHub에 반영하세요. 
(자동 배포 스크립트가 작동하여 약 1~2분 뒤 웹사이트에 반영됩니다.)

```bash
git add .
git commit -m "Update portfolio content"
git push
```

---

## 4. 팁 (Tips)
- **아이콘**: 이모지(Win + .)를 활용하면 노션과 가장 유사한 느낌을 낼 수 있습니다.
- **다크 모드**: 현재는 화이트 테마가 기본이지만, 나중에 다크 모드를 원하시면 저에게 말씀해 주세요! 기초 공사는 이미 되어 있습니다.
