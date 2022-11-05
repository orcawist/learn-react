import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useFetchArray = (url) => {
  // featureをoverrideしない場合keyにURL
  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  };
};

const API_URL = "https://jsonplaceholder.typicode.com/";

export const usePosts = () => {
  return useFetchArray(`${API_URL}posts`);
};

export const useComments = () => {
  return useFetchArray(`${API_URL}comments`);
};

export const useUsers = () => {
  return useFetchArray(`${API_URL}users`);
};
