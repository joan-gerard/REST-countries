import React from "react";
import styled from "@emotion/styled";

import ThemeToggle from "./ThemeToggle";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--color-bg-header);
  align-items: center;
  padding: 0 3.5em
`;

const Header = () => {
  return (
    <Container>
      <h3>Where in the world?</h3>
      <ThemeToggle />
    </Container>
  );
};

export default Header;
