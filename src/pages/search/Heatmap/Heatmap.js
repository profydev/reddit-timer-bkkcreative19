/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-plusplus */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable operator-linebreak */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Heatmap.style';

const times = [
  '12:00am',
  '2:00am',
  '4:00am',
  '6:00am',
  '8:00am',
  '10:00am',
  '12:00pm',
  '2:00pm',
  '4:00pm',
  '6:00pm',
  '8:00pm',
  '10:00pm',
];

const Heatmap = ({ data, setCurrent, current }) => {
  const navigate = useNavigate();
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  //   const [current, setCurrent] = useState(null);

  const yay = {
    Sunday: getRightTimes(data && data[days[0]]),
    Monday: getRightTimes(data && data[days[1]]),
    Tuesday: getRightTimes(data && data[days[2]]),
    Wednesday: getRightTimes(data && data[days[3]]),
    Thursday: getRightTimes(data && data[days[4]]),
    Friday: getRightTimes(data && data[days[5]]),
    Saturday: getRightTimes(data && data[days[6]]),
  };

  //   console.log(Object.entries(yay.Sunday)[1]);

  return (
    <S.Container>
      <S.Header>
        {times.map((time) => (
          <S.Time key={time}>{time}</S.Time>
        ))}
      </S.Header>
      <S.Main>
        {days.map((day) => (
          <S.Day key={day}>
            <div>{day}</div>
            <div>
              {Object.entries(yay[day]).map((item, id) => (
                <S.DayPost
                  onClick={() => {
                    setCurrent(item[1][0]);
                    // console.log(item[1][0]);
                    navigate(`${item[1][1]}`);
                  }}
                  key={id}
                >
                  {item[1][1]}
                </S.DayPost>
              ))}
            </div>
          </S.Day>
        ))}
      </S.Main>
      <S.TimeZone>
        All times are shown in your timezone:{' '}
        <span>{Intl.DateTimeFormat().resolvedOptions().timeZone}</span>
      </S.TimeZone>
    </S.Container>
  );
};

export default Heatmap;

const getRightTimes = (data) => {
  const obj = {};

  for (let i = 0; i < 24; i++) {
    obj[i] = [[], 0];
  }

  data?.forEach((item) => {
    const date = new Date(item.data.created * 1000);
    if (obj.hasOwnProperty(date.getHours())) {
      obj[date.getHours()][0].push(item);
      obj[date.getHours()][1]++;
    }
  });
  return obj;
};
