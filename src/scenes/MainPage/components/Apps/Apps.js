import { Container } from "./style";
import { AppContainer } from "../App";

export const Apps = ({ list }) => {
  return (
    <Container>
      {list.map(({ imgUrl, siteUrl }, index) => (
        <AppContainer imgUrl={imgUrl} siteUrl={siteUrl} key={index} />
      ))}
    </Container>
  );
};
