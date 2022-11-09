import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../../../assests/logo.svg';

const HeaderStyles = styled.header`
  display: flex;
`;

const NavList = styled.ul`
  display: flex;
`;
const NavListItem = styled.li`
  display: flex;
  font-weight: 400;
  font-size: 1.6rem;
  color: #636363;
`;

function Header() {
  return (
    <HeaderStyles>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <NavList>
        <NavListItem>Search</NavListItem>
        <NavListItem>How it works</NavListItem>
        <NavListItem>About</NavListItem>
      </NavList>
    </HeaderStyles>
  );
}

export default Header;
