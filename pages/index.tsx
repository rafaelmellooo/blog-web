import { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

import PostItem from '../components/PostItem';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      <Container>
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </Container>
    </>
  );
};

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
`;

export default Home;
