import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TbLogout } from 'react-icons/tb';
import { getTodos, createTodo } from '../../apis/todo';
import TodoItem from './TodoItem';
import * as S from './styles';

function Todo() {
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState([]);
  const todoInputRef = useRef(null);

  const TodoSubmitBtnHandler = (e) => {
    e.preventDefault();
    if (!todoInputRef.current?.value) return;
    const newTodo = {
      todo: todoInputRef.current?.value,
    };

    todoInputRef.current.value = null;

    createTodo(newTodo).then((res) => {
      setTodoList((prev) => [...prev, res.data]);
    });
  };

  const handleLogout = () => {
    localStorage.clear();
    return navigate('/');
  };

  useEffect(() => {
    getTodos().then((data) => {
      if (data) setTodoList(data);
    });
  });

  return (
    <S.TodoContainer>
      <S.TodoHeader>
        <S.LogoutDiv onClick={handleLogout}>
          로그아웃
          <TbLogout />
        </S.LogoutDiv>
        <S.TodoTitle>ToDo List</S.TodoTitle>
      </S.TodoHeader>
      <S.TodoInputContainer>
        <S.TodoInput placeholder="할 일을 입력하세요." ref={todoInputRef} />
        <S.TodoButton onClick={TodoSubmitBtnHandler}>Add</S.TodoButton>
      </S.TodoInputContainer>
      <S.TodoList>
        {todoList?.map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            todoItem={todoItem}
            setTodoList={setTodoList}
          />
        ))}
      </S.TodoList>
    </S.TodoContainer>
  );
}

export default Todo;
