import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("ERROR!!!");
  }
  const json = await res.json();
  return json;
};

export const usePosts = () => {
  // featureをoverrideしない場合keyにURL
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  };
};
