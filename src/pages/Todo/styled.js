import styled from 'styled-components';

export const TodoSection = styled.section`
  width: 100%;
`;

export const Titlewrap = styled.div`
  width: 500px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  margin: 100px auto 70px;
  font-size: 51px;
  text-align: center;
`;

export const LogoutBox = styled.div`
  width: 522px;
  margin: 0 auto;
  text-align: right;
`;

export const LogoutButton = styled.button`
  all: unset;
  display: inline-block;

  .logoutBtn {
    font-size: 27px;
  }
`;

export const TodoInputForm = styled.form`
  width: 522px;
  margin: 20px auto 0;
  padding: 20px 10px;
  border: 1px solid #aaa;
  border-bottom: 0;
  background-color: #eee;
`;

export const TodoInput = styled.input`
  width: calc(100% - 40px);
  margin: 0 auto;
  padding: 12px 10px 9.5px;
  font-size: 17px;
  line-height: 1;
  border: 1px solid #ddd;
  border-right: 0;
  box-sizing: border-box;
`;

export const TodoInputButton = styled.button`
  all: unset;
  padding: 10.5px 10px;
  border: 1px solid #aaa;
  background-color: #2690f9;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
`;

export const ItemListWrap = styled.div`
  width: 522px;
  margin: 0 auto;
  background-color: #eee;
`;

export const ItemUl = styled.ul`
  margin: 0px auto 30px;
  padding: 0 10px;
  border: 1px solid #aaa;
  border-top: 0;
  box-sizing: border-box;
`;

export const ItemLi = styled.li`
  width: 100%;
  padding: 10px;
  list-style: none;
  border: 1px solid #eee;
  background-color: #fefefe;
  box-sizing: border-box;

  &:last-child {
    margin-bottom: 20px;
  }
`;

export const CheckBoxWrap = styled.div`
  display: inline-block;
  width: 21px;
  height: 20px;
`;

export const Task = styled.span`
  display: inline-block;
  width: 340px;
  padding: 0 10px;
  font-size: 17px;
  line-height: 2.4;
  background-color: #fefefe;
`;

export const UpdateButton = styled.span`
  display: inline-block;
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  all: unset;
  text-align: center;
  box-sizing: border-box;
  padding: 10px;
  cursor: pointer;
`;

export const TodoListItem = styled.div`
  display: inline-block;
`;

export const UpdateInputBox = styled.div`
  display: none;
  width: 407.5px;
  padding: 0px;
  line-height: 1.15;
  box-sizing: border-box;
`;

export const UpdateInput = styled.input`
  display: inline-block;
  width: 307px;
  margin-right: 5px;
  padding: 0 10px;
  font-size: 17px;
  line-height: 2.4;
  border: 0;
  box-sizing: border-box;
  background-color: #eaeaea;
`;

export const SubmitButton = styled.button`
  all: unset;
  text-align: center;
  box-sizing: border-box;
  padding: 10px;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  all: unset;
  text-align: center;
  box-sizing: border-box;
  padding: 10px;
  cursor: pointer;
`;
