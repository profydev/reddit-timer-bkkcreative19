/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Button as BaseButton } from '../../shared/components/Button';

export const Container = styled.div``;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.font.size.big};
  color: ${(props) => props.theme.color.dark};
  font-weight: 400;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
`;
export const Input = styled.input`
  width: 100%;
  max-width: 370px;
  height: 100%;
  border: none;
  border: 1px solid #e6e6e6;
  outline: none;
  margin: 0 1rem;
  padding: 0 1em;
`;

export const Button = styled(BaseButton)`
  background: ${(props) => props.theme.color.orange};
  text-transform: uppercase;
  height: 100%;
  display: flex;
  align-items: center;
`;
