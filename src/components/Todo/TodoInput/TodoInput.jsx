import React, { useState } from 'react';
import * as S from './styles';
import { addTodo } from '../../../apis/todo';

function TodoInput({ setTodos }) {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    if (value) {
      addTodo(value).then((res) => {
        setValue('');
        setTodos((prev) => [...prev, res]);
      });
    } else {
      alert('할 일을 입력해주세요.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <S.Container>
      <S.Title>할일 목록</S.Title>
      <S.Form>
        <S.Input
          onChange={onChange}
          value={value}
          placeholder="할 일을 입력하세요"
          onKeyUp={handleKeyPress}
        />

        <S.Button onClick={handleSubmit}>추가</S.Button>
      </S.Form>
    </S.Container>
  );
}

export default TodoInput;
