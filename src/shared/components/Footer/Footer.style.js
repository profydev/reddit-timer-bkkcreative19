/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import { Link as UnstyledLink } from 'react-router-dom';
import { ReactComponent as UnstyledLogo } from './sign.svg';

export const Container = styled.footer`
  width: 100%; /* tries to take up the complete space */
  max-width: 980px; /* prevents growing larger than 940px */
  height: ${(props) => props.theme.size.footerHeight};
  margin: 0 auto; /* centers footer on screens wider than 940px */
  padding: 0 20px; /* ensures some horizontal space on small devices */
  display: flex;
  align-items: center;
`;

const linkStyles = css`
  text-decoration: none;
  color: ${(props) => props.theme.color.midDark};
  font-size: ${(props) => props.theme.font.size.small};
  flex: 1;
`;

export const Link = styled(UnstyledLink)`
  ${linkStyles}

  text-align: right;
`;

export const ExternalLink = styled.a`
  ${linkStyles}

  text-align: left;
`;

export const Logo = styled(UnstyledLogo)`
  cursor: pointer;
`;
