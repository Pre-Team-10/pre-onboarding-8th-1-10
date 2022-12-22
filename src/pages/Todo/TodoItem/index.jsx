import React, { useState } from 'react';
import { BiEdit, BiTrash } from 'react-icons/bi';
import { updateTodo, deleteTodo } from '../../../apis';
import { Button } from '../../../components/Button/styles';
import { Input } from '../../../components/Input/styles';
import * as S from './styles';

function TodoItem({ todoItem, setTodoList }) {
  const [isEdit, setIsEdit] = useState(false);
  const [todoInfo, setTodoInfo] = useState({
    todo: todoItem.todo,
    isCompleted: todoItem.isCompleted,
  });

  const todoInputChange = (e) => {
    setTodoInfo((prev) => ({ ...prev, todo: e.target.value }));
  };

  const handleOnChangeChecked = (id, data) => () => {
    const newData = { todo: data.todo, isCompleted: !todoInfo.isCompleted };
    updateTodo(id, newData).then((res) => {
      setTodoList(res.data);
      setTodoInfo(newData);
    });
  };

  const handleUpdateBtnClick = (id, data) => () => {
    console.log(id, data);
    updateTodo(id, data).then((res) => {
      setTodoList(res.data);
      setIsEdit(false);
    });
  };

  const handleDeleteBtnClick = (id) => () => {
    deleteTodo(id).then((res) => setTodoList(res.data));
  };

  return (
    <S.TodoItemLayout>
      <input
        type="checkbox"
        checked={todoInfo.isCompleted}
        onChange={handleOnChangeChecked(todoItem.id, todoInfo)}
      />
      {isEdit ? (
        <S.OnEditWrapper>
          <Input
            inputType="todo"
            type="text"
            value={todoInfo.todo}
            onChange={todoInputChange}
          />
          <Button
            buttonType="confirm"
            type="button"
            onClick={handleUpdateBtnClick(todoItem.id, todoInfo)}
          >
            수정하기
          </Button>
          <Button
            buttonType="cancel"
            type="button"
            onClick={() => setIsEdit(false)}
          >
            X
          </Button>
        </S.OnEditWrapper>
      ) : (
        <S.TaskInfoWrapper>
          <S.TaskInfoText>{todoItem.todo}</S.TaskInfoText>
          <S.FunctionBtnDiv onClick={() => setIsEdit(true)}>
            <BiEdit />
            <span>수정</span>
          </S.FunctionBtnDiv>
          <S.FunctionBtnDiv onClick={handleDeleteBtnClick(todoItem.id)}>
            <BiTrash />
            <span>삭제</span>
          </S.FunctionBtnDiv>
        </S.TaskInfoWrapper>
      )}
    </S.TodoItemLayout>
  );
}

export default TodoItem;
