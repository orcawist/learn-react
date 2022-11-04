import { useRouter } from "next/router";
import React from "react";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useComment = () => {
  const router = useRouter();
  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/comments/${router.query.id}`,
    fetcher
  );

  return { data, error, isLoading: !data && !error };
};
