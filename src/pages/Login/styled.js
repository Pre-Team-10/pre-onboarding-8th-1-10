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
  font-size: ${(props) => props.theme.fontSize.middle};
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
export const SignUpBTN = styled.span`
  color: white;
  cursor: pointer:
`;
export const Modal = styled.div`
  display: ${(props) => (props.modal === true ? 'none' : 'block')};
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
`;

export const WhiteModal = styled.div`
  background-color: white;
  width: 400px;
  height: 500px;
  margin: 0 auto;
  margin-top: 7%;
  text-align: center;
  h2 {
    margin-top: 20px;
    margin-bottom: 30px;
    padding: 10px;
    color: #666666;
  }
  input {
    width: 300px;
    padding: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  div {
    display: flex;
    margin: 0 auto;
    width: 330px;
    text-align: initial;
  }
  .xMark {
    font-size: 30px;
    color: gray;
    margin-left: 80%;
    margin-top: 20px;
    cursor: pointer;
    &:hover {
      color: orange;
    }
  }
`;

export const Button = styled.button`
   {
    margin-top: 30px;
    padding: 15px;
    width: 300px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    color: ${(props) => (props.isLoaded === false ? 'lightgray' : 'white')};
    background-color: ${(props) =>
      props.isLoaded === false ? '#765413' : 'orange'};
  }
`;
