import styled, { css } from 'styled-components';
import { Link as UnstyledLink } from 'react-router-dom';
import { HashLink as UnstyledHashLink } from 'react-router-hash-link';
import { ReactComponent as UnstyledLogo } from './logo.svg';

export const Container = styled.header`
  width: 100%;
  height: 100px;
  margin: 0 auto;
  padding: 0 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LinkStyles = css`
  margin-left: 26px;
  text-decoration: none;
  color: ${(props) => props.theme.color.midDark};
  font-size: 1.6rem;
`;

export const Link = styled(UnstyledLink)`
  ${LinkStyles}
`;
export const Hash = styled(UnstyledHashLink)`
  ${LinkStyles}
`;

export const Logo = styled(UnstyledLogo)`
  margin-top: 8px;
`;
