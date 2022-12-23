import axios, { AxiosError } from 'axios';
import { showErrorToast } from './toast';
import { getAccessToken } from './token';

const BASE_URL = 'https://pre-onboarding-selection-task.shop';

const TOKEN_REGEX = /[^0-9A-Za-z._-\s]/gi;

export const statusMessageObj = {
  idAndPwNotCorrectComment: '입력하신 이메일과 비밀번호를 확인해주세요',
  serverProblemComment: '서버에 문제가 있습니다!',
  tokenProblemComment: '토큰이 유효하지 않습니다! 재로그인해주세요!',
  notValidTokenComment: '올바른 토큰값이 아닙니다.',
};

export const serverStatus = {
  noContent: 204,
  unauthorized: 401,
};

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const axiosInstanceWithToken = axios.create({
  baseURL: BASE_URL,
});

axiosInstanceWithToken.interceptors.request.use(
  (config) => {
    const reqConfigWithToken = { ...config };
    const accessToken = getAccessToken();
    if (accessToken) {
      if (!TOKEN_REGEX.test(accessToken)) {
        reqConfigWithToken.headers['Authorization'] = `Bearer ${accessToken}`;
        return reqConfigWithToken;
      }
    }
    showErrorToast(statusMessageObj.notValidTokenComment);
    return new AxiosError();
  },
  (error) => {
    return Promise.reject(error);
  },
);
