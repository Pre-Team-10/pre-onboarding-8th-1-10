import React, { useState, useEffect } from 'react';
import TodoItem from '../../components/TodoItem';
import {
  CreateTodoContainer,
  CreateTodoWrapper,
  Title,
  CreateTodoInput,
  Button,
} from './styles';
import { postCreateTodoApi, getTodosApi } from '../../apis/todo';
import { getAccessToken, showErrorToast } from '../../utils';

function Todo() {
  const [createTodo, setCreateTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const getTodoList = async () => {
      try {
        if (getAccessToken()) {
          const response = await getTodosApi(getAccessToken());
          setTodoList(response.data);
        }
      } catch (e) {
        showErrorToast(e.response.data.message);
      }
    };
    getTodoList();
  });

  const onCreateTodoHandler = (e) => {
    e.preventDefault();
    const postCreateTodo = async () => {
      try {
        if (getAccessToken()) {
          const response = await postCreateTodoApi(
            { todo: createTodo },
            getAccessToken(),
          );
          setCreateTodo('');
        }
      } catch (e) {
        showErrorToast(e.response.data.message);
      }
    };
    postCreateTodo();
  };

  return (
    <CreateTodoContainer>
      <Title>할일 목록</Title>
      <CreateTodoWrapper>
        <CreateTodoInput
          type="text"
          value={createTodo}
          onChange={(e) => {
            setCreateTodo(e.target.value);
          }}
        />
        <Button type="submit" onClick={onCreateTodoHandler}>
          추가
        </Button>
      </CreateTodoWrapper>

      {todoList.map((el) => {
        const { id, todo, isCompleted, setIsDeleted } = el;
        return (
          <TodoItem
            key={id}
            id={id}
            todo={todo}
            isCompleted={isCompleted}
            setIsDeleted={setIsDeleted}
          />
        );
      })}
    </CreateTodoContainer>
  );
}

export default Todo;
