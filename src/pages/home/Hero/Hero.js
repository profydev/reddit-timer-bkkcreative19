/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Hero.style';
import Image from './heat-map.png';
import { defaultSubReddit } from '../../../shared/constants';

const Hero = () => (
  <S.Container>
    <S.Title>No reactions to your reddit posts?</S.Title>
    <S.SubTitle>
      Great timing, great results! Find the best time to post on your subreddit.
    </S.SubTitle>
    <Link to={`/search/${defaultSubReddit}`}>
      <S.Button>Show me the best time</S.Button>
    </Link>

    <S.SubReddit>r/{defaultSubReddit}</S.SubReddit>
    <Link to={`/search/${defaultSubReddit}`}>
      <S.HeatMap src={Image} />
    </Link>
  </S.Container>
);

export default Hero;
