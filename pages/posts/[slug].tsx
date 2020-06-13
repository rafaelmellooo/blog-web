import { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

import api from '../../services/api';

type Post = {
  id: number;
  title: string;
  slug: string;
  body: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
  image_url: string;
};

type PostDetailProps = {
  post: Post;
};

const PostDetail: NextPage<PostDetailProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Container>
        <Group>
          <Title>{post.title}</Title>

          <Image src={post.image_url} />
        </Group>

        <Body>{post.body}</Body>

        <Author>
          <h3>
            Autor: {post.user.name} {`<${post.user.email}>`}
          </h3>
        </Author>
      </Container>
    </>
  );
};

const Container = styled.section`
  border: thin solid #0b032d;
`;

const Title = styled.h1`
  font-size: 66px;
  width: 50%;
  padding: 24px;
  color: #fff;
`;

const Group = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: thin solid #000;
  background-color: #0b032d;
`;

const Image = styled.img`
  width: 40%;
  object-fit: cover;
`;

const Body = styled.p`
  line-height: 48px;
  font-size: 24px;
  padding: 16px;
`;

const Author = styled.article`
  border-top: thin solid #0b032d;
  padding: 16px;

  h2 {
  }
`;

export default PostDetail;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await api.get<Post>(`/posts/${params.slug}`);

  return {
    props: {
      post: response.data,
    },
  };
};
