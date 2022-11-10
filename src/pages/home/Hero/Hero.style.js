import styled from 'styled-components';
import { Button as BaseButton } from '../../../shared/components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.font.size.big};
  line-height: 46px;
  font-weight: 400;
  font-family: ${(props) => props.theme.font.family.headline};
  text-align: center;
  color: ${(props) => props.theme.color.dark};
`;
export const SubTitle = styled.p`
  font-size: ${(props) => props.theme.font.size.default};
  line-height: 20px;
  text-align: center;
  color: ${(props) => props.theme.color.text};
`;

export const Button = styled(BaseButton)`
  margin-top: 4.5rem;
  background: ${(props) => props.theme.color.orange};
`;

export const SubReddit = styled.span`
  font-size: ${(props) => props.theme.font.size.default};
  color: ${(props) => props.theme.color.text};
  font-weight: 500;
  margin-top: 5.95rem;
`;

export const HeatMap = styled.img`
  margin-top: 3.6rem;
`;
