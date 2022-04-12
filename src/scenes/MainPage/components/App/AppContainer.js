import { App } from "./App";
import { useEffect, useState } from "react";
import { useFetch } from "api/Fetch";

export const useIsAvailable = (url) => {
  const METHOD = "GET";

  const [isAvailable, setIsAvailable] = useState(false);
  const [isLoading, result] = useFetch(METHOD, url);

  useEffect(() => {
    setIsAvailable(!!result);
  }, [result]);

  return [isLoading, isAvailable];
};

export const AppContainer = ({ id, img, url }) => {
  const [isLoading, isAvailable] = useIsAvailable(url);

  return <App img={img} isAvailable={isAvailable} url={url} />;
};
