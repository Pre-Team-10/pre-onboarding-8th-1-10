import { createGlobalStyle } from 'styled-components';

export const GlobalStyle2 = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    height: 100vh;
  }
  
  input, textarea { 
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }
  
  input {
  border: none;
  &:focus {
    outline: none;
  }
}
  
  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
