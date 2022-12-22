import styled from 'styled-components';

export const LoginSection = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1px;
  background-color: #ffbc40;
`;

export const LoginWhiteBox = styled.div`
  width: 500px;
  height: 400px;
  background-color: white;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  margin: 0 auto;
  margin-top: 10%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const LoginText = styled.h1`
  text-align: center;
  color: gray;
  margin-top: 50px;
`;
export const Input = styled.input`
  width: 350px;
  padding: 14px;
  border-radius: 5px;
  background-color: #e5f0f9;
  margin: 0 auto;
  border: 1px solid lightgray;
  margin-top: 20px;
`;
export const LoginButton = styled.button`
  width: 350px;
  padding: 12px;
  margin: 0 auto;
  background-color: orange;
  color: white;
  border: 1px solid lightgray;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  font-size: 20px;
  &:hover {
    background-color: orangered;
  }
`;
export const AccountText = styled.p`
  text-align: center;
  margin-top: 20px;
  color: gray;
  span {
    color: orange;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
`;
