import React from "react";
import Link from "next/link";
const Products = () => {
  return (
    <div>
      <h1>Products List</h1>

      <Link href={"/"}>Home</Link>
      <ol type="1">
        <Link href={"products/1"}>Product 1</Link>
        <Link href={"products/2"}>Product 2</Link>
        <Link href={"products/3"} replace>Product 3</Link>
        {/* Replace prop clears history of sattes instead of adding new url */}
      </ol>
    </div>
  );
};

export default Products;
