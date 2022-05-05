import Image from "next/image";
import styled from "@emotion/styled";
import ThemeToggle from "../components/ThemeToggle";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 35vh;
`;

export default function Home() {
  return (
    <Container>
      <ThemeToggle />
      <h1>This is my Page</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </Container>
  );
}
