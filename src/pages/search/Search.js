import React from 'react';
import * as S from './Search.style';

const Search = () => (
  <S.Container>
    <S.Title>Find the best time for a subreddit</S.Title>
    <S.Form>
      <span>r /</span>
      <S.Input />
      <S.Button>Search</S.Button>
    </S.Form>
  </S.Container>
);

export default Search;
