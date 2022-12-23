import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import { TodoInput, TodoList } from '../../components';
import { removeAccessToken } from '../../utils';
import { TodoLogoutSVG } from '../../assets';

function Todo() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState(undefined);

  const handleLogout = () => {
    removeAccessToken();
    navigate('/');
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Form onClick={handleLogout}>
          <TodoLogoutSVG />
          Logout
        </S.Form>
        <TodoInput setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </S.Wrapper>
    </S.Container>
  );
}

export default Todo;
