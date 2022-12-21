/* eslint-disable no-alert */
import React, { useState } from 'react';
import styled from 'styled-components';

function LoginPage() {
  const [Id, setId] = useState('');
  const [Pw, setPw] = useState('');

  const loginFun = async () => {
    if (Id === '') {
      alert('Id를 입력해주세요.');
    } else if (Id.includes('@') === false) {
      alert('@을 포함한 이메일 형식으로 입력해주세요.');
    } else if (Id.includes('@') === true) {
      if (Pw.length === 0) {
        alert('비밀번호를 입력해주세요.');
      } else if (Pw.length < 8) {
        alert('비밀번호는 8자리이상입니다.');
      } else if (Pw.length >= 8) {
        // signIn(Id, Pw);
      }
    }
  };
  return (
    <LoginSection>
      <LoginWhiteBox>
        <LoginText>로그인</LoginText>
        <Input
          placeholder="UserID"
          onInput={(e) => {
            setId(e.target.value);
          }}
        />
        <Input
          placeholder="Password"
          onInput={(e) => {
            setPw(e.target.value);
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
          Not a member? <span>Creat Account</span>
        </AccountText>
      </LoginWhiteBox>
    </LoginSection>
  );
}

export default LoginPage;

const LoginSection = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1px;
  background-color: #ffbc40;
`;

const LoginWhiteBox = styled.div`
  width: 500px;
  height: 400px;
  background-color: white;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  margin: 0 auto;
  margin-top: 10%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const LoginText = styled.h1`
  text-align: center;
  color: gray;
  margin-top: 50px;
`;
const Input = styled.input`
  width: 350px;
  padding: 14px;
  border-radius: 5px;
  background-color: #e5f0f9;
  margin: 0 auto;
  border: 1px solid lightgray;
  margin-top: 20px;
`;
const LoginButton = styled.button`
  width: 350px;
  padding: 12px;
  margin: 0 auto;
  background-color: orange;
  color: white;
  border: 1px solid lightgray;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  font-size: 20px;
  &:hover {
    background-color: orangered;
  }
`;
const AccountText = styled.p`
  text-align: center;
  margin-top: 20px;
  color: gray;
  span {
    color: orange;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
`;
