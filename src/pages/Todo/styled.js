import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  width: 500px;
  height: 600px;
  border: 1px solid lightgrey;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  overflow: scroll;
`;

export const SignOutBTN = styled.div`
  color: white;
  background-color: red;
  border-radius: 10px;
  text-align: center;
  width: 80px;
  height: 30px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 400px;
  cursor: pointer;
`;

export const Form = styled.form`
  text-align: center;
  h2 {
    color: #8977ad;
  }
  div {
    border: 1px solid gray;
    width: 370px;
    margin: 0 auto;
    margin-bottom: 20px;
    border-radius: 10px;
    input {
      border: none;
      padding: 15px;
      width: 300px;
    }
    button {
      background-color: #8977ad;
      color: white;
      padding: 10px;
      font-weight: bold;
      border-radius: 10px;
    }
  }
`;
