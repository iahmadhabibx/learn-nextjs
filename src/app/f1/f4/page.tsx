import Link from "next/link";
import React from "react";

const F4 = () => {
  return (
    <>
      <div>F4 page</div>
      <Link href={"/f1/f3"}>F3</Link>
      <Link href={"/about"}>About</Link>
    </>
  );
};

export default F4;
