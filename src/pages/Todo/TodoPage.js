import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil, faCheck } from '@fortawesome/free-solid-svg-icons';
import { TodoSection, Button, TodoProducer, TodoList } from './styled';
import { getTodo, addTodo, deleteTodo, reviseTodo } from '../../apis/index';

function TodoPage() {
  const [Todo, setTodo] = useState([]);
  useEffect(() => {
    getTodo().then((res) => {
      setTodo(res.data);
    });
  }, []);

  const [myText, setMyText] = useState('');
  const addClick = () => {
    addTodo(myText).then(() => {
      getTodo().then((res) => {
        setTodo(res.data);
      });
    });
  };
  const reviseClick = (list) => {
    const box = { ...list };
    box.todo = '수정한글';
    reviseTodo(box).then(() => {
      getTodo().then((res) => {
        setTodo(res.data);
      });
    });
  };
  const removeClick = (list) => {
    const todoID = list.id;
    deleteTodo(todoID).then(() => {
      getTodo().then((res) => {
        setTodo(res.data);
      });
    });
  };
  return (
    <TodoSection>
      <h1>To-Do List</h1>
      <TodoProducer>
        <input
          type="text"
          value={myText}
          placeholder="+ Add New Todo..."
          onInput={(e) => {
            setMyText(e.target.value);
          }}
        />
        <Button
          type="button"
          onClick={() => {
            addClick();
          }}
        >
          Add
        </Button>
      </TodoProducer>
      <TodoList>
        {Todo.map((list, index) => {
          return (
            <div>
              <FontAwesomeIcon
                icon={faCheck}
                className="checkIcon"
                onClick={() => {
                  reviseClick(list);
                }}
              />
              <p>{list.todo}</p>
              <FontAwesomeIcon
                icon={faPencil}
                className="pencilIcon"
                onClick={() => {
                  reviseClick(list);
                }}
              />
              <FontAwesomeIcon
                icon={faTrash}
                className="trashIcon"
                onClick={() => {
                  removeClick(list);
                }}
              />
            </div>
          );
        })}
      </TodoList>
    </TodoSection>
  );
}

export default TodoPage;
