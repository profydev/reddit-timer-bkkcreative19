/* eslint-disable brace-style */
import React, { useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';
import * as S from './Header.style';

function Header() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change
  return (
    <S.Container>
      <Link to="/">
        <S.Logo />
      </Link>
      <nav>
        <S.Link to="/search/javascript">Search</S.Link>
        <S.Link to="/#how-it-works">How it works</S.Link>
        <S.Link to="/#about">About</S.Link>
      </nav>
    </S.Container>
  );
}

export default Header;
