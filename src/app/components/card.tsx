import React from "react";
const Card = ({ children }: { children: React.ReactNode }) => {
  const cardStyle: any = {
    boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.2)",
    borderRadius: "4px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "4px",
  };
  return <div style={cardStyle}>{children}</div>;
};

export default Card;
