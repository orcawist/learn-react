import Link from "next/link";
import React from "react";
import { useUsers } from "src/hooks/useUsers";

export const Users = () => {
  const { data, error, isLoading, isEmpty } = useUsers();

  if (isLoading) {
    return <div>ローディング中です</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>データは空です</div>;
  }
  return (
    <ol>
      {data.map((user) => {
        return (
          <li key={user.id}>
            <h2>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </h2>
            <p>{user.email}</p>
          </li>
        );
      })}
    </ol>
  );
};
