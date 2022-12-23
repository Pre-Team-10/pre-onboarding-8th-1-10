import styled, { css } from 'styled-components';

export const TodoItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  margin-bottom: 10px;
`;

export const Content = styled.li`
  color: ${({ theme }) => theme.color.text};
  ${({ isCompleted }) =>
    isCompleted &&
    css`
      color: red;
      text-decoration: line-through;
    `};
  flex-grow: 1;
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 100%;
  > *:hover {
    opacity: 0.5;
  }
`;
