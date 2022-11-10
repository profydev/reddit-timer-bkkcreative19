import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 13.3rem;
  margin-bottom: 9.9rem;

  & div:last-child {
    margin-top: 10.5rem;
  }
`;

export const Section = styled.div`
  max-width: 768px;
  width: 100%;
  padding: 0 20px;
`;

export const SectionTitle = styled.h2`
  color: ${(props) => props.theme.color.dark};
  font-size: ${(props) => props.theme.font.size.medium};
  font-weight: 400;
  margin-bottom: 1.2rem;
`;

export const ListItem = styled.li`
  font-size: ${(props) => props.theme.font.size.default};
  color: ${(props) => props.theme.color.text};
  margin-left: 1.8rem;
`;
export const Text = styled.p`
  font-size: ${(props) => props.theme.font.size.default};
  color: ${(props) => props.theme.color.text};
`;

export const Link = styled.a`
  color: ${(props) => props.theme.color.blue};
`;
