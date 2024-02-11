import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <main>
      <h1>Welcome to Home</h1>
      <Link href={"/blog"}>Blog</Link>
      <Link href={"/products"}>Products</Link>
    </main>
  );
};

export default Home;
