import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteTodo, fetchTodos, modifyTodo, postTodo } from '../../apis/todos';
import TodoElement from '../../components/TodoPage/TodoElement';
import { deleteAccessToken } from '../../utils';
import { SignOutBTN, Container, Form } from './styled';

function Todo() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [targetTodoId, setTargetTodoId] = useState(-1);
  const createTodoInputRef = useRef(null);
  const initializeUserInfo = () => {
    deleteAccessToken();
    navigate('/');
  };

  const initializeUserInfo = useCallback(() => {
    deleteAccessToken();
    navigate('/');
  }, []);

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

  const handleOnDeleteTodo = useCallback(
    async (todoId) => {
      const isDeleteSuccessful = await deleteTodo(todoId);
      if (isDeleteSuccessful) {
        setTodos((todos) => {
          return todos.filter((todo) => todo.id !== todoId);
        });
      } else initializeUserInfo();
    },
    [initializeUserInfo],
  );

  const toggleModifyInputBar = useCallback((todoId) => {
    setTargetTodoId((targetTodoId) => {
      if (targetTodoId === todoId) return -1;
      return todoId;
    });
  }, []);
  
  const handleOnModifyTodo = useCallback(
    async (
      targetTodoId,
      modifiedTodoContent,
      isCompleted,
      willCompleteChange,
    ) => {
      if (modifiedTodoContent) {
        const modifiedTodo = await modifyTodo(
          targetTodoId,
          modifiedTodoContent,
          isCompleted,
          willCompleteChange,
        );
        if (modifiedTodo) {
          setTodos((todos) => {
            todos.forEach((todo, index) => {
              if (todo.id === targetTodoId) {
                todos.splice(index, 1, modifiedTodo);
                return false;
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
      if (fetchedTodos) setTodos(fetchedTodos.reverse());
      else initializeUserInfo();
    })();

  }, []);

  return (
    <Container>
      <SignOutBTN type="button" onClick={initializeUserInfo}>
        sign out
      </SignOutBTN>
      <Form onSubmit={handleOnNewTodoSubmit}>
        <h2>Write down what To Do</h2>
        <div>
          <input ref={createTodoInputRef} />
          <button type="submit">enter</button>
        </div>
      </Form>
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
    </Container>
  );
}

export default Todo;
