import styled from 'styled-components';

type ContainerProps = {
  image: string;
};

export const Container = styled.article<ContainerProps>`
  max-width: 480px;
  height: 400px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Nightfall = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  height: 100%;
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: space-between;
`;

export const Author = styled.h3`
  font-size: 20px;
  color: #fff;
  display: flex;
  align-items: center;

  svg {
    margin-right: 4px;
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  color: #fff;
`;
