import axios from "axios";

export const fetchApi = (method, url) =>
  axios({ method, url })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
