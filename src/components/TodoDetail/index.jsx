import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { removeTodo } from '../../apis/todo';
import * as S from './styles';

export default function TodoDetail({ todoList }) {
  axios.defaults.baseURL = 'https://pre-onboarding-selection-task.shop';
  const [updateState, setUpdateState] = useState(false);
  const [isCompletedState, setIsCompletedState] = useState(
    todoList.isCompleted,
  );
  const [todoState, setTodoState] = useState(todoList.todo);
  const [todo, setTodo] = useState({
    todo: String,
    isCompleted: Boolean,
  });
  const todoHandler = (event) => {
    setTodoState(event.currentTarget.value);
    setTodo({
      isCompleted: isCompletedState,
      todo: event.currentTarget.value,
    });
  };
  const isCompletedHandler = (event) => {
    console.log(event.currentTarget.checked);
    setIsCompletedState(event.currentTarget.checked);
    setTodo({
      isCompleted: event.currentTarget.checked,
      todo: todoState,
    });
  };

  async function putTodo() {
    const result = window.confirm('수정하시겠습니까?');
    if (result) {
      try {
        axios.defaults.headers.common['Authorization'] = '';
        const JWTTOEKN = localStorage.getItem('ACCESS_TOKEN');
        axios.defaults.headers.common['Authorization'] = `Bearer ${JWTTOEKN}`;
        const res = await axios.put(
          `/todos/${todoList.id}`,
          { todo: todo.todo, isCompleted: todo.isCompleted },
          {
            withCredentials: false,
          },
        );
        window.location.reload();
      } catch (error) {
        console.log(error.response.data.message);
      }
    }
  }
  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      putTodo(todoList.id, todo.todo, todo.isCompleted);
    },
    [isCompletedState, todoState, todo, isCompletedHandler, todoHandler],
  );

  const deleteOnClick = () => {
    removeTodo(todoList.id);
  };
  const updateOnClick = () => {
    setUpdateState(!updateState);
  };
  const removeUpdate = () => {
    setUpdateState(!updateState);
  };
  return (
    <S.GetBlogAllTr>
      <td>
        <S.GetCommentsDiv>
          <table>
            <tr>
              <S.GetCommentsHeaderBox>
                <div>
                  {todoList.isCompleted ? (
                    <S.DeleteCommentImg src="/Img/checked.png" />
                  ) : (
                    <S.DeleteCommentImg src="/Img/unChecked.png" />
                  )}
                </div>
                <div />
                <S.GetBlogAllCreated>
                  <S.GetCommentsMoreBtn onClick={deleteOnClick}>
                    <S.DeleteCommentImg src="/Img/delete.png" />
                  </S.GetCommentsMoreBtn>
                  <img alt="moreImg" src="/Img/moreBtn.png" />
                  <S.GetCommentsMoreBtn onClick={updateOnClick}>
                    <S.DeleteCommentImg src="/Img/edit.png" />
                  </S.GetCommentsMoreBtn>
                </S.GetBlogAllCreated>
              </S.GetCommentsHeaderBox>
            </tr>
            <tr>
              <td>
                <S.GetBlogAllContent>{todoList.todo}</S.GetBlogAllContent>
              </td>
            </tr>
          </table>
        </S.GetCommentsDiv>
        {updateState ? (
          <td>
            <form onSubmit={onSubmit}>
              <S.PostCommentInput
                value={todoState}
                type="text"
                placeholder="내용을 입력하세요."
                onChange={todoHandler}
              />
              {isCompletedState ? (
                <input
                  value={isCompletedState}
                  type="checkbox"
                  onChange={isCompletedHandler}
                  checked
                />
              ) : (
                <input
                  value={isCompletedState}
                  type="checkbox"
                  onChange={isCompletedHandler}
                />
              )}
              <S.PostBlogBtn>수정</S.PostBlogBtn>
              <S.PostBlogBtn onClick={removeUpdate}>취소</S.PostBlogBtn>
            </form>
          </td>
        ) : (
          <div />
        )}
      </td>
    </S.GetBlogAllTr>
  );
}
