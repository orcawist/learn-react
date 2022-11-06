import useSWR from "swr";

export const useFetchArray = (url) => {
  // featureをoverrideしない場合keyにURL
  const { data, error } = useSWR(url);

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

export const useCommentsByPostId = (id) => {
  return useFetchArray(`${API_URL}comments?postId=${id}`);
};

export const usePostsByUserId = (id) => {
  return useFetchArray(`${API_URL}posts?userId=${id}`);
};
