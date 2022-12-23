import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoLogoutSVG } from '../../assets';
import { TodoInput, TodoList } from '../../components';
import { removeAccessToken } from '../../utils';
import { showSuccessToast } from '../../utils/toast';
import * as S from './styles';

function Todo() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState(undefined);

  const handleLogout = () => {
    removeAccessToken();
    showSuccessToast('로그아웃 되었습니다.');
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
