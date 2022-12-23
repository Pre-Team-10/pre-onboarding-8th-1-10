import React, { useEffect, useState } from 'react';
import { deleteTodo, editTodo, getTodos } from '../../../apis/todo';
import {
  TodoCompletedSVG,
  TodoDeleteSVG,
  TodoEditSVG,
  TodoInCompletedSVG,
} from '../../../assets';
import Loading from '../../Loading/Loading';
import * as S from './styles';

function TodoList({ todos, setTodos }) {
  const [edit, setEdit] = useState(undefined);
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState('');

  const handleEditMode = (item) => {
    setValue(item.todo);
    setEdit(item.id);
    setChecked(item.isCompleted);
  };

  const onEditChange = (e) => {
    setValue(e.target.value);
  };

  const handleEdit = ({ id, title }) => {
    editTodo({ id, title, isCompleted: checked }).then((res) => {
      setTodos((prev) => {
        const index = prev.findIndex((todo) => todo.id === id);
        prev[index] = res;
        return [...prev];
      });
    });
  };

  const handleDelete = (id) => {
    deleteTodo(id).then(() => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    });
  };

  const handleSubmit = (e) => {
    e.stopPropagation();
    handleEdit({ id: edit, title: value, isCompleted: checked });
    setChecked(false);
    setEdit(undefined);
    setValue('');
  };

  useEffect(() => {
    getTodos().then((res) => {
      setTodos(res);
    });
  }, []);

  if (!todos) {
    return (
      <S.Container>
        <div className="loding-form">
          <Loading />
        </div>
      </S.Container>
    );
  }
  if (todos && !todos.length) {
    return (
      <S.Container>
        <S.Text>아직 설정된 할일이 없어요!</S.Text>
      </S.Container>
    );
  }
  return (
    <S.Container>
      {todos.map((todo) => {
        return (
          <S.TodoItem key={todo.id}>
            {edit && edit === todo.id ? (
              <S.EditContainer>
                <S.CheckBox
                  type="checkbox"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
                <S.Input
                  type="text"
                  name="edit-input"
                  defaultValue={todo.todo}
                  onChange={onEditChange}
                />
                <S.EditDiv>
                  <S.EditBtn onClick={handleSubmit}>수정</S.EditBtn>
                  <S.DeleteBtn
                    onClick={(e) => {
                      e.stopPropagation();
                      setEdit(undefined);
                    }}
                  >
                    취소
                  </S.DeleteBtn>
                </S.EditDiv>
              </S.EditContainer>
            ) : (
              <>
                <div className="todo-text">
                  {todo.isCompleted ? (
                    <TodoCompletedSVG />
                  ) : (
                    <TodoInCompletedSVG />
                  )}
                </div>

                <div className="todo-text">
                  {todo.todo.slice(0, 10)}
                  {todo.todo.length > 10 && '...'}
                </div>

                <div className="todo-icons">
                  <TodoEditSVG
                    onClick={() => {
                      handleEditMode(todo);
                    }}
                  />
                  <TodoDeleteSVG
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(todo.id);
                    }}
                  />
                </div>
              </>
            )}
          </S.TodoItem>
        );
      })}
    </S.Container>
  );
}

export default TodoList;
