import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoItem } from '../../components';
import { addTodo, getTodos } from '../../apis/todo';
import { getAccessToken, showWarningToast } from '../../utils';
import * as S from './styles';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const renderTodos = async () => {
      if (!getAccessToken()) {
        navigate('/');
      }

      if (getAccessToken()) {
        const getResponse = await getTodos();
        setTodos(() => getResponse);
      }
    };
    renderTodos();
  }, []);

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleClick = async () => {
    if (!newTodo.length) {
      showWarningToast('할 일을 입력하세요.');
    }

    if (newTodo.length) {
      await addTodo(newTodo);
      const data = await getTodos();
      setTodos(() => data);
    }
    setNewTodo('');
  };

  return (
    <S.TodoContainer>
      <S.TodoTitle>ToDo List</S.TodoTitle>
      <S.TodoInputContainer>
        <S.TodoInput
          placeholder="할 일을 입력하세요."
          value={newTodo}
          onChange={handleChange}
        />
        <S.TodoButton onClick={handleClick}>Add</S.TodoButton>
      </S.TodoInputContainer>
      <S.TodoList>
        {todos &&
          todos.map((todo) => (
            <TodoItem
              id={todo.id}
              key={todo.id}
              todo={todo.todo}
              isCompleted={todo.isCompleted}
              setTodos={setTodos}
            />
          ))}
      </S.TodoList>
    </S.TodoContainer>
  );
}

export default Todo;
