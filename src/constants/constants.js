import axios from 'axios';

export const baseAxiosInstance = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop',
});

export const clientRoutes = {
  auth: '',
  todo: 'todo',
};

export const serverRoutes = {
  auth: {
    signup: 'signup',
    signin: 'signin',
  },
  todo: 'todo',
};

export const minimumPwLength = 8;

export const goodComment = '올바른 형식입니다. 😃';
