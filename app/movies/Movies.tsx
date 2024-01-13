import React from "react";
import { delaySimulator } from "@/utils/utils";

const Movies = async () => {
  // 5 sec for operation to fetch movies
  await delaySimulator(5000);
  return <div>4</div>;
};

export default Movies;
