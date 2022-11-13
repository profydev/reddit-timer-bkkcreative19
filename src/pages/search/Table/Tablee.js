/* eslint-disable array-callback-return */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-template */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../../shared/utils/javascript';
import * as S from './Table.style';

const columns = ['Title', 'Time Posted', 'Score', 'Comments', 'Author'];

const Table = ({ current }) => {
  // const yay = new Date(current[0].data.created * 1000);
  const posts = sortArray(current);
  return (
    <S.Container>
      <S.Table>
        <S.TableHead>
          {columns.map((col) => (
            <S.Head>{col}</S.Head>
          ))}
        </S.TableHead>
        {posts.map((item, id) => (
          <S.Row>
            <a
              target="_blank"
              href={'https://www.reddit.com' + item.data.permalink}
              rel="noreferrer"
            >
              {item.data.title}
            </a>
            <p>{formatDate(item.data.created * 1000)}</p>
            <p>{item.data.score}</p>
            <p>{item.data.num_comments}</p>
            {item.data.author === '[deleted]' ? (
              <p>
                {item.data.author.length > 10
                  ? item.data.author.slice(0, 9) + '...'
                  : item.data.author}
              </p>
            ) : (
              <a
                target="_blank"
                href={'https://www.reddit.com/user/' + item.data.author + '/'}
                rel="noreferrer"
              >
                {item.data.author.length > 10
                  ? item.data.author.slice(0, 9) + '...'
                  : item.data.author}
              </a>
            )}
          </S.Row>
        ))}
      </S.Table>
    </S.Container>
  );
};

const sortArray = (arr) => {
  let newArr = [...arr];
  // console.log(newArr);
  newArr = newArr.sort((a, b) => {
    const date1 = new Date(a.data.created * 1000).getMinutes();
    const date2 = new Date(b.data.created * 1000).getMinutes();
    // a.data.created * 1000 - b.data.created * 1000;
    return date1 - date2;
  });
  // console.log(newArr);
  return newArr;
};
export default Table;
