import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home';



export const routes = [
  {
    path: '/',
    element: <Home />
  },
  // {
  //   path: '/auth',
  //   element: <Auth />
  // }
];

function RootRoute() {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default RootRoute;