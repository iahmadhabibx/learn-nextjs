import React from "react";

const ProductDetail = ({ params }: { params: { productId: string } }) => {
  return <div>Product {params.productId} details</div>;
};

export default ProductDetail;
