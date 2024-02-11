"use client"; //To ensure we can recover on client side from error we need to add this here too 

import React from "react";
import { notFound } from "next/navigation";
const ReviewDetail = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  if (parseInt(params.reviewId) > 1000) return notFound();
  return (
    <div>
      Review with id {params.reviewId} of product with id {params.productId}
    </div>
  );
};

export default ReviewDetail;
