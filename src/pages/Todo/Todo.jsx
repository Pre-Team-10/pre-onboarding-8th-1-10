import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import { GlobalStyle2 } from '../../styles/GlobalStyle2';
import * as S from './styled';
import TodoDetail from '../../components/TodoDetail';

function Todo() {
  axios.defaults.baseURL = 'https://pre-onboarding-selection-task.shop';
  const [todoLists, setTodoLists] = useState([]);
  const [todo, setTodo] = useState('');

  async function getTodoLists() {
    try {
      axios.defaults.headers.common['Authorization'] = '';
      const JWTTOEKN = localStorage.getItem('ACCESS_TOKEN');
      axios.defaults.headers.common['Authorization'] = `Bearer ${JWTTOEKN}`;
      const res = await axios.get('/todos', {
        withCredentials: false,
      });
      console.log(res.data);
      setTodoLists(res.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
  useEffect(() => {
    getTodoLists();
  }, []);

  const todoHandler = (event) => {
    setTodo(event.currentTarget.value);
  };
  async function onSubmit(event) {
    event.preventDefault();
    const result = window.confirm('등록하시겠습니까?');
    if (result) {
      try {
        axios.defaults.headers.common['Authorization'] = '';
        const JWTTOEKN = localStorage.getItem('ACCESS_TOKEN');
        axios.defaults.headers.common['Authorization'] = `Bearer ${JWTTOEKN}`;
        const res = await axios.post(
          '/todos',
          { todo },
          {
            withCredentials: false,
          },
        );
        console.log(res.data);
        getTodoLists();
        setTodo('');
      } catch (error) {
        console.log(error.response.data.message);
      }
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
