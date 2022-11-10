/* eslint-disable import/no-unresolved */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Footer from '../shared/components/Footer';
import Header from '../shared/components/Header';
import RouteHandler from './Routes';
import { theme, Normalize, GlobalStyle } from '../style';
import * as S from './App.style';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Header />
      <S.ContentContainer><RouteHandler /></S.ContentContainer>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
