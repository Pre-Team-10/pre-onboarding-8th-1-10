import styled from 'styled-components';

export const TodoItemLayout = styled.li`
  border: 2px solid ${(props) => props.theme.color.border};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  padding: 1rem;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
`;

export const OnEditWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
`;

export const TaskInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 30px;
`;

export const TaskInfoText = styled.p`
  padding: 10px 30px;
  width: 200px;
`;

export const FunctionBtnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    color: blue;
    font-weight: bold;
  }
`;
