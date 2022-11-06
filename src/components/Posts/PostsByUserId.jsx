import Link from "next/link";
import React from "react";
import { usePostsByUserId } from "src/hooks/useFetchArray";

export const PostsByUserId = (props) => {
  const { data, error, isLoading, isEmpty } = usePostsByUserId(props.id);

  if (isLoading) {
    return <div>ローディング中です</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>データは空です</div>;
  }
  return (
    <ul className="space-y-4">
      {data.map((post) => {
        return (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`} className="block group">
              <h2 className="font-bold group-hover:text-blue-400">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 group-hover:text-blue-400">
                {post.body}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PostsByUserId;
