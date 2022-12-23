import styled from 'styled-components';

export const TodoContainer = styled.div`
  width: 370px;
  height: 40px;
  margin: 0 auto;
  border: 1px solid none;
  border-radius: 10px;
  background-color: white;
  margin-bottom: 20px;
  display: flex;

  p {
    width: 300px;
    height: 30px;
    margin-top: 5px;
  }

  .Done {
    color: #8977ad;
    padding: 10px;
    font-size: 20px;
  }
  .Yet {
    color: #8977ad;
    padding: 10px;
    font-size: 20px;
  }

  div {
    display: flex;
    .icon {
      font-size: 18px;
      padding: 9px;
      margin-left: -13px;
      margin-right: 5px;
      cursor: pointer;
    }
  }

  input {
    border: 1px solid gray;
    border-radius: 10px;
    width: 230px;
    margin-left: 10px;
    margin-right: 15px;
  }
`;

export const ReviseBTN = styled.button`
   {
    background-color: #00498c;
    color: white;
    border-radius: 5px;
    width: 50px;
  }
`;
