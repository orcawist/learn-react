import Link from "next/link";
import React from "react";
import { useCommentsByPostId } from "src/hooks/useFetchArray";

export const CommentsByPostId = (props) => {
  const { data, error, isLoading, isEmpty } = useCommentsByPostId(props.id);

  if (isLoading) {
    return <div>ローディング中です</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <ol>
      {data.map((data) => {
        return (
          <li key={data.id}>
            <p>
              <Link href={`/comments/${data.id}`}>{data.body}</Link>
            </p>
          </li>
        );
      })}
    </ol>
  );
};
