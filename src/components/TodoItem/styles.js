import styled from 'styled-components';

export const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
`;
export const TodoItemInput = styled.input`
  width: 300px;
  height: 50px;
  font-size: ${(props) => props.theme.fontSize.middle};
  margin-right: 10px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  color: ${(props) => props.theme.color.primary};
  :focus {
    box-shadow: 0 0 5px ${(props) => props.theme.color.black};
  }
`;
export const Text = styled.div`
  flex: 1;
  font-size: ${(props) => props.theme.fontSize.middle};
  width: 300px;
  color: ${(props) => props.theme.color.black};
`;
export const TodoItemCheckbox = styled.input`
  width: 30px;
  height: 50px;
  margin-right: 10px;
  accent-color: ${(props) => props.theme.color.primary};
`;
export const Button = styled.button`
  width: 50px;
  height: 50px;
  padding: 5px;
  margin: 3px;
  font-size: ${(props) => props.theme.fontSize.small};
  color: white;
  background-color: ${(props) => props.theme.color.black};
  border: none;
  cursor: pointer;
`;
export const DeleteButton = styled.button`
  width: 50px;
  height: 50px;
  padding: 5px;
  margin: 3px;
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.color.white};
  background-color: ${(props) => props.theme.color.error};
  border: none;
  cursor: pointer;
`;
