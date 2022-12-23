import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  border: 1px solid #e6e6e6;
  border-radius: 0.3rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  gap: 0.5rem;
  top: 1rem;
  left: 1rem;
  cursor: pointer;
  font-size: 0.8rem;
  color: #8e8e8e;
  font-weight: 600;
  &:hover {
    color: #262626;
  }

  > .logout-icon {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }
`;
