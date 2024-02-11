// Error boundaries should be a client component
// Automatically wrap route segment and its child routes
"use client";
import React from "react";

const ErrorBoundary = ({ error }: { error: Error }) => {
  return <div>Error in your component :: {error?.message}</div>;
};

export default ErrorBoundary;
