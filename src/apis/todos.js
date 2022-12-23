import { TODO_URL } from '../constants';
import {
  axiosInstanceWithToken,
  serverStatus,
  showErrorToast,
  statusMessageObj,
} from '../utils';

export const handleStatusCode = (e) => {
  const {
    response: { status },
  } = e;
  if (status === serverStatus.unauthorized)
    showErrorToast(statusMessageObj.tokenProblemComment);
  else showErrorToast(statusMessageObj.serverProblemComment);
};

export const fetchTodos = async () => {
  let todos = null;
  try {
    const { data } = await axiosInstanceWithToken.get(TODO_URL);
    todos = data;
  } catch (e) {
    handleStatusCode(e);
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
    handleStatusCode(e);
  }
  return newTodo;
};

export const modifyTodo = async (
  todoId,
  modifiedTodoContent,
  isCompleted,
  willCompleteChange,
) => {
  let modifiedTodo = null;
  try {
    const { data } = await axiosInstanceWithToken.put(`${TODO_URL}/${todoId}`, {
      todo: modifiedTodoContent,
      isCompleted:
        willCompleteChange === undefined ? isCompleted : !isCompleted,
    });
    modifiedTodo = data;
  } catch (e) {
    handleStatusCode(e);
  }
  return modifiedTodo;
};

export const deleteTodo = async (todoId) => {
  let isDeleteSuccessful = false;
  try {
    const { status } = await axiosInstanceWithToken.delete(
      `${TODO_URL}/${todoId}`,
    );
    if (status === serverStatus.noContent) isDeleteSuccessful = true;
  } catch (e) {
    handleStatusCode(e);
  }
  return isDeleteSuccessful;
};
