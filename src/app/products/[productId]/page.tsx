import React from "react";
import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};
// Name of the function is case sensitive for nextjs to dynamically generate metadata
export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};

const ProductDetail = ({ params }: Props) => {
  return <div>Product {params.productId} details</div>;
};

export default ProductDetail;
