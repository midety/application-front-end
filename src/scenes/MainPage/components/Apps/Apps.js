import { Container } from "./style";
import { AppContainer } from "../App";

export const Apps = ({ list = [] }) => {
  return (
    <Container>
      {list.map(({ id, img, url }, index) => (
        <AppContainer id={id} img={img} url={url} key={index} />
      ))}
    </Container>
  );
};
