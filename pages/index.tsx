import Image from "next/image";
import Head from "next/head";
import styled from "@emotion/styled";
import Header from "../components/Header";
import ThemeToggle from "../components/ThemeToggle";
import Main from "../components/Main";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Where In The World?</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container>
        <Header />
        <Main />
      </Container>
    </>
  );
}
