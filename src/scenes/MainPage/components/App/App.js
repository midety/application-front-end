import { Container, AppImage, Indicator, Link } from "./style";
import { useState } from "react";
import open from "./images/open.png";
import lock from "./images/lock.png";

const LinkWrapper = ({ isOnline, url, children }) =>
  isOnline ? (
    <Link href={url} target="_blank" rel="noreferrer">
      {children}
    </Link>
  ) : (
    children
  );

export const App = ({ img, locked, isOnline, url }) => {
  const [image, setImage] = useState(locked ? lock : img);

  return (
    <Container
      onMouseEnter={() => (locked ? null : setImage(open))}
      onMouseLeave={() => (locked ? null : setImage(img))}
    >
      <LinkWrapper isOnline={isOnline} url={url}>
        <Indicator
          status={locked ? "unreachable" : isOnline ? "online" : "offline"}
        />

        <AppImage draggable="false" src={image} />
      </LinkWrapper>
    </Container>
  );
};
