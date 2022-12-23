import { TODO_URL } from '../constants';
import { axiosInstance } from '../utils';
import { showErrorToast } from '../utils/toast';

export const getTodos = async () => {
  try {
    const { data } = await axiosInstance.get(TODO_URL);
    return data;
  } catch (error) {
    showErrorToast('할일을 불러오는데 실패했습니다');
  }
};

export const deleteTodo = async (id) => {
  try {
    await axiosInstance.delete(`${TODO_URL}/${id}`);
  } catch (error) {
    showErrorToast('할일을 삭제하는데 실패했습니다');
  }
};

export const addTodo = async (title) => {
  try {
    const { data } = await axiosInstance.post(TODO_URL, { todo: title });
    return data;
  } catch (error) {
    showErrorToast('할일을 추가하는데 실패했습니다');
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
    showErrorToast('할일을 수정하는데 실패했습니다');
  }
};
