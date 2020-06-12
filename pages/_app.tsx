import { NextPage } from 'next';
import Head from 'next/head';
import { AppProps } from 'next/app';
import styled from 'styled-components';

import { GlobalStyle } from '../styles/global';

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto&family=Ubuntu:wght@500;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <GlobalStyle />

    <Container>
      <Component {...pageProps} />
    </Container>
  </>
);

const Container = styled.main`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

export default App;
