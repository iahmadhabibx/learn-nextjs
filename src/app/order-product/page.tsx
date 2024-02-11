"use client";

import { useRouter } from "next/navigation";
import React from "react";

const OrderProduct = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order");
    router.push("/");
    // router.replace("/"); Just like replace prop in <Link>
    // router.back(); Navigate Back
    // router.forward(); Navigate Forward
  };
  return (
    <>
      <h1>Order Product</h1>

      <button onClick={handleClick}>Place Order</button>
    </>
  );
};

export default OrderProduct;
