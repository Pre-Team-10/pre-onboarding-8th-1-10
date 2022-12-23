import React, { useRef } from 'react';

function TodoElement({
  todo: { id, todo, isCompleted },
  handleOnDeleteTodo,
  handleOnModifyTodo,
  toggleModifyInputBar,
  isTargetTodoId,
}) {
  const modifyTodoInputRef = useRef(null);
  return (
    <div>
      {isTargetTodoId ? (
        <span>
          <input ref={modifyTodoInputRef} defaultValue={todo} />
          <button
            type="button"
            onClick={() =>
              handleOnModifyTodo(id, modifyTodoInputRef.current.value)
            }
          >
            submit
          </button>
          &nbsp;
          <button type="button" onClick={() => toggleModifyInputBar(id)}>
            cancel
          </button>
        </span>
      ) : (
        <div>
          <span>{todo}</span>
          &emsp;
          <span>
            <button type="button" onClick={() => toggleModifyInputBar(id)}>
              modify
            </button>
            &nbsp;
            <button type="button" onClick={() => handleOnDeleteTodo(id)}>
              delete
            </button>
          </span>
        </div>
      )}
    </div>
  );
}

export default React.memo(TodoElement);
