import { useState } from 'react';
import {
  FaRegCircle,
  FaRegCheckCircle,
  FaPen,
  FaTrash,
  FaCheck,
  FaTimes,
} from 'react-icons/fa';
import Input from '../Input';
import * as S from './styles';
import { getTodos, removeTodo, updateTodo } from '../../apis/todo';

function TodoItem({ id, todo, isCompleted, setTodos }) {
  const [value, setValue] = useState(todo);
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(true);
    setValue(todo);
  };

  const handleUpdate = async () => {
    await updateTodo({ id, value, isCompleted });
    const getResponse = await getTodos();
    setTodos(() => getResponse);
    setIsEdit(() => false);
  };

  const handleDelete = async () => {
    await removeTodo(id);
    const getResponse = await getTodos();
    setTodos(() => getResponse);
  };

  const handleCheck = async () => {
    const isChecked = !isCompleted;
    await updateTodo({ id, value, isChecked });
    const getResponse = await getTodos();
    setTodos(() => getResponse);
  };

  return (
    <S.TodoItemContainer>
      <S.IconContainer>
        {isCompleted ? (
          <FaRegCheckCircle onClick={handleCheck} />
        ) : (
          <FaRegCircle onClick={handleCheck} />
        )}
      </S.IconContainer>
      {isEdit ? (
        <Input onChange={(e) => setValue(e.target.value)} value={value} />
      ) : (
        <S.Content isCompleted={isCompleted}>{todo}</S.Content>
      )}
      <S.IconContainer>
        {isEdit ? (
          <FaCheck onClick={handleUpdate} />
        ) : (
          <FaPen onClick={handleEdit} />
        )}
      </S.IconContainer>
      <S.IconContainer>
        {isEdit ? (
          <FaTimes onClick={() => setIsEdit(false)} />
        ) : (
          <FaTrash onClick={handleDelete} />
        )}
      </S.IconContainer>
    </S.TodoItemContainer>
  );
}

export default TodoItem;
