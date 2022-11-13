/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div``;

export const Table = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 786px;
  border: 1px solid #dddddd;
`;

export const TableHead = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  & p:first-child {
    width: 45%;
  }

  & p {
    padding: 0.5em;
  }

  & p:nth-child(2),
  & p:nth-child(4),
  & p:nth-child(5) {
    width: 15%;
  }

  & p:nth-child(3) {
    width: 10%;
  }

  & p:not(:last-child) {
    border-right: 1px solid #dddddd;
  }
`;

export const Head = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #000000;
`;
export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-top: 1px solid #dddddd;

  & a {
    border-right: 1px solid #dddddd;
  }

  & p,
  & a {
    padding: 0.5em;
    font-size: 1.4rem;
  }

  & a:first-child {
    width: 45%;
  }
  & p:nth-child(2),
  & p:nth-child(4),
  & a:last-child,
  & p:last-child {
    width: 15%;
  }

  & p:nth-child(3) {
    width: 10%;
  }

  & p:not(:last-child) {
    border-right: 1px solid #dddddd;
  }
`;
