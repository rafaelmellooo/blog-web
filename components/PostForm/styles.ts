import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.section`
  width: 80%;
  margin: auto;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    display: block;
  }
`;
