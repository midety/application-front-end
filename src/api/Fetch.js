import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (method, url) => {
  const [content, setContent] = useState();
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    axios({ method, url }).then(({ data }) => {
      setContent(data);
      setIsLoading(false);
    });
  }, [method, url]);

  return [isLoading, content];
};
