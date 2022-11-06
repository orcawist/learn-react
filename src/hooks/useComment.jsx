import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";

export const useComment = () => {
  const router = useRouter();
  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/comments/${router.query.id}`
  );

  return { data, error, isLoading: !data && !error };
};
