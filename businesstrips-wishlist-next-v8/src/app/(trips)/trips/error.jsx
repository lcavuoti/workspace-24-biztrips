"use client";

import React, { ReactNode } from "react";

export default function Error({error,reset,}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}
