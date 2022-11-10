import React from 'react';
import * as S from './Hero.style';
import Image from './heat-map.png';

const Hero = () => (
  <S.Container>
    <S.Title>No reactions to your reddit posts?</S.Title>
    <S.SubTitle>
      Great timing, great results! Find the best time to post on your subreddit.
    </S.SubTitle>
    <S.Button>Show me the best time</S.Button>
    <S.SubReddit>r/javascript</S.SubReddit>
    <S.HeatMap src={Image} />
  </S.Container>
);

export default Hero;
