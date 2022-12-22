/* eslint-disable no-param-reassign */
import { TODOS_URL } from '../constants';
import {
  axiosInstance,
  getAccessToken,
  setAccessToken,
  showErrorToast,
  showSuccessToast,
} from '../utils';

axiosInstance.interceptors.request.use((config) => {
  const accessToken = getAccessToken();
  if (accessToken !== '')
    config.headers.Authorization = `Bearer ${getAccessToken()}`;
  return config;
});

export const getTodos = async () => {
  try {
    const response = await axiosInstance
      .get(`${TODOS_URL}`)
      .then(({ data }) => data);
    return response;
  } catch (error) {
    const {
      response: {
        data: { message },
      },
    } = error;
    showErrorToast(message);
  }
};

export const createTodo = async (data) => {
  try {
    const response = await axiosInstance.post(`${TODOS_URL}`, data);

    return response;
  } catch (error) {
    const {
      response: {
        data: { message },
      },
    } = error;
    showErrorToast(message);
  }
};

export const updateTodo = async (id, data) => {
  try {
    await axiosInstance.put(`todos/${id}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
    });
    const response = getTodos();
    return response;
  } catch (error) {
    const {
      response: {
        data: { message },
      },
    } = error;
    showErrorToast(message);
  }
};

export const deleteTodo = async (id) => {
  try {
    await axiosInstance.delete(`todos/${id}`);
    const response = getTodos();
    return response;
  } catch (error) {
    const {
      response: {
        data: { message },
      },
    } = error;
    showErrorToast(message);
  }
};
