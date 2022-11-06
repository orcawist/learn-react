import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const usePost = (id) => {
  const { data: post, error } = useSWR(
    id ? `https://jsonplaceholder.typicode.com/posts/${id}` : null,
    fetcher
  );

  return {
    post,
    error,
    isLoading: !post && !error,
  };
};
