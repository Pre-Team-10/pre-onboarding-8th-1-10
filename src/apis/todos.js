import { TODO_URL } from '../constants';
import { axiosInstanceWithToken, showErrorToast } from '../utils';

const serverProblemComment = '서버에 문제가 있습니다!';

const tokenProblemComment = '토큰이 유효하지 않습니다! 재로그인해주세요!';

const serverStatus = {
  noContent: 204,
  unauthorized: 401,
};

const handleStatusCode = (status) => {
  if (status === serverStatus.unauthorized) showErrorToast(tokenProblemComment);
  else showErrorToast(serverProblemComment);
};

export const fetchTodos = async () => {
  let todos = null;
  try {
    const { data } = await axiosInstanceWithToken.get(TODO_URL);
    todos = data;
  } catch (e) {
    const {
      response: { status },
    } = e;
    handleStatusCode(status);
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
    console.log(e);
    const {
      response: { status },
    } = e;
    handleStatusCode(status);
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
    const {
      response: { status },
    } = e;
    handleStatusCode(status);
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
    const {
      response: { status },
    } = e;
    handleStatusCode(status);
  }
  return isDeleteSuccessful;
};
