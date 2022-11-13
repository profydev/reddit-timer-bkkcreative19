import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  width: 1114px;
  margin: 6rem auto;
`;

export const Header = styled.div`
  width: 960px;
  background: linear-gradient(180deg, #fefefe 0%, #e9e9e9 100%);
  border: 1px solid #f3f3f3;
  display: flex;
  padding: 1rem 1.7rem;
  margin-left: auto;
  justify-content: space-between;
`;
export const Time = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #787878;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 280px;
`;

export const Left = styled.div`
  width: 154px;
  display: flex;
`;

export const Day = styled.div`
  font-weight: 600;
  font-size: 15px;

  flex: 1;
  display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   text-align: center;
  height: fit-content;

  & div:first-child {
    background: #1e2537;
    width: 154px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 1.5rem;
  }
  & div:last-child {
    width: 960px;
    display: flex;
  }
`;
export const DayPost = styled.span`
  background: #a0ce93;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 1;
  color: #ffffff;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
`;

export const Right = styled.div`
  width: 960px;
  background: green;
`;

export const TimeZone = styled.p`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 17px;
  text-align: center;
  margin-top: 1.2rem;
  color: #93918f;

  & span {
    font-weight: 700;
  }
`;
