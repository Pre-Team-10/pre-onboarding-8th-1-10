import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteTodo, fetchTodos, modifyTodo, postTodo } from '../../apis/todos';
import { Input } from '../../components/Input/styles';
import TodoElement from '../../components/TodoPage/TodoElement';
import { deleteAccessToken } from '../../utils';
import * as S from '../Auth/styles';

function Todo() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [targetTodoId, setTargetTodoId] = useState(-1);
  const createTodoInputRef = useRef(null);
  const initializeUserInfo = () => {
    deleteAccessToken();
    navigate('/');
  };
  const handleOnNewTodoSubmit = async (e) => {
    e.preventDefault();
    const newTodoContent = createTodoInputRef.current.value;
    if (newTodoContent) {
      const newTodo = await postTodo(newTodoContent);
      if (newTodo) {
        setTodos([newTodo, ...todos]);
        createTodoInputRef.current.value = '';
      } else initializeUserInfo();
    }
  };
  const handleOnDeleteTodo = useCallback(async (todoId) => {
    const isDeleteSuccessful = await deleteTodo(todoId);
    if (isDeleteSuccessful) {
      setTodos((todos) => {
        return todos.filter((todo) => todo.id !== todoId);
      });
    } else initializeUserInfo();
  }, []);
  const toggleModifyInputBar = useCallback((todoId) => {
    setTargetTodoId((targetTodoId) => {
      if (targetTodoId === todoId) return -1;
      return todoId;
    });
  }, []);
  const handleOnModifyTodo = useCallback(
    async (targetTodoId, modifiedTodoContent) => {
      if (modifiedTodoContent) {
        const modifiedTodo = await modifyTodo(
          modifiedTodoContent,
          targetTodoId,
        );
        if (modifiedTodo) {
          setTodos((todos) => {
            todos.forEach((todo, index) => {
              if (todo.id === targetTodoId) {
                todos.splice(index, 1, modifiedTodo);
              }
            });
            return [...todos];
          });
          setTargetTodoId(-1);
        } else initializeUserInfo();
      }
    },
    [],
  );
  useEffect(() => {
    (async () => {
      const fetchedTodos = await fetchTodos();
      if (fetchedTodos) setTodos(fetchedTodos);
      else initializeUserInfo();
    })();
  }, []);
  return (
    <div>
      <form onSubmit={handleOnNewTodoSubmit}>
        <h2>Write down what To Do</h2>
        <input ref={createTodoInputRef} />
        <button type="submit">enter</button>
      </form>
      {todos.map((todo) => (
        <TodoElement
          key={todo.id}
          todo={todo}
          handleOnDeleteTodo={handleOnDeleteTodo}
          handleOnModifyTodo={handleOnModifyTodo}
          toggleModifyInputBar={toggleModifyInputBar}
          isTargetTodoId={targetTodoId === todo.id}
        />
      ))}
    </div>
  );
}

export default Todo;
