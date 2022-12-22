import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Auth } from './pages';
import theme from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Auth />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
