import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as S from './Search.style';

const Search = () => {
  const params = useParams();
  // const navigate = useNavigate();

  const [value, setValue] = useState(params.name);

  return (
    <S.Container>
      <S.Title>Find the best time for a subreddit</S.Title>
      <S.Form>
        <span>r /</span>
        <S.Input value={value} onChange={(e) => setValue(e.target.value)} />
        <Link to={`/search/${value}`}>
          <S.Button>Search</S.Button>
        </Link>
      </S.Form>
    </S.Container>
  );
};

export default Search;
