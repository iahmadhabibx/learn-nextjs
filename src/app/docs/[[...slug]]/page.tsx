import React from "react";

const Docs = ({ params }: { params: { slug: string[] } }) => {
  if (params.slug?.length === 2)
    return (
      <div>
        {" "}
        Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
      </div>
    );
  else if (params.slug?.length === 1)
    return <div> Viewing docs for feature {params.slug[0]}</div>;
  return <div>Docs</div>;
};

export default Docs;
