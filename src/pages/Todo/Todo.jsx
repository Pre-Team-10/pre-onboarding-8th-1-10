import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GrLogout } from 'react-icons/gr';
import { getAccessToken } from '../../utils';
import { getTodos, removeTodo, addTodo, updateTodo } from '../../apis/todo';
import TodoInputWrap from './components/TodoInputWrap';
import ItemList from './components/ItemList';
import * as S from './styled';

function Todo() {
  const navigate = useNavigate();
  const [todoInputContent, setTodoInputContent] = useState('');
  const [todoUpdateContent, setTodoUpdateContent] = useState('');
  const [todoUpdateChecked, setTodoUpdateChecked] = useState(false);
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    if (!getAccessToken) {
      navigate(`/`);
      return;
    }

    /* Promise getData */
    getTodos().then((data) => {
      setTodoList([...data].map((list) => ({ ...list, modify: false })));
    });
  }, []);

  const handleInput = (e) => {
    setTodoInputContent(e.target.value);
  };

  const handleUpdateInput = (e) => {
    setTodoUpdateContent(e.target.value);
  };

  const createTodo = (e) => {
    e.preventDefault();

    if (!todoInputContent.length) {
      alert('할 일을 추가해주세요.');
    } else {
      addTodo(todoInputContent)
        .then(() => getTodos())
        .then((data) =>
          getTodos().then((data) => {
            if (data) setTodoList(data);
          }),
        );
    }

    setTodoInputContent('');
  };

  const deleteTodo = (e) => {
    const id = e.target.dataset.index;

    removeTodo(id);
  };

  const updateToDo = (e) => {
    e.preventDefault();

    const id = e.target.dataset.index;

    updateTodo(id, todoUpdateContent, todoUpdateChecked);
    getTodos().then((data) => {
      if (data) setTodoList(data);
    });
  };

  const toggleUpdateInputBox = (e) => {
    setTodoList((todos) =>
      todos.map((todo) =>
        todo.id === e.id ? { ...todo, modify: true } : todo,
      ),
    );
  };

  const cancelUpdateTodo = (e) => {
    setTodoList((todos) =>
      todos.map((todo) =>
        todo.id === e.id ? { ...todo, modify: false } : todo,
      ),
    );

    setTodoUpdateContent(todoList.todo);

    getTodos().then((data) => {
      if (data) setTodoList(data);
    });
  };

  const logout = () => {
    localStorage.removeItem('ACCESS_TOKEN');
    navigate(`/`);
  };

  return (
    <S.TodoSection>
      <S.Titlewrap>
        <S.Title>To Do List</S.Title>
      </S.Titlewrap>
      <S.LogoutBox>
        <S.LogoutButton>
          <GrLogout className="logoutBtn" onClick={logout} title="로그아웃" />
        </S.LogoutButton>
      </S.LogoutBox>
      <TodoInputWrap
        setTodoInputContent={setTodoInputContent}
        todoInputContent={todoInputContent}
        handleInput={handleInput}
        createTodo={createTodo}
      />
      <ItemList
        todoList={todoList}
        // handleCheckedList={handleCheckedList}
        toggleUpdateInputBox={toggleUpdateInputBox}
        handleUpdateInput={handleUpdateInput}
        setTodoUpdateContent={setTodoUpdateContent}
        updateToDo={updateToDo}
        cancelUpdateTodo={cancelUpdateTodo}
        deleteTodo={deleteTodo}
      />
    </S.TodoSection>
  );
}

export default Todo;
