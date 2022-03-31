import React from "react";
import { AppsContainer } from "./components/Apps";
import { Container, Heading, Divider } from "./style";
import { useGetApplicationGroups } from "api/ApplicationGroups";

export const MainPage = () => {
  const [isLoading, applicationGroups = []] = useGetApplicationGroups();

  return (
    <Container>
      <Heading>Mirror Applications</Heading>
      {applicationGroups.map(({ id, name, applications }, index) => (
        <React.Fragment key={index}>
          <Divider></Divider>
          <AppsContainer id={id} name={name} applications={applications} />
        </React.Fragment>
      ))}
    </Container>
  );
};
