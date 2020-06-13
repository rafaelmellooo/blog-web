import { NextPage, GetServerSideProps } from 'next';
import { FiPlus } from 'react-icons/fi';
import Head from 'next/head';
import Link from 'next/link';
import api from '../services/api';
import styled from 'styled-components';

import PostItem from '../components/PostItem';

type Post = {
  id: number;
  title: string;
  slug: string;
  user: {
    name: string;
  };
  image_url: string;
};

type HomeProps = {
  posts: Post[];
};

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      <Container>
        <Link href="/posts/new">
          <a>
            <AddPost>
              <FiPlus />
            </AddPost>
          </a>
        </Link>

        {posts.map((post) => (
          <Link key={post.id} href="/posts/[slug]" as={`/posts/${post.slug}`}>
            <a>
              <PostItem
                title={post.title}
                image_url={post.image_url}
                author={post.user.name}
              />
            </a>
          </Link>
        ))}
      </Container>
    </>
  );
};

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
`;

const AddPost = styled.article`
  background-color: #0b032d;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  svg {
    width: 50%;
    height: 50%;
    color: #fff;
  }
`;

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get<Post[]>('/posts');

  return {
    props: {
      posts: response.data,
    },
  };
};
