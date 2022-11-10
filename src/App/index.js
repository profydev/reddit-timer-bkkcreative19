import React from 'react';
import { ThemeProvider } from 'styled-components';
import Footer from '../shared/components/footer';
import Header from '../shared/components/header';
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
