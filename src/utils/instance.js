import axios, { AxiosError } from 'axios';
import { showErrorToast } from './toast';
import { getAccessToken } from './token';

const BASE_URL = 'https://pre-onboarding-selection-task.shop';

const TOKEN_REGEX = /[^0-9A-Za-z._-\s]/gi;

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
    showErrorToast('올바른 토큰값이 아닙니다.');
    return new AxiosError();
  },
  (error) => {
    return Promise.reject(error);
  },
);
