import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './Search.style';

const Search = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [value, setValue] = useState(params.name);

  const handleSubmit = () => {
    navigate(`/search/${value}`);
  };

  return (
    <S.Container>
      <S.Title>Find the best time for a subreddit</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <span>r /</span>
        <S.Input value={value} onChange={(e) => setValue(e.target.value)} />
        <S.Button>Search</S.Button>
      </S.Form>
    </S.Container>
  );
};

export default Search;
