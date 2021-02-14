# 맛집지도 프로젝트

```
// package 설치
npm install

// create-react-app 시작
npm start
```

### 1) Auth(안증: 회원가입 / 로그인)
- [ ] 구글 FireBase Auth를 통한 인증 제작
- [ ] 이메일 & 비밀번호로 인증(기본값) / 구글 인증

### 2) 맛집 리스트
- [ ] 구글 FireBase FireStore를 통한 게시판 제작
- [ ] 인스타그램처럼 나열식, 첫 랜더링 시 조회(5개)
- [ ] 내가 쓴 글만 수정,삭제 가능
- [ ] 사진 최대 4개 등록(Swiper.js), 1개일 땐 Swiper 활성화X
- [ ] 후기작성
- [ ] 해시태그 추가 (ex. #매워)

### 3) 지도
- [ ] 카카오 지도 사용
- [ ] 지도안에 맛집 picker 심어주기
- [ ] 카카오 지도검색: 맛집 위경도 저장, 지역 맛집 검색

### 4) React 설계
- [ ] styled-components 사용
- [ ] react-router-dom로 라우팅
- [ ] index, container, representer 디자인패턴 사용
- [ ] 리덕스를 통한 로그인 유저정보 전역관리

### 5) 폴더 구조
- Apis : firebase, 카카오지도 APIs 관리
- Modules : 리덕스를 통한 전역상태 관리
- Routes : 라우팅되는 컴포넌트 관리
- Components : 그밖에 컴포넌트 관리
- Utils : 자주쓰는 함수모음