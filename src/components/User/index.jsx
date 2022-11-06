import React from "react";
import { PostsByUserId } from "src/components/Posts/PostsByUserId";
import { useUser } from "src/hooks/useUser";

export const User = () => {
  const { data, error, isLoading } = useUser();
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <div>
          <h1 className="font-bold text-3xl">{data.name}</h1>
          <h2>投稿</h2>
          <PostsByUserId id={data.id} />
        </div>
      )}
    </div>
  );
};
