import React from 'react';
import Hero from './Hero';
import Info from './Info/Info';


import * as S from './Home.style';

const Home = () => (
  <S.Container>
    <Hero />
    <Info />
  </S.Container>
);

export default Home;
