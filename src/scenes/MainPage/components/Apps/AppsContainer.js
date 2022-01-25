import { useEffect, useState } from "react";
import { Apps } from "./Apps";
import { getApps } from "api/app";

export const AppsContainer = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    getApps().then((value) => setApps(value));
  }, []);

  return <Apps list={apps} />;
};
