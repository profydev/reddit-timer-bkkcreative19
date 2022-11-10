/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.font.size.big};
  color: ${(props) => props.theme.color.dark};
  font-weight: 400;
  text-align: center;
`;
