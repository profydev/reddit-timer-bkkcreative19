/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import * as S from './Info.style';

const Info = () => (
  <S.Container>
    <S.Section id="how-it-works">
      <S.SectionTitle>How it works</S.SectionTitle>
      <ul>
        <S.ListItem>
          We find the 500 top posts from the past year for a subreddit.
        </S.ListItem>
        <S.ListItem>
          The data is visualized in a heatmap grouped by weekday and hour of the
          day.
        </S.ListItem>
        <S.ListItem>
          See immediately when to submit your reddit post.
        </S.ListItem>
      </ul>
    </S.Section>

    <S.Section id="about">
      <S.SectionTitle>About</S.SectionTitle>
      <S.Text>
        This app was created during a course on{' '}
        <S.Link href="https://profy.dev" target="_blank">
          profy.dev
        </S.Link>{' '}
        with the goal to implement a pixel-perfect real-world application with
        professional workflows and tools like Kanban, ClickUp, Figma, GitHub,
        pull requests and code reviews.{' '}
        <S.Link href="https://profy.dev/employers" target="_blank">
          Click here for more information.
        </S.Link>
      </S.Text>
    </S.Section>
  </S.Container>
);

export default Info;
