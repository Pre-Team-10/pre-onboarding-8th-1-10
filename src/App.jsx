import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles';
import Router from './routes/Router';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
