import React from "react";
import { Comment } from "src/components/Comment";
import { Header } from "src/components/Header";
import { SWRConfig } from "swr";

export const getStaticPaths = async () => {
  const comments = await fetch("https://jsonplaceholder.typicode.com/comments");
  const commentsData = await comments.json();
  const paths = commentsData.map((comment) => {
    return { params: { id: comment.id.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const COMMENT_API_URL = `https://jsonplaceholder.typicode.com/comment/${id}`;
  const comments = await fetch(COMMENT_API_URL);
  const commentsData = await comments.json();

  console.log(`${id}のページをSG`);

  return {
    props: {
      fallback: {
        [COMMENT_API_URL]: commentsData,
      },
    },
  };
};

const CommentId = (props) => {
  const { fallback } = props;
  return (
    <div>
      <Header />

      <SWRConfig value={{ fallback }}>
        <Comment />
      </SWRConfig>
    </div>
  );
};

export default CommentId;
