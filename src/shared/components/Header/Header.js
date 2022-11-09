import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../../../assests/logo.svg';

const HeaderStyles = styled.header`
  display: flex;
  padding: 3.2em 8em;
  align-items: center;
  justify-content: space-between;
`;

const NavList = styled.ul`
  display: flex;
  gap: 2.5em;
`;
const NavListItem = styled.li`
  display: flex;
  font-weight: 400;
  font-size: 1.6rem;
  color: #636363;
  cursor: pointer
`;

function Header() {
  return (
    <HeaderStyles>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <NavList>
        <NavListItem><Link to="/search/javascript">Search</Link></NavListItem>
        <NavListItem><Link to="#how-it-works">How it works</Link></NavListItem>
        <NavListItem><Link to="#about">About</Link></NavListItem>
      </NavList>
    </HeaderStyles>
  );
}

export default Header;
