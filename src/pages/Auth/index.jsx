import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../apis/auth';
import { Button, Input } from '../../components';
import { useValidationCheck } from '../../hooks/useValidationCheck';
import {
  emailValidationCheck,
  passwordValidationCheck,
} from '../../utils/validationCheck';
import * as S from './styles';

function Auth() {
  const [isSignInPage, setIsSignInPage] = useState(true);
  const navigate = useNavigate();
  const [email, isEmailValid, handleEmailChange] =
    useValidationCheck(emailValidationCheck);

  const [password, isPasswordValid, handlePasswordChange] = useValidationCheck(
    passwordValidationCheck,
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    auth({
      email,
      password,
      isSignInPage,
      onSuccess: () => navigate('/todo'),
    });
  };
  return (
    <S.Container>
      <S.LeftBox src="/Img/pre-onboarding.png" />
      <S.RightBox>
        <S.Title>{isSignInPage ? 'Sign In' : 'Sign Up'}</S.Title>
        <S.Form onSubmit={handleSubmit}>
          <Input
            type="Email"
            isValid={isEmailValid}
            value={email}
            message="올바른 이메일 형식을 입력해주세요."
            onChange={handleEmailChange}
          />
          <Input
            type="Password"
            isValid={isPasswordValid}
            value={password}
            message="비밀번호는 8자 이상입니다."
            onChange={handlePasswordChange}
            password
          />
          <Button disabled={!isEmailValid || !isPasswordValid}>
            {isSignInPage ? 'Sign In' : 'Sign Up'}
          </Button>
          <S.Link onClick={() => setIsSignInPage(!isSignInPage)}>
            {isSignInPage ? 'Sign Up' : 'Sign In'}
          </S.Link>
        </S.Form>
      </S.RightBox>
    </S.Container>
  );
}

export default Auth;
