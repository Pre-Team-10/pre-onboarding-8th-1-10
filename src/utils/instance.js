import axios from 'axios';
import { getAccessToken } from './token';

const BASE_URL = 'https://pre-onboarding-selection-task.shop';

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
    if (accessToken)
      reqConfigWithToken.headers['Authorization'] = `Bearer ${accessToken}`;
    return reqConfigWithToken;
  },
  (error) => {
    return Promise.reject(error);
  },
);
