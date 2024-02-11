// Error boundaries should be a client component
// Automatically wrap route segment and its child routes
"use client";
import React from "react";

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {

  return <div>
    <p>Error in your component :: {error?.message}</p>
    <button onClick={reset}>Try Again</button>
  </div>;
};

export default ErrorBoundary;
