import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { Auth, Todo } from '../pages';
import { getAccessToken } from '../utils';

const Router = () => {
  const isToken = getAccessToken();

  const routes = useRoutes([
    {
      path: '/',
      element: isToken ? <Navigate replace to="/todo" /> : <Auth />,
    },
    {
      path: '/todo',
      element: isToken ? <Todo /> : <Navigate replace to="/" />,
    },
  ]);
  return routes;
};

export default Router;
