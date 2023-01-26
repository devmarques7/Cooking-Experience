import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';

import LandingPage from '../pages/landingPage';

export default function RouterMain(): JSX.Element {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <LandingPage />
            <Home></Home>
          </>
        }
      />
    </Routes>
  );
}
