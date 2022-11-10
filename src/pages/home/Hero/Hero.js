import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Hero.style';
import Image from './heat-map.png';

const Hero = () => (
  <S.Container>
    <S.Title>No reactions to your reddit posts?</S.Title>
    <S.SubTitle>
      Great timing, great results! Find the best time to post on your subreddit.
    </S.SubTitle>
    <Link to="/search/javascript">
      <S.Button>Show me the best time</S.Button>
    </Link>

    <S.SubReddit>r/javascript</S.SubReddit>
    <Link to="/search/javascript">
      <S.HeatMap src={Image} />
    </Link>
  </S.Container>
);

export default Hero;
