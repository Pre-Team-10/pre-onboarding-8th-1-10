import React from 'react';
import {
  TodoItemWrapper,
  TodoItemInput,
  TodoItemCheckbox,
  Button,
  DeleteButton,
} from './styles';

function TodoItem() {
  return (
    <TodoItemWrapper>
      <TodoItemCheckbox type="checkbox" />
      <TodoItemInput type="text" />
      <Button type="button">작성</Button>
      <DeleteButton type="button">취소</DeleteButton>
    </TodoItemWrapper>
  );
}

export default TodoItem;
