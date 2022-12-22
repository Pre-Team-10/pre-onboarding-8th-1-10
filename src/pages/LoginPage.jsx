import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAccessToken } from '../apis/api';
import { clientRoutes, minimumPwLength } from '../constants/constants';

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
      <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
      <form onSubmit={handleOnSubmit}>
        <input ref={idInputRef} onChange={checkIdValidation} />
        <span>
          {id && (!isIdValid ? '이메일 형식의 아이디를 입력하세요.' : '')}
        </span>
        <input
          ref={passwordInputRef}
          onChange={checkPwValidation}
          type="password"
        />
        <span>
          {password &&
            (!isPwValid ? `비밀번호는 ${minimumPwLength}자 이상입니다.` : '')}
        </span>
        <button type="submit" disabled={!isIdValid || !isPwValid}>
          enter
        </button>
        <button type="button" onClick={toggleIsSignUp}>
          sign up
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
