import React, { useState } from 'react';
import {
  TodoItemWrapper,
  TodoItemInput,
  TodoItemCheckbox,
  Button,
  DeleteButton,
  Text,
} from './styles';
import { getAccessToken, showErrorToast } from '../../utils';
import { deleteTodoApi, updateTodoApi } from '../../apis/todo';

function TodoItem({ id, todo, isCompleted, setIsDeleted }) {
  const [editTodoInput, setEditTodoInput] = useState(todo);
  const [isChecked, setIsChecked] = useState(isCompleted);
  const [isEditTodo, setIsEditTodo] = useState(false);

  const onEditTodoHandler = () => {
    setIsEditTodo(true);
  };
  const onCancelHandler = () => {
    setIsEditTodo(false);
  };

  const onUpdateTodoHandler = (e) => {
    e.preventDefault();
    const updateDoto = async () => {
      try {
        const response = await updateTodoApi(
          id,
          { todo: editTodoInput, isCompleted: isChecked },
          getAccessToken(),
        );
        setIsEditTodo(false);
        setIsDeleted(true);
      } catch (e) {
        showErrorToast(e.response.data.message);
        console.log(e.response);
      }
    };
    updateDoto();
  };

  const onDeletehandler = (e) => {
    e.preventDefault();
    const deleteTodo = async () => {
      try {
        if (getAccessToken()) {
          const response = await deleteTodoApi(id, getAccessToken());
        }
      } catch (e) {
        console.log(e);
      }
    };
    deleteTodo();
  };

  const checkboxHandler = (e) => {
    setIsChecked(e.target.checked);
  };

  return isEditTodo ? (
    <TodoItemWrapper>
      <TodoItemCheckbox type="checkbox" />
      <TodoItemInput
        type="text"
        value={editTodoInput}
        onChange={(e) => {
          setEditTodoInput(e.target.value);
        }}
      />
      <Button type="button" onClick={onUpdateTodoHandler}>
        완료
      </Button>
      <DeleteButton type="button" onClick={onCancelHandler}>
        취소
      </DeleteButton>
    </TodoItemWrapper>
  ) : (
    <TodoItemWrapper>
      <TodoItemCheckbox
        type="checkbox"
        onChange={checkboxHandler}
        defaultChecked={isChecked}
      />
      <Text>{editTodoInput}</Text>
      <Button type="button" onClick={onEditTodoHandler}>
        수정
      </Button>
      <DeleteButton type="button" onClick={onDeletehandler}>
        삭제
      </DeleteButton>
    </TodoItemWrapper>
  );
}

export default React.memo(TodoItem);
