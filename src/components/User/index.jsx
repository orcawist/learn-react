import React from "react";
import { PostsByUserId } from "src/components/Posts/PostsByUserId";
import { useUser } from "src/hooks/useUser";

export const User = () => {
  const { data, error, isLoading } = useUser();
  // console.log(data);
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <div>
          <h2>ユーザー</h2>
          <p>{data.name}</p>
          <hr />
          <h2>投稿</h2>
          <PostsByUserId id={data.id} />
        </div>
      )}
    </div>
  );
};
