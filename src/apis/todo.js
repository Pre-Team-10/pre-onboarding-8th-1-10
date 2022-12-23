import { TODO_URL } from '../constants';
import { axiosInstance } from '../utils';

export const getTodos = async () => {
  try {
    const { data } = await axiosInstance.get(TODO_URL);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteTodo = async (id) => {
  try {
    await axiosInstance.delete(`${TODO_URL}/${id}`);
  } catch (error) {
    console.error(error);
  }
};

export const addTodo = async (title) => {
  try {
    const { data } = await axiosInstance.post(TODO_URL, { todo: title });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const editTodo = async ({ id, title, isCompleted }) => {
  try {
    const { data } = await axiosInstance.put(`${TODO_URL}/${id}`, {
      todo: title,
      isCompleted,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};
