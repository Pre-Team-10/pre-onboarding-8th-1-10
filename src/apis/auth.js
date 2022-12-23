import { SIGNUP_URL, SIGNIN_URL } from '../constants';
import {
  axiosInstance,
  setAccessToken,
  showErrorToast,
  showSuccessToast,
} from '../utils';
import { serverStatus } from './todos';

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
