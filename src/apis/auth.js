import { instance } from '../utils/instance';

// 로그인 요청
export const handleSignin = async (userInfo) => {
  await instance
    .post('/auth/signin', userInfo)
    .then((response) => {
      localStorage.setItem('access_token', response.data.access_token);
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};

// 회원가입 요청
export const handleSignup = async (userInfo) => {
  await instance
    .post('/auth/signup', userInfo)
    .then((response) => {
      alert('회원가입을 완료하셧습니다.');
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};
