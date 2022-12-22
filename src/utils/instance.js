import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop',
});
