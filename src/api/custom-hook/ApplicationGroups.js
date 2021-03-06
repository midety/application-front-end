import { useFetch } from "./Fetch";

export const useGetApplicationGroups = () => {
  const METHOD = "GET";

  const [applicationGroups] = useFetch(
    METHOD,
    "http://localhost:3000/api/v1/application-groups?page=1&perPage=2"
  );

  return [applicationGroups];
};
