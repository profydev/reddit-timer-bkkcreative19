import React from 'react';

import { Link } from 'react-router-dom';

import { defaultSubReddit } from '../../constants';
import * as S from './Header.style';

function Header() {
  return (
    <S.Container>
      <Link to="/">
        <S.Logo />
      </Link>
      <nav>
        <S.Link to={`/search/${defaultSubReddit}`}>Search</S.Link>
        <S.Hash to="/#how-it-works">How it works</S.Hash>
        <S.Hash to="/#about">About</S.Hash>
      </nav>
    </S.Container>
  );
}

export default Header;
