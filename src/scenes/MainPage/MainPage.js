import React from "react";
import { AppsContainer } from "./components/Apps";
import { Container, Heading, Divider } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback } from "react";
import { getApplicationGroups } from "../../api/store/application-groups/action";

export const MainPage = () => {
  const groups = useSelector((state) => state.groups.groups);
  const dispatch = useDispatch();

  const fetchApplicationGroups = useCallback(() => {
    dispatch(getApplicationGroups());
  }, [dispatch]);

  useEffect(() => {
    fetchApplicationGroups();
  }, [fetchApplicationGroups]);

  return (
    <Container>
      <Heading>Mirror Applications</Heading>
      {groups.map(({ id, name, applications }, index) => (
        <React.Fragment key={index}>
          <Divider></Divider>
          <AppsContainer id={id} name={name} applications={applications} />
        </React.Fragment>
      ))}
    </Container>
  );
};
