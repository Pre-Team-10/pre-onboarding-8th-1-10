import { instance } from '../utils/instance';
import { setToken } from '../utils/token';
import { SIGNUP_URL, SIGNIN_URL } from '../constants';

/** 로그인 요청 */
export const handleSignin = async (userInfo) => {
  await instance
    .post(SIGNIN_URL, userInfo)
    .then((response) => {
      setToken(response);
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};

/** 회원가입 요청 */
export const handleSignup = async (userInfo) => {
  await instance
    .post(SIGNUP_URL, userInfo)
    .then(() => {
      alert('회원가입을 완료하셧습니다.');
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};
