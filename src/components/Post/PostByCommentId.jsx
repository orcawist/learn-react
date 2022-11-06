import Link from "next/link";
import React from "react";
import { usePost } from "src/hooks/usePost";

export const PostByCommentId = (props) => {
  const { post, error, isLoading } = usePost(props.id);
  if (isLoading) {
    return <div>ローディング中です</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Link href={`/posts/${post.id}`}>{post.title}</Link>
    </div>
  );
};

export default PostByCommentId;
