import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useComment } from "src/hooks/useComment";

export const Comment = () => {
  const { data, error, isLoading } = useComment();

  if (isLoading) {
    return <div>ローディング中です</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <h1>{data.body}</h1>
      {data.name ? <div>Created by {data.name}</div> : null}
    </div>
  );
};
