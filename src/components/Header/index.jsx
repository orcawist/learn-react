import Link from "next/link";
import React from "react";

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/posts", label: "Posts" },
  { href: "/users", label: "Users" },
  { href: "/comments", label: "Comments" },
];

export const Header = () => {
  return (
    <header>
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href}>
            <p>{item.label}</p>
          </Link>
        );
      })}
    </header>
  );
};
