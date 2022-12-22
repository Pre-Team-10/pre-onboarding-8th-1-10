import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import TodoPage from './pages/TodoPage';
import { GlobalStyle } from './styles/globalStyles';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/todo',
    element: <TodoPage />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <GlobalStyle />
    </div>
  );
}

export default App;
