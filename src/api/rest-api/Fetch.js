import axios from "axios";

export const fetchApi = (method, url) =>
  axios({ method, url })
    .then(({ data }) => data)
    .catch(({ response }) => response);
