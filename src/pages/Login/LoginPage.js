/* eslint-disable no-alert */
import React, { useState } from 'react';
import { handleSignin } from '../../apis/auth';
import {
  LoginSection,
  LoginWhiteBox,
  LoginText,
  Input,
  LoginButton,
  AccountText,
} from './styled';

function LoginPage() {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const loginFun = async () => {
    if (userInfo.email === '') {
      alert('Id를 입력해주세요.');
    } else if (userInfo.email.includes('@') === false) {
      alert('@을 포함한 이메일 형식으로 입력해주세요.');
    } else if (userInfo.email.includes('@') === true) {
      if (userInfo.password.length === 0) {
        alert('비밀번호를 입력해주세요.');
      } else if (userInfo.password < 8) {
        alert('비밀번호는 8자리이상입니다.');
      } else if (userInfo.password >= 8) {
        handleSignin(userInfo);
      }
    }
  };
  const [Text, setText] = useState('로그인');

  return (
    <LoginSection>
      <LoginWhiteBox>
        <LoginText>{Text}</LoginText>
        <Input
          placeholder="UserID"
          onInput={(e) => {
            const box = { ...userInfo };
            box.email = e.target.value;
            setUserInfo(box);
          }}
        />
        <Input
          placeholder="Password"
          onInput={(e) => {
            const box = { ...userInfo };
            box.password = e.target.value;
            setUserInfo(box);
          }}
        />
        <LoginButton
          type="button"
          onClick={() => {
            loginFun();
          }}
        >
          Login
        </LoginButton>
        <AccountText>
          Not a member?
          <span>creat account</span>
        </AccountText>
      </LoginWhiteBox>
    </LoginSection>
  );
}

export default LoginPage;
