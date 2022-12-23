import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAccessToken } from '../apis/api';
import {
  clientRoutes,
  goodComment,
  minimumPwLength,
} from '../constants/constants';
import {
  Button,
  CreateInput,
  FormHeader,
  SignForm,
  Tip,
} from '../styles/styles';

function LoginPage() {
  const navigate = useNavigate();
  const [isIdValid, setIdValid] = useState(false);
  const [isPwValid, setIsPwValid] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const idInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const id = idInputRef.current?.value;
  const password = passwordInputRef.current?.value;

  const checkIdValidation = (e) => {
    if (e.currentTarget.value.includes('@')) setIdValid(true);
    else setIdValid(false);
  };
  const checkPwValidation = (e) => {
    if (e.currentTarget.value.length >= minimumPwLength) setIsPwValid(true);
    else setIsPwValid(false);
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (isIdValid && isPwValid) {
      const token = await fetchAccessToken(
        isSignUp,
        idInputRef.current?.value,
        passwordInputRef.current?.value,
      );
      if (token) navigate(`/${clientRoutes.todo}`);
    }
  };
  const toggleIsSignUp = () => setIsSignUp(!isSignUp);
  return (
    <div>
      <SignForm onSubmit={handleOnSubmit}>
        <FormHeader>{isSignUp ? 'Sign Up' : 'Sign In'}</FormHeader>
        <CreateInput
          ref={idInputRef}
          onChange={checkIdValidation}
          type="email"
          placeholder="email"
        />
        <Tip>
          {id &&
            (!isIdValid ? '이메일 형식의 아이디를 입력하세요.' : goodComment)}
        </Tip>
        <CreateInput
          ref={passwordInputRef}
          onChange={checkPwValidation}
          type="password"
          placeholder="password"
        />
        <Tip>
          {password &&
            (!isPwValid
              ? `비밀번호는 ${minimumPwLength}자 이상입니다.`
              : goodComment)}
        </Tip>
        <div className="buttons">
          <Button
            type="submit"
            disabled={!isIdValid || !isPwValid}
            isActive={isIdValid && isPwValid}
          >
            enter
          </Button>
          <Button type="button" onClick={toggleIsSignUp} isActive>
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </Button>
        </div>
      </SignForm>
    </div>
  );
}

export default LoginPage;
