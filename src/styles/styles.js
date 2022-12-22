import styled from 'styled-components';
import { inputColors, transparent } from './styleConstants';

export const SignForm = styled.form`
  padding: 80px;
  & .buttons {
    text-align: center;
    margin-top: 25px;
  }
`;

export const FormHeader = styled.h2`
  text-align: center;
`;

export const CreateInput = styled.input`
  display: block;
  font-size: 18px;
  width: 250px;
  margin: 10px auto;
  padding: 16px 12px;
  border-radius: 12px;
  border: none;
  outline: none;
  background-color: ${inputColors.normal};
  font-size: 12px;
  color: black;
  transition: all 0.5s;
  &:focus {
    color: white;
    background-color: ${inputColors.onFocused};
  }
`;

export const Tip = styled.div`
  height: 12px;
  text-align: center;
  font-size: 12px;
`;

export const Button = styled.button`
  padding: 6px;
  margin: 2.5px;
  border: none;
  border-radius: 6px;
  color: ${({ isActive }) => (isActive ? 'white' : 'grey')};
  background-color: ${({ isActive }) =>
    isActive ? inputColors.onFocused : transparent};
  cursor: pointer;
  transition: all 1s;
  &:hover {
    background-color: ${({ isActive }) =>
      isActive ? inputColors.normal : transparent};
  }
`;
