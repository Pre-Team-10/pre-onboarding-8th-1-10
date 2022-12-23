import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faCircle,
  faTrash,
  faPencil,
} from '@fortawesome/free-solid-svg-icons';
import { TodoContainer, ReviseBTN } from './styled';

function TodoElement({
  todo: { id, todo, isCompleted },
  handleOnDeleteTodo,
  handleOnModifyTodo,
  toggleModifyInputBar,
  isTargetTodoId,
}) {
  const modifyTodoInputRef = useRef(null);
  return (
    <TodoContainer>
      {isTargetTodoId ? (
        <>
          <input ref={modifyTodoInputRef} defaultValue={todo} />
          <ReviseBTN
            type="button"
            onClick={() =>
              handleOnModifyTodo(
                id,
                modifyTodoInputRef.current.value,
                isCompleted,
                undefined,
              )
            }
          >
            submit
          </ReviseBTN>
          &nbsp;
          <ReviseBTN type="button" onClick={() => toggleModifyInputBar(id)}>
            cancel
          </ReviseBTN>
        </>
      ) : (
        <TodoContainer>
          <button
            type="button"
            onClick={() => handleOnModifyTodo(id, todo, isCompleted, true)}
          >
            {isCompleted ? (
              <FontAwesomeIcon className="Done" icon={faCircleCheck} />
            ) : (
              <FontAwesomeIcon className="Yet" icon={faCircle} />
            )}
          </button>
          <p>{todo.length > 40 ? `${todo.slice(0, 40)}...` : todo}</p>
          &emsp;
          <div>
            <FontAwesomeIcon
              className="icon"
              icon={faPencil}
              onClick={() => {
                toggleModifyInputBar(id);
              }}
            />
            &nbsp;
            <FontAwesomeIcon
              className="icon"
              icon={faTrash}
              onClick={() => {
                handleOnDeleteTodo(id);
              }}
            />
          </div>
        </TodoContainer>
      )}
    </TodoContainer>
  );
}

export default React.memo(TodoElement);
