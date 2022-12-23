import * as S from '../styled';

function ItemList({
  todoList,
  handleCheckedList,
  toggleUpdateInputBox,
  handleUpdateInput,
  updateToDo,
  cancelUpdateTodo,
  deleteTodo,
}) {
  return (
    <S.ItemListWrap>
      <S.ItemUl>
        {todoList?.map((list) => (
          <S.ItemLi data-index={list.id} key={list.id}>
            <S.CheckBoxWrap>
              <input
                data-index={list.id}
                type="checkbox"
                onChange={handleCheckedList}
                // checked={list.isCompleted ? true : false}
              />
            </S.CheckBoxWrap>
            <S.TodoListItem
              data-index={list.id}
              todoList={todoList}
              style={{ display: list.modify ? 'none' : 'inline-block' }}
            >
              <S.Task
                style={{
                  textDecoration: list.isCompleted ? 'line-through' : 'none',
                  color: list.isCompleted ? '#afafaf' : '#000',
                }}
              >
                {list.todo}
              </S.Task>
              <S.UpdateButton
                data-index={list.id}
                onClick={() => {
                  toggleUpdateInputBox(list);
                }}
              >
                수정
              </S.UpdateButton>
            </S.TodoListItem>
            <S.UpdateInputBox
              data-index={list.id}
              style={{
                display: list.modify ? 'inline-block' : 'none',
              }}
            >
              <S.UpdateInput
                Value={list.todo}
                defaultValue={list.todo}
                onChange={handleUpdateInput}
              />
              <S.SubmitButton data-index={list.id} onClick={updateToDo}>
                완료
              </S.SubmitButton>
              <S.CancelButton data-index={list.id} onClick={cancelUpdateTodo}>
                취소
              </S.CancelButton>
            </S.UpdateInputBox>
            <S.DeleteButton data-index={list.id} onClick={deleteTodo}>
              삭제
            </S.DeleteButton>
          </S.ItemLi>
        ))}
      </S.ItemUl>
    </S.ItemListWrap>
  );
}

export default ItemList;
