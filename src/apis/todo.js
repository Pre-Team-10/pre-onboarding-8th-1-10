/* eslint-disable no-param-reassign */
import { TODOS_URL } from '../constants';
import { axiosInstance, getAccessToken, showErrorToast } from '../utils';

axiosInstance.interceptors.request.use((config) => {
  const accessToken = getAccessToken();
  if (accessToken !== '')
    config.headers.Authorization = `Bearer ${accessToken}`;
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

export const createTodo = async (newTodo) => {
  try {
    const response = await axiosInstance.post(`${TODOS_URL}`, newTodo);

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

export const updateTodo = async (id, newTodo) => {
  try {
    await axiosInstance.put(`${TODOS_URL}/${id}`, newTodo);
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
    await axiosInstance.delete(`${TODOS_URL}/${id}`);
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
