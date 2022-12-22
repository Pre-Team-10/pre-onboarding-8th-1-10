import { SIGNUP_URL, SIGNIN_URL } from '../constants';
import { axiosInstance, setAccessToken } from '../utils';

export const auth = async ({ email, password, isSignInPage, onSuccess }) => {
  const body = { email, password };
  const url = isSignInPage ? SIGNIN_URL : SIGNUP_URL;
  try {
    await axiosInstance
      .post(url, body)
      .then(({ data: { access_token: accessToken } }) =>
        setAccessToken(accessToken),
      );
    if (onSuccess) onSuccess();
  } catch (error) {
    const {
      response: {
        data: { message },
      },
    } = error;
    if (message) window.alert(message);
  }
};
