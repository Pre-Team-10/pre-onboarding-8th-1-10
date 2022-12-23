import styled from 'styled-components';

export const Container = styled.div`
  width: 25rem;
  height: fit-content;
  padding-top: 1.5rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Form = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: nowrap;
`;

export const Input = styled.input`
  width: 16rem;
  height: 2.5rem;
  border: 1px solid #e6e6e6;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  padding: 0 0.5rem;
`;

export const Button = styled.button`
  width: 4rem;
  height: 2.65rem;
  border: 1px solid #e6e6e6;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  background-color: #5865f2;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  &:hover {
    background-color: #4752c4;
  }
`;
