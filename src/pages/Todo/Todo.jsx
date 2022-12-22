import TodoItem from '../../components/TodoItem';
import {
  CreateTodoContainer,
  CreateTodoWrapper,
  Title,
  CreateTodoInput,
  Button,
} from './styles';

function Todo() {
  return (
    <CreateTodoContainer>
      <Title>할일 목록</Title>
      <CreateTodoWrapper>
        <CreateTodoInput type="text" />
        <Button>추가</Button>
      </CreateTodoWrapper>
      <TodoItem />
    </CreateTodoContainer>
  );
}

export default Todo;
