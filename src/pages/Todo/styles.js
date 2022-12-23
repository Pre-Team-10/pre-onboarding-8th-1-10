import styled, { css } from 'styled-components';

export const CreateTodoContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 200px;
`;
export const CreateTodoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: space-around;
`;
export const Title = styled.h1`
  text-align: center;
`;
export const CreateTodoInput = styled.input`
  width: 400px;
  height: 50px;
  font-size: ${(props) => props.theme.fontSize.middle};
  padding: 5px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  color: ${(props) => props.theme.color.black};
  :focus {
    box-shadow: 0 0 5px ${(props) => props.theme.color.black};
  }
`;
export const Button = styled.button`
  width: 50px;
  height: 50px;
  padding: 10px;
  margin-bottom: 30px;
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.color.white};
  background-color: black;
  border: none;
  cursor: pointer;
`;
