import useSWR from "swr";

export const usePost = (id) => {
  const { data: post, error } = useSWR(
    id ? `https://jsonplaceholder.typicode.com/posts/${id}` : null
  );

  return {
    post,
    error,
    isLoading: !post && !error,
  };
};
