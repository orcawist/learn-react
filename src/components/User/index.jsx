import React from "react";
import { useUser } from "src/hooks/useUser";

export const User = () => {
  const { data, error, isLoading } = useUser();
  console.log(data);
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <p>{data.name}</p>
      )}
    </div>
  );
};
