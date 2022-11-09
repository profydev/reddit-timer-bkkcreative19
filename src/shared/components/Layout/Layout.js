import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, Normalize, theme } from '../../../style';
import Header from '../Header';

const Layout = () => (

  <ThemeProvider theme={theme}>
    <Normalize />
    <GlobalStyle />

    <Header />
  </ThemeProvider>
);

export default Layout;
