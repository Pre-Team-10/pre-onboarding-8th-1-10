import { TODO_URL } from '../constants';
import { axiosInstance } from '../utils';

export const getTodosApi = async (accessToken) => {
  const response = await axiosInstance.get(`${TODO_URL}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response;
};

export const postCreateTodoApi = async (body, accessToken) => {
  const response = await axiosInstance.post(`${TODO_URL}`, body, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response;
};

export const updateTodoApi = async (id, body, accessToken) => {
  const response = await axiosInstance.put(`${TODO_URL}/${id}`, body, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response;
};

export const deleteTodoApi = async (id, accessToken) => {
  const response = await axiosInstance.delete(`${TODO_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response;
};
