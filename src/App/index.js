import React from 'react';
import { ThemeProvider } from 'styled-components';
import Footer from '../shared/components/Footer';
import Header from '../shared/components/Header';
import RouteHandler from './Routes';
import { theme, Normalize, GlobalStyle } from '../style';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Header />
      <RouteHandler />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
