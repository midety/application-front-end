import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (method, url) => {
  const [content, setContent] = useState();
  const [isLoading, setIsLoading] = useState(null);
  const [isError, setIsError] = useState();

  useEffect(() => {
    setIsLoading(true);

    axios({ method, url })
      .then(({ data }) => {
        setContent(data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.response) {
          setIsError(error.response.status);
        }
      });
  }, [method, url]);
  return [isLoading, content, isError];
};
