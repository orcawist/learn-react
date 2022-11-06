import Link from "next/link";
import React from "react";
import { useUsers } from "src/hooks/useFetchArray";

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
    <ul className="grid grid-cols-3 gap-4">
      {data.map((user) => {
        return (
          <li key={user.id}>
            <Link
              href={`/users/${user.id}`}
              className="block p-2 shadow rounded hover:bg-gray-100"
            >
              <h2 className="text-bold">{user.name}</h2>
              <p className="text-sm">{user.email}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
