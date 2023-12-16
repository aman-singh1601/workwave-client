import React from 'react'
import VerticalLayout from './components/VerticalLayout';


import "./assets/scss/theme.scss";
import { AuthProtectedRoutes, publicRoutes } from './routes';
import NonAuthLayout from './components/NonAuthLayout';
import { Route, Routes } from 'react-router-dom';
import AuthMiddleware from './routes/route';

function App() {
  return (
    <React.Fragment>
      <Routes>
        {publicRoutes.map((route, idx) => (
          <Route
           key={idx}
           path = {route.path}
           element = {
            <NonAuthLayout>
              {route.component}
            </NonAuthLayout>
           }
           exact = {true}
           />
        ))}
        {AuthProtectedRoutes.map((route, idx) => (
          <Route
           key={idx}
           path = {route.path}
           element = {
            <AuthMiddleware>
              <VerticalLayout>
                {route.component}
              </VerticalLayout>
            </AuthMiddleware>
           }
           exact = {true}
           />
        ))}
      </Routes>

    </React.Fragment>
  );
}

export default App;
