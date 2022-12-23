import styled from 'styled-components';

export const TodoSection = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1px;
  background-color: #ffbc40;
  h1 {
    text-align: center;
    color: white;
    margin-top: 50px;
  }
`;

export const Button = styled.button`
  color: white;
  padding: 7px;
  margin-left: 8px;
  background-color: blue;
  border-radius: 5px;
  border: 0px;
  cursor: pointer;
`;

export const TodoProducer = styled.div`
  margin: 0 auto;
  padding: 5px;
  border-radius: 10px;
  width: 350px;
  margin-top: 40px;
  background-color: white;
  input {
    width: 290px;
    padding: 10px;
    border: 0px;
    &:focus {
      outline: none;
    }
  }
`;

export const TodoList = styled.div`
  background-color: white;
  padding: 1px;
  width: 350px;
  border-radius: 10px;
  height: 400px;
  margin: 0 auto;
  margin-top: 30px;
  div {
    display: flex;
    border: 1px solid gray;
    padding: 10px;
    margin: 10px;
  }
`;
