import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import Routers from './routers';
import GloblaStyled from './styles/Global';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <GloblaStyled />
    <Routers />
  </BrowserRouter>
);
