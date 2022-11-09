import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent } from './logo.svg';

const HeaderStyles = styled.header`
  display: flex;
  padding: 3.2em 8em;
  align-items: center;
  justify-content: space-between;
`;

const NavList = styled.nav`
  display: flex;
  gap: 2.5em;
`;
const NavListItem = styled(Link)`
  display: flex;
  font-weight: 400;
  font-size: 1.6rem;
  color: #636363;
  cursor: pointer
`;

const Logo = styled(ReactComponent)``;

function Header() {
  return (
    <HeaderStyles as="header">
      <Link to="/">
        <Logo />
      </Link>
      <NavList>
        <NavListItem to="/search/javascript">Search</NavListItem>
        <NavListItem to="#how-it-works">How it works</NavListItem>
        <NavListItem to="#about">About</NavListItem>
      </NavList>
    </HeaderStyles>
  );
}

export default Header;
