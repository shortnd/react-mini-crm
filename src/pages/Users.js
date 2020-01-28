import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Layout from "../layouts/Layout"

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(json => setUsers(json.users))
  }, []);

  return (
    <Layout>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Users
