import React from "react";
import { AppsContainer } from "./components/Apps";
import { Container, Heading, Divider } from "./style";

export const MainPage = () => {
  return (
    <Container>
      <Heading>Mirror Applications</Heading>
      <Divider></Divider>

      <AppsContainer />

      <Divider></Divider>
      <AppsContainer />
    </Container>
  );
};
