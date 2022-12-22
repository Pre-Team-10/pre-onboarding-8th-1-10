import { SIGNUP_URL, SIGNIN_URL } from '../constants';
import { axiosInstance, setAccessToken } from '../utils';

export const auth = async ({ email, password, isSignInPage, onSuccess }) => {
  const body = { email, password };
  const url = isSignInPage ? SIGNIN_URL : SIGNUP_URL;
  try {
    await axiosInstance
      .post(url, body)
      .then(({ data }) => setAccessToken(data.access_token));
    if (onSuccess) onSuccess();
  } catch (error) {
    alert('로그인에 실패했습니다.');
  }
};
