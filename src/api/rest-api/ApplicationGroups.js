import { fetchApi } from "./Fetch";

export const getApplicationGroupsApi = () => {
  const METHOD = "GET";

  return fetchApi(
    METHOD,
    "http://localhost:3000/api/v1/application-groups?page=1&perPage=2"
  );
};
