# Chime Chat 모노레포

AWS Chime SDK를 사용한 실시간 채팅 위젯을 포함한 pnpm workspace 모노레포입니다.

## 구조

```
monorepo/
├── package.json              # 루트 설정 (workspace 설정)
├── pnpm-workspace.yaml       # pnpm 전용 workspace 파일
├── tsconfig.base.json        # 공통 TypeScript 설정
├── packages/
│   └── chat-widget/          # 라이브러리 패키지
│       ├── src/
│       │   ├── components/   # React 컴포넌트
│       │   ├── hooks/        # 커스텀 훅
│       │   └── types/        # TypeScript 타입 정의
│       └── package.json
└── apps/
    └── demo-app/             # Next.js 데모 애플리케이션
        ├── pages/
        ├── styles/
        └── package.json
```

## 시작하기

### 1. 의존성 설치

```bash
pnpm install
```

### 2. 개발 서버 실행

```bash
# 모든 패키지 동시 실행
pnpm dev

# 또는 개별 실행
pnpm --filter demo-app dev
pnpm --filter @chat-widget/core dev
```

### 3. 빌드

```bash
# 모든 패키지 빌드
pnpm build

# 또는 개별 빌드
pnpm --filter @chat-widget/core build
pnpm --filter demo-app build
```

## 패키지

### @chat-widget/core

채팅 위젯 라이브러리 패키지입니다.

**주요 기능:**
- React 기반 채팅 위젯 컴포넌트
- AWS Chime SDK 연동 (예정)
- TypeScript 지원
- 커스텀 훅 제공

**사용법:**
```tsx
import { ChatWidget } from '@chat-widget/core'

const config = {
  region: 'us-east-1',
  credentials: {
    accessKeyId: 'your-key',
    secretAccessKey: 'your-secret'
  }
}

<ChatWidget config={config} />
```

### demo-app

Next.js 기반 데모 애플리케이션입니다.

**실행:**
```bash
cd apps/demo-app
pnpm dev
```

## 환경 설정

1. `apps/demo-app/env.example`을 `.env.local`로 복사
2. AWS 자격 증명 정보 입력

## 스크립트

- `pnpm dev`: 모든 패키지의 개발 서버 실행
- `pnpm build`: 모든 패키지 빌드
- `pnpm lint`: 모든 패키지 린트 검사
- `pnpm type-check`: 모든 패키지 타입 검사
- `pnpm clean`: 모든 빌드 결과물 정리

## 기술 스택

- **패키지 관리**: pnpm workspace
- **빌드 도구**: tsup (라이브러리), Next.js (앱)
- **언어**: TypeScript
- **프레임워크**: React, Next.js
- **스타일링**: CSS-in-JS (인라인 스타일)
- **클라우드**: AWS Chime SDK (예정)
