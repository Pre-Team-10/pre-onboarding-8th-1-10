import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import { GlobalStyle2 } from '../../styles/GlobalStyle2';
import * as S from './styled';
import TodoDetail from '../../components/TodoDetail';
import { getTodos, addTodo } from '../../apis/todo';

function Todo() {
  axios.defaults.baseURL = 'https://pre-onboarding-selection-task.shop';
  const [todoLists, setTodoLists] = useState([]);
  const [todo, setTodo] = useState('');

  function getTodoLists() {
    getTodos().then((res) => setTodoLists(res));
  }

  useEffect(() => {
    getTodoLists();
  }, [todoLists]);

  const todoHandler = (event) => {
    setTodo(event.currentTarget.value);
  };
  async function onSubmit(event) {
    event.preventDefault();
    const result = window.confirm('등록하시겠습니까?');
    if (result) {
      addTodo(todo);
      getTodoLists();
      setTodo('');
    }
  }

  const TodoLists = todoLists.map((todoList) => {
    return <TodoDetail todoList={todoList} />;
  });

  return (
    <div>
      <GlobalStyle2 />
      <Header />
      <S.GetBlogAllTable>
        <S.GetBlogAllTableLine />
        {TodoLists}
        <S.GetBlogAllTr>
          <td>
            <form onSubmit={onSubmit}>
              <S.PostCommentInput
                value={todo}
                type="text"
                placeholder="내용을 입력하세요."
                onChange={todoHandler}
              />
              <S.PostBlogBtn>등록하기</S.PostBlogBtn>
            </form>
          </td>
        </S.GetBlogAllTr>
      </S.GetBlogAllTable>
    </div>
  );
}

export default Todo;
