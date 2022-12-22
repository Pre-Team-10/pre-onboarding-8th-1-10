import { SIGNUP_URL, SIGNIN_URL } from '../constants';
import {
  axiosInstance,
  setAccessToken,
  showErrorToast,
  showSuccessToast,
} from '../utils';

export const auth = async ({ email, password, isSignInPage, onSuccess }) => {
  const body = { email, password };
  const url = isSignInPage ? SIGNIN_URL : SIGNUP_URL;

  try {
    await axiosInstance
      .post(url, body)
      .then(({ data: { access_token: accessToken } }) =>
        setAccessToken(accessToken),
      );
    if (onSuccess) {
      const successMsg = isSignInPage ? '로그인 성공!' : '회원가입 성공!';
      showSuccessToast(`${successMsg}`);
      return onSuccess();
    }
  } catch (error) {
    const {
      response: {
        data: { statusCode, message },
      },
    } = error;
    if (statusCode === 401)
      showErrorToast('입력하신 이메일과 비밀번호를 확인해주세요');
    else {
      showErrorToast(message);
    }
  }
};
