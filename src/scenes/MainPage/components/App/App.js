import { Container, AppImage, Indicator, Link } from "./style";
import { useState } from "react";
import open from "./images/open.png";
import lock from "./images/lock.png";

const LinkWrapper = ({ isOnline, siteUrl, children }) =>
  isOnline ? (
    <Link href={siteUrl} target="_blank" rel="noreferrer">
      {children}
    </Link>
  ) : (
    children
  );

export const App = ({ imgUrl, locked, isOnline, siteUrl }) => {
  const [image, setImage] = useState(locked ? lock : imgUrl);

  return (
    <Container
      onMouseEnter={() => (locked ? null : setImage(open))}
      onMouseLeave={() => (locked ? null : setImage(imgUrl))}
    >
      <LinkWrapper isOnline={isOnline} siteUrl={siteUrl}>
        <Indicator
          status={locked ? "unreachable" : isOnline ? "online" : "offline"}
        />

        <AppImage draggable="false" src={image} />
      </LinkWrapper>
    </Container>
  );
};
