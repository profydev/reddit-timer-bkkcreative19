/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Link as UnstyledLink } from 'react-router-dom';
import { ReactComponent as UnstyledLogo } from './sign.svg';

export const Container = styled.footer`
    width: 100%;
    padding: 0 250px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Link = styled(UnstyledLink)`

  text-decoration: none;
  color: ${(props) => props.theme.color.midDark};
  font-size: 1.6rem;
`;

export const ExternalLink = styled.a`
    text-decoration: none;
  color: ${(props) => props.theme.color.midDark};
  font-size: 1.6rem;
`;

export const Logo = styled(UnstyledLogo)`
    cursor: pointer;
`;
