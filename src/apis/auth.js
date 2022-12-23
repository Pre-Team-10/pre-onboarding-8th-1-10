import { SIGNUP_URL, SIGNIN_URL } from '../constants';
import {
  axiosInstance,
  serverStatus,
  setAccessToken,
  showErrorToast,
  showSuccessToast,
  statusMessageObj,
} from '../utils';

export const auth = async ({ email, password, isSignInPage, onSuccess }) => {
  const newTodo = { email, password };
  const optionalSignObj = isSignInPage
    ? { url: SIGNIN_URL, msg: '로그인 성공!' }
    : { url: SIGNUP_URL, msg: '회원가입 성공!' };
  try {
    const {
      data: { access_token: accessToken },
    } = await axiosInstance.post(optionalSignObj.url, newTodo);
    setAccessToken(accessToken);
    if (accessToken && onSuccess) {
      showSuccessToast(optionalSignObj.msg);
      return onSuccess();
    }
  } catch (e) {
    const {
      response: {
        data: { statusCode, message },
      },
    } = e;
    if (statusCode === serverStatus.unauthorized)
      showErrorToast(statusMessageObj.idAndPwNotCorrectComment);
    else {
      showErrorToast(message);
    }
  }
};
