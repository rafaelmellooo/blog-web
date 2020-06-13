import { FiUser } from 'react-icons/fi';

import { Container, Nightfall, Author, Title } from './styles';

type PostItemProps = {
  title: string;
  image_url: string;
  author: string;
};

const PostItem: React.FC<PostItemProps> = ({ title, image_url, author }) => (
  <Container image={image_url}>
    <Nightfall>
      <Author>
        <FiUser />
        {author}
      </Author>

      <Title>{title}</Title>
    </Nightfall>
  </Container>
);

export default PostItem;
