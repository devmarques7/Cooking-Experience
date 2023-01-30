import React from 'react';
import ReactDOM from 'react-dom/client';

import AppProvider from './context';

import Home from './pages/home';
import Carrosel from './pages/carrosel';
import Footer from './components/footer';
import LandingPage from './pages/landingPage';

import GloblaStyled from './styles/Global';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppProvider>
    <GloblaStyled />
    <LandingPage />
    <Home />
    <Carrosel />
    <Footer />
  </AppProvider>
);
