import Link from "next/link";
import React from "react";

const F1 = () => {
  return (
    <>
      <div>F1 page</div>
      <Link href={"/f1/f2"}>F2</Link>
    </>
  );
};

export default F1;
