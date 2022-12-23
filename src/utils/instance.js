import axios from 'axios';
import { getAccessToken } from './token';

const axiosInstance = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const TOKEN = getAccessToken();
    if (TOKEN) {
      config.headers.Authorization = `Bearer ${TOKEN}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
