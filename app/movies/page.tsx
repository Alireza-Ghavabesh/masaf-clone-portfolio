import React from "react";
import Movies from "./Movies";
import { randomUUID } from "crypto";
import { Suspense } from "react";
import Skeleton from "./loading";

function page() {
  return (
    <div key={randomUUID()}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <Suspense fallback={<Skeleton />}>
        <Movies />
      </Suspense>
      <div>5</div>
      <div>6</div>
      <div>7</div>
    </div>
  );
}

export default page;
