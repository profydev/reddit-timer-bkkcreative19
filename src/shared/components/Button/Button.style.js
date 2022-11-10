/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Button = styled.button`
  padding: 1em 1.5em;
  color: #ffffff;
  border: none;
  text-transform: uppercase;
  font-weight: 500;
  font-size: ${(props) => props.theme.font.size.small};
  border-radius: 4px;
  width: fit-content;
`;
