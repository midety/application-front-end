import { App } from "./App";
import { useEffect, useState } from "react";

export const AppContainer = ({ imgUrl, siteUrl }) => {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    fetch(siteUrl).then(
      () => {
        setIsOnline(true);
      },
      () => {
        setIsOnline(false);
      }
    );
  }, [siteUrl]);

  return <App imgUrl={imgUrl} isOnline={isOnline} siteUrl={siteUrl} />;
};
