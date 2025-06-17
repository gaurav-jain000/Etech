import React from "react";
import { Link } from "react-router";

export default function Header() {
  return <header></header>;
}

export function Logo() {
  return (
    <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white">
      Etech
    </Link>
  );
}
