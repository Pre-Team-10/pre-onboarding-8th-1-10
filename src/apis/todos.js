import { TODO_URL } from '../constants';
import { axiosInstanceWithToken, showErrorToast } from '../utils';

const serverProblemComment = '서버에 문제가 있습니다!';

const serverStatus = {
  noContent: 204,
};

export const fetchTodos = async () => {
  let todos = null;
  try {
    const { data } = await axiosInstanceWithToken.get(TODO_URL);
    todos = data;
  } catch (e) {
    showErrorToast(serverProblemComment);
  }
  return todos;
};

export const postTodo = async (newTodoContent) => {
  let newTodo = null;
  try {
    const { data } = await axiosInstanceWithToken.post(TODO_URL, {
      todo: newTodoContent,
    });
    newTodo = data;
  } catch (e) {
    showErrorToast(serverProblemComment);
  }
  return newTodo;
};

export const modifyTodo = async (modifiedTodoContent, todoId) => {
  let modifiedTodo = null;
  try {
    const { data } = await axiosInstanceWithToken.put(`${TODO_URL}/${todoId}`, {
      todo: modifiedTodoContent,
      isCompleted: false,
    });
    modifiedTodo = data;
  } catch (e) {
    showErrorToast(serverProblemComment);
  }
  return modifiedTodo;
};

export const deleteTodo = async (todoId) => {
  let isSuccessfulDelete = false;
  try {
    const { status } = await axiosInstanceWithToken.delete(
      `${TODO_URL}/${todoId}`,
    );
    if (status === serverStatus.noContent) isSuccessfulDelete = true;
  } catch (e) {
    showErrorToast(serverProblemComment);
  }
  return isSuccessfulDelete;
};
