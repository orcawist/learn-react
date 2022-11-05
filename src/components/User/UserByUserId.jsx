import React from "react";
import useSWR from "swr";
import { fetcher } from "src/utils/fetcher";

export const UserByUserId = (props) => {
  const { data, error } = useSWR(
    props.id ? `https://jsonplaceholder.typicode.com/users/${props.id}` : null,
    fetcher
  );

  if (!data && !error) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }
  return <div>Created by {data.name}</div>;
};
