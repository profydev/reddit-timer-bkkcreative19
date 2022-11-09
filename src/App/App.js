import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import RouteHandler from './Routes';
import { GlobalStyle, theme, Normalize } from '../style';
import Header from '../shared/components/Header/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Normalize />
        <GlobalStyle />
        <Header />
        <RouteHandler />
      </Router>

    </ThemeProvider>
  );
}

export default App;
