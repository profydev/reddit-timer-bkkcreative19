/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { defaultSubReddit } from '../../shared/constants';
import { fetchData } from '../../shared/apiCall';
import * as S from './Search.style';
import Heatmap from './Heatmap/Heatmap';

import Table from './Table';

const Search = () => {
  const params = useParams();
  const [current, setCurrent] = useState(null);
  // const navigate = useNavigate();

  // console.log(typeof current[0].data.author);

  const override = {
    color: '#FDB755',
    borderWidth: '6px',
    animationDuration: '1.5s',
    marginLeft: 'calc(50% - 4em)',
    marginTop: '5.6rem',
  };

  const [value, setValue] = useState(params.name);

  const { data, isLoading } = useQuery({
    queryKey: ['listings', params.name],
    queryFn: () => fetchData(params.name),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (params.name === defaultSubReddit) {
      setValue(defaultSubReddit);
    }
  }, [params]);

  return (
    <S.Container>
      <S.Title>Find the best time for a subreddit</S.Title>
      <S.Form>
        <span>r</span>
        <S.Input value={value} onChange={(e) => setValue(e.target.value)} />
        <Link onClick={() => setCurrent(null)} to={`/search/${value}`}>
          <S.Button>Search</S.Button>
        </Link>
      </S.Form>
      {isLoading ? (
        <S.Loader cssOverride={override} color="#FDB755" size="5em" />
      ) : (
        <Heatmap current={current} setCurrent={setCurrent} data={data} />
      )}
      {current?.length > 0 && !isLoading && <Table current={current} />}
    </S.Container>
  );
};

export default Search;
