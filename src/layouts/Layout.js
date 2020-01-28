import React from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
      </header>
      <main>
        {children}
      </main>
    </>
  )
}
