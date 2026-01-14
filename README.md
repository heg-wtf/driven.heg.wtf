# Driven 🚗

> **Embrace the Journey, Savor the Drive**
> 드라이브 코스 추천 앱 Driven의 공식 랜딩 페이지

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fdriven.heg.wtf)](https://driven.heg.wtf)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-success)](https://driven.heg.wtf)

## 🌐 웹사이트

**[https://driven.heg.wtf](https://driven.heg.wtf)**

## 📱 앱 다운로드

- **[App Store](https://apps.apple.com/app/id6744569013)** - iOS 앱 다운로드
- **Google Play** - 곧 출시 예정

## ✨ 주요 기능

- **드라이브 코스 탐색** - 검증된 드라이브 코스를 탐색하고 나만의 코스를 공유
- **장소 추천** - 드라이브 중 들르기 좋은 카페, 뷰포인트, 휴게소 등 숨겨진 명소
- **실시간 날씨 정보** - 드라이브 계획에 필요한 시간대별 날씨와 강수 확률
- **코스 리뷰** - 다른 드라이버들의 생생한 후기를 확인하고 경험 공유
- **커뮤니티** - 드라이브를 사랑하는 사람들과 소통
- **푸시 알림** - 새로운 코스와 장소 업데이트, 날씨 변화 알림

## 🛠 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Google Apps Script (뉴스레터 구독)
- **Hosting**: GitHub Pages
- **Domain**: driven.heg.wtf (CNAME)
- **Fonts**: Noto Sans KR (Google Fonts)

## 📂 프로젝트 구조

```
driven.heg.wtf/
├── index.html              # 메인 랜딩 페이지
├── css/
│   └── style.css          # 스타일시트
├── js/
│   └── newsletter.js      # 뉴스레터 구독 로직
├── assets/
│   └── images/
│       ├── icon.png                    # 로고
│       ├── favicon-16x16.png           # Favicon
│       ├── favicon-32x32.png           # Favicon
│       ├── apple-touch-icon.png        # iOS 아이콘
│       ├── android-chrome-192x192.png  # Android 아이콘
│       ├── android-chrome-512x512.png  # Android 아이콘
│       ├── screenshot_1.png            # 앱 스크린샷
│       ├── screenshot_2.png
│       ├── screenshot_3.png
│       ├── screenshot_4.png
│       └── screenshot_5.png
├── CNAME                   # 커스텀 도메인 설정
└── README.md              # 프로젝트 문서
```

## 📧 뉴스레터 구독 기능

Google Apps Script를 사용하여 구독자 이메일을 구글 시트에 자동 저장합니다.

**기능:**
- 실시간 이메일 수집 및 구글 시트 저장
- 타임스탬프 자동 기록
- 이메일 유효성 검사
- 중복 구독 방지
- 성공/오류 메시지 표시

**설정 방법:**
1. Google Sheets 생성
2. Apps Script 코드 배포 (웹 앱)
3. `js/newsletter.js`의 `APPS_SCRIPT_URL` 수정

## 🚀 로컬 개발

```bash
# 간단한 HTTP 서버로 실행
python3 -m http.server 8000

# 브라우저에서 접속
open http://localhost:8000
```

## 📦 배포

GitHub Pages를 통해 자동으로 배포됩니다.

1. `main` 브랜치에 push
2. GitHub Pages가 자동으로 빌드 및 배포
3. https://driven.heg.wtf 에서 확인

## 📝 커밋 규칙

Gitmoji 방식을 따릅니다:

- ✨ `:sparkles:` - 새로운 기능 추가
- 🐛 `:bug:` - 버그 수정
- 📝 `:memo:` - 문서 작성 또는 수정
- 💄 `:lipstick:` - UI/스타일 파일 추가/수정
- ♻️ `:recycle:` - 코드 리팩토링

## 📞 문의

- **이메일**: [me@heg.wtf](mailto:me@heg.wtf)
- **웹사이트**: [https://heg.wtf](https://heg.wtf)

## 📄 라이센스

© 2025 HEG Inc. All rights reserved.
