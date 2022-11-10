import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Footer.style';

const Footer = () => (
  <S.Container>
    <S.ExternalLink href="https://ooloo.io/employers" target="_blank">profy.dev</S.ExternalLink>
    <Link to="/">
      <S.Logo />
    </Link>
    <S.Link to="/terms">Terms & Privacy</S.Link>
  </S.Container>
);

export default Footer;
