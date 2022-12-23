import { baseAxiosInstance, serverRoutes } from '../constants/constants';
import { saveTokenInLocalStorage } from '../utils/utils';

export const fetchAccessToken = async (isSignUp, email, password) => {
  let responseMessage = '';
  let token = '';
  try {
    const {
      data: { access_token: accessToken },
    } = await baseAxiosInstance.post(
      `/auth/${
        isSignUp ? serverRoutes.auth.signup : serverRoutes.auth.signin
      }/`,
      {
        email,
        password,
      },
    );
    saveTokenInLocalStorage(accessToken);
    responseMessage = `${isSignUp ? '가입' : '로그인'} 성공!`;
    token = accessToken;
  } catch (e) {
    const { response } = e;
    if (response) responseMessage = response?.data.message;
  } finally {
    // eslint-disable-next-line no-alert
    window.alert(responseMessage);
  }
  return token;
};
