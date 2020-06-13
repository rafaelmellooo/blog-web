import { Container, StyledForm } from './styles';
import Button from '../../styles/Button';
import Input from '../Input';
import TextArea from '../TextArea';

type FormData = {
  title: string;
  body: string;
};

const PostForm: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="title">Título da postagem</label>
        <Input name="title" id="title" type="text" required />

        <label htmlFor="body">Conteúdo da postagem</label>
        <TextArea name="body" id="body" required></TextArea>

        <Button type="submit">Salvar postagem</Button>
      </StyledForm>
    </Container>
  );
};

export default PostForm;
