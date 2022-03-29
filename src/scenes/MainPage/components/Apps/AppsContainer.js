import { Apps } from "./Apps";

export const AppsContainer = ({ id, name, applications }) => {
  return <Apps list={applications} />;
};
