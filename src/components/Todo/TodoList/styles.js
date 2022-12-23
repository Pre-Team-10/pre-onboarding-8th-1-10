import styled from 'styled-components';

export const Container = styled.div`
  width: 25rem;
  height: 23rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow-y: scroll;
`;

export const TodoItem = styled.div`
  width: 18rem;
  border: 1px solid #e6e6e6;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);

  > .todo-text {
    max-width: 13rem;
    font-size: 0.8rem;
    color: #8e8e8e;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    > .success-icon {
      width: 1.5rem;
      height: 1.5rem;
      color: #3ec061;
    }
    > .doing-icon {
      width: 1.5rem;
      height: 1.5rem;
      color: #ff6950;
    }
  }
  > .todo-icons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    > .edit-icon {
      width: 1.5rem;
      height: 1.5rem;
      color: #8e8e8e;
      cursor: pointer;
      transition-duration: 150ms;
      transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
      &:hover {
        color: #262626;
      }
    }
    > .delete-icon {
      width: 1.5rem;
      height: 1.5rem;
      color: #8e8e8e;
      cursor: pointer;
      transition-duration: 150ms;
      transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
      &:hover {
        color: #ff6950;
      }
    }
  }
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const Input = styled.input`
  width: 11rem;
  border: none;
  border-radius: 0.5rem;
  outline: none;
  font-size: 0.8rem;
  color: #8e8e8e;
  font-weight: 600;
  padding: 0.5rem;
`;

export const CheckBox = styled.input`
  width: 1.3rem;
  height: 1.3rem;
  border: 1px solid #e6e6e6;
  border-radius: 0.25rem;
  margin-right: 0.5rem;
`;

export const EditContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;

export const Text = styled.div`
  margin-top: 8rem;
  font-size: 1.5rem;
  color: #888;
`;

export const EditDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: 0.3rem;
  gap: 0.3rem;
`;

export const EditBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.2rem;
  width: 2rem;
  height: 1.5rem;
  border: 1px solid #e6e6e6;
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: #888;
  cursor: pointer;
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  &:hover {
    background-color: #c1dad4;
    color: white;
  }
`;

export const DeleteBtn = styled.button`
  width: 2rem;
  height: 1.5rem;
  border: 1px solid #e6e6e6;
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: #888;
  cursor: pointer;
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  &:hover {
    background-color: #ff8675;
    color: white;
  }
`;
