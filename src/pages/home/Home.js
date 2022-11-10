import React from 'react';
import Hero from './Hero';
import * as S from './Home.style';

const Home = () => (
  <S.Container>
    <Hero />
    <section id="how-it-works">How it works</section>
    <section id="about">About</section>
  </S.Container>
);

export default Home;
