import styled from 'styled-components';

export const Container = styled.div``;

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
  /* identical to box height */
  text-align: center;

  color: #93918f;
`;
