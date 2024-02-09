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
