import { ImPlus } from 'react-icons/im';
import * as S from '../styled';

function TodoInputWrap({ todoInputContent, handleInput, createTodo }) {
  return (
    <S.TodoInputForm>
      <S.TodoInput
        value={todoInputContent}
        placeholder="할 일을 입력하세요."
        onChange={handleInput}
      />
      <S.TodoInputButton type="submit" onClick={createTodo}>
        <ImPlus />
      </S.TodoInputButton>
    </S.TodoInputForm>
  );
}

export default TodoInputWrap;
