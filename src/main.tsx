import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import AppProvider from './context/carosselPage';

import Routers from './routers';
import GloblaStyled from './styles/Global';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <AppProvider>
      <GloblaStyled />
      <Routers />
    </AppProvider>
  </BrowserRouter>
);
