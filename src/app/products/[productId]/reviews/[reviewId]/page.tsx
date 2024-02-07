import React from "react";

const ReviewDetail = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  return (
    <div>
      Review with id {params.reviewId} of product with id {params.productId}
    </div>
  );
};

export default ReviewDetail;
