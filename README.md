# TodoList 구현하기 (세션 1주차 - 사전과제 리팩토링)

**목차**

- [1.프로젝트 소개](#프로젝트-소개)
- [2.팀원 소개](#팀원-소개)
- [3.구현기능](#구현-기능)
- [4.프로젝트 폴더 구조](#프로젝트-폴더-구조)
- [5.Best practice 선정 사례](#Best-practice-선정-사례)

## 프로젝트 소개

개발 기간: 22.12.20 ~ 22.12.23

### 배포 링크

[http://wanted-pre-onboarding-week-1.s3-website.ap-northeast-2.amazonaws.com/](http://wanted-pre-onboarding-week-1.s3-website.ap-northeast-2.amazonaws.com/)

- Github Action + AWS S3 ⇒ CI/CD 파이프 라인 구축

### 구동 방법

```tsx
npm install
npm start
```

### 사용한 라이브러리


<div align="center">
  <img src="https://img.shields.io/badge/ReactRouter-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" />
	<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
  <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" />
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white" />
  <img src="https://img.shields.io/badge/React-Toastify-0082FC?style=for-the-badge&logoColor=white" />
</div>


## 팀원 소개

---

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/jdy8739"><img src="https://avatars.githubusercontent.com/u/83811826?v=4" width="100px;" alt=""/><br /><sub><b>FE 팀장: 정도영 </b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/kimdowan123"><img src="https://avatars.githubusercontent.com/u/97826223?v=4" width="100px;" alt=""/><br /><sub><b>FE 팀원: 김도완</b></sub></a><br /></td>
			<td align="center"><a href="https://github.com/ryan-kim-dev"><img src="https://avatars.githubusercontent.com/u/78180055?v=4" width="100px;" alt=""/><br /><sub><b>FE 팀원: 김현호</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/smash009"><img src="https://avatars.githubusercontent.com/u/46629029?v=4" width="100px;" alt=""/><br /><sub><b>FE 팀원: 남장현</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/SkyRain1225"><img src="https://avatars.githubusercontent.com/u/97310823?v=4" width="100px;" alt=""/><br /><sub><b>FE 팀원: 오경준</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/ddaisylee"><img src="https://avatars.githubusercontent.com/u/88873956?v=4" width="100px;" alt=""/><br /><sub><b>FE 팀원: 이은지</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/jazzyfact"><img src="https://avatars.githubusercontent.com/u/51365114?v=4" width="100px;" alt=""/><br /><sub><b>FE 팀원: 임혜미</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/JaeWonyH"><img src="https://avatars.githubusercontent.com/u/89454575?v=4" width="100px;" alt=""/><br /><sub><b>FE 팀원: 황재원</b></sub></a><br /></td>
     <tr/>
  </tbody>
</table>

## 구현 기능

---

## 📝 구현 기능 목록

<br>

- ### **👋 1. 로그인/회원가입 페이지**

  > `/` 경로에 로그인 / 회원가입 기능을 개발.
  >
  > - 페이지 안에 이메일 입력창, 비밀번호 입력창, 제출 버튼이 포함된 형태로 구성해주세요.
  > - 로그인, 회원가입을 별도의 경로로 분리해도 무방

  <br>

- [x] `/` 경로에는 로그인 폼만 생성.(한 페이제 다른 폼 존재 방지를 위해)

  - [x] 이메일, 비밀번호 입력칸 생성
  - [x] 로그인 폼을 통해 회원 정보가 없을 시, `/signUp/`로 갈 수 있는 `button`생성
  - [x] 비밀번호 입력칸에 현재 입력한 비밀번호 볼수 있는 `button` 생성

<br>

- [x] `/signup/` 경로에는 회원가입 폼 생성.

  - [x] 이메일과 비밀번호을 입력받음
  - [x] 비밀번호 확인(재입력) 생성 후 Validate 진행
  - [x] Validate 성공 시, 버튼 활성화

<br>
    
  - [x] 유효성 검사기능 구현(Assignment 1)

    - [x] 1. 이메일 조건 : `@`포함
    - [x] 2. 비밀번호 조건 : 8자 이상
    - [x] 3. 입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화

<br>

- [x] 로그인 성공 후(Assignment 2)

  - [x] 올바른 응답을 받았을 때(Response Body에 JWT를 포함), `/todo`경로로 이동.
  - [x] 응답받은 JWT는 `로컬스토리지`에 저장.

<br>

- [x] 로그인 여부에 따른 리다이렉트 (Assignment 3)

  - [x] 로컬 스토리지에 토큰⭕ + `/`페이지에 접속한다면 `/todo`로 리다이렉트
  - [x] 로컬 스토리지에 토큰❌ + `/todo`페이지에 접속한다면 `/`로 리다이렉트

<br>

- ### **👋 2. To-do List 페이지**

  > `/todo` 경로에 투두리스트 구현
  >
  > - 개별 아이템별 내용과 완료표시 여부 표시
  > - 개별 아이템별 수정, 취소, 삭제버튼 존재

  <br>

- [x] `/todo`경로 접속 시, (Assignment 4)

  - [x] 투두 리스트의 목록 표시
  - [x] 리스트 페이지 1 -> 투두 리스트 내용 및 완료여부 표시
  - [x] 리스트 페이지 2 -> 입력창과 추가버튼, 추가버튼 누르면 입력창의 내용이 새로운 투두리스트로 추가

<br>

- [x] 투두리스트 수정,삭제,완료체크 기능 (Assignment 5)

  - [x] 투두 리스트의 개별 아이템 우측에 수정버튼 -> 수정모드 활성화 + 내용수정 가능하도록 !
  - [x] 수정모드 -> 개별 아이템의 우측 제출버튼/ 취소버튼 /완료 체크버튼 표시 + 해당버튼을 통해 수정내용 제출 및 취소 가능하도록 !
  - [x] 투두 리스트의 개별 아이템 우측에 삭제 버튼이 존재 -> 투두리스트 삭제!

<br>

## 프로젝트 폴더 구조

---

```tsx
src
   ├─ App.jsx
   ├─ apis
   │  ├─ auth.js
   │  └─ todos.js
   ├─ components
   │  ├─ Button
   │  │  ├─ index.jsx
   │  │  └─ styles.js
   │  ├─ Input
   │  │  ├─ index.jsx
   │  │  └─ styles.js
   │  ├─ TodoPage
   │  │  └─ TodoElement.jsx
   │  └─ index.js
   ├─ constants
   │  └─ index.js
   ├─ hooks
   │  └─ useValidationCheck.js
   ├─ index.js
   ├─ pages
   │  ├─ Auth
   │  │  ├─ index.jsx
   │  │  └─ styles.js
   │  ├─ Todo
   │  │  ├─ Todo.jsx
   │  │  └─ styled.js
   │  └─ index.js
   ├─ styles
   │  ├─ GlobalStyle.js
   │  ├─ globalStyles.js
   │  ├─ styleConstants.js
   │  ├─ styles.js
   │  └─ theme.js
   └─ utils
      ├─ index.js
      ├─ instance.js
      ├─ toast.js
      ├─ token.js
      ├─ utils.js
      └─ validationCheck.js
```

### utils,api 폴더

1. api instance 화
2. 토큰, 유효성체크 관련 파일들을 분리

### components 폴더

전역에서 재사용 가능한 Button, Input 요소들과, 이들을 재사용한 모듈단위 컴포넌트를 위치시켜 페이지 레이아웃을 구성하기 위해 사용하기 쉽고 역할을 명확히 설명하는 이름으로 컴포넌트를 생성

### pages 폴더

라우팅 경로별로 폴더를 분리한 페이지 레이아웃의 컴포넌트가 위치

### styles 폴더

1. 모든 컴포넌트에 동일하게 적용되는 스타일을 GlobalStyle로 설정
2. 자주 사용되는 색상, 폰트 크기 등을 객체로 선언해 변수로 사용할 수록 있도록 관리

## Best practice 선정 사례

---

### 1. 뷰와 로직의 분리 (api 요청 함수) - 이은지님

```js
export const auth = async ({ email, password, isSignInPage, onSuccess }) => {
  const body = { email, password };
  const optionalObj = isSignInPage
    ? { url: SIGNIN_URL, msg: '로그인 성공!' }
    : { url: SIGNUP_URL, msg: '회원가입 성공!' };
  try {
    await axiosInstance
      .post(optionalObj.url, body)
      .then(({ data: { access_token: accessToken } }) =>
        setAccessToken(accessToken),
      );
    if (onSuccess) {
      showSuccessToast(optionalObj.msg);
      return onSuccess();
    }
  } catch (error) {
    const {
      response: {
        data: { statusCode, message },
      },
    } = error;
    if (statusCode === serverStatus.unauthorized)
      showErrorToast('입력하신 이메일과 비밀번호를 확인해주세요');
    else {
      showErrorToast(message);
    }
  }
};
```

### 2. 비동기 통신 로직 최적화 - 정도영님

---

```js
import { TODO_URL } from '../constants';
import {
  axiosInstanceWithToken,
  serverStatus,
  showErrorToast,
  statusMessageObj,
} from '../utils';

const handleStatusCode = (e) => {
  const {
    response: { status },
  } = e;
  if (status === serverStatus.unauthorized) showErrorToast(tokenProblemComment);
  else showErrorToast(serverProblemComment);
};

export const fetchTodos = async () => {
  let todos = null;
  try {
    const { data } = await axiosInstanceWithToken.get(TODO_URL);
    todos = data;
  } catch (e) {
    handleStatusCode(e);
  }
  return todos;
};

export const postTodo = async (newTodoContent) => {
  let newTodo = null;
  try {
    const { data } = await axiosInstanceWithToken.post(TODO_URL, {
      todo: newTodoContent,
    });
    newTodo = data;
  } catch (e) {
    handleStatusCode(e);
  }
  return newTodo;
};

export const modifyTodo = async (
  todoId,
  modifiedTodoContent,
  isCompleted,
  willCompleteChange,
) => {
  let modifiedTodo = null;
  try {
    const { data } = await axiosInstanceWithToken.put(`${TODO_URL}/${todoId}`, {
      todo: modifiedTodoContent,
      isCompleted:
        willCompleteChange === undefined ? isCompleted : !isCompleted,
    });
    modifiedTodo = data;
  } catch (e) {
    handleStatusCode(e);
  }
  return modifiedTodo;
};

export const deleteTodo = async (todoId) => {
  let isDeleteSuccessful = false;
  try {
    const { status } = await axiosInstanceWithToken.delete(
      `${TODO_URL}/${todoId}`,
    );
    if (status === serverStatus.noContent) isDeleteSuccessful = true;
  } catch (e) {
    handleStatusCode(e);
  }
  return isDeleteSuccessful;
};
```

1. 유효성 검사하는 함수를 하나의 파일에 선언 한 후 로그인, 회원가입 화면에서 불러와서 사용할 수 있도록 구현했습니다.
2. 토큰을 저장, 삭제하는 utils 함수들과 axios interceptor 객체를 통해 불필요한 중복 코드들을 최대한 제거 및 각 코드들을 모듈화하여 프로젝트를 제작했습니다.
3. try, catch 문과 에러를 핸들링하는 함수를 제작하여 각 에러 케이스에 맞는 상태 코드를 검출하고 알맞은 메세지를 클라이언트에게 제공하여 유저 편의성을 높이고자 하였습니다.

### 3. routes 폴더: 라우팅 설정을 별도 컴포넌트로 분리 - 오경준님

```js
import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { Auth, Todo } from '../pages';
import { getAccessToken } from '../utils';

const Router = () => {
  const isToken = getAccessToken();

  const routes = useRoutes([
    {
      path: '/',
      element: isToken ? <Navigate replace to="/todo" /> : <Auth />,
    },
    {
      path: '/todo',
      element: isToken ? <Todo /> : <Navigate replace to="/" />,
    },
  ]);
  return routes;
};

export default Router;
```

기존에 작성된 코드에서는 `useEffect`를 사용해 토큰이 있으면 접속,
없으면 `redirect` 시키는 로직이 있었는데 `useEffect`로 로직을 구현하게 되면
해당 컴포넌트가 mount 될 때 useEffect가 동작하기 때문에
화면이 깜빡이는 단점이 있었습니다.

`Route 조건문` 렌더링을 사용해 해당 문제를 해결했습니다.

이를 통해 기존 코드에서 회원가입, 로그인/ TODO리스트 데이터를 `fetch`하기 위한
`useEffect`훅 사용 시 조건부 라우팅 로직까지 함께 있었던 부분에서
온전히 `useEffect`훅은 데이터를 가져오기 위한 용도로만 사용할 수 있도록
개선할 수 있었습니다.
