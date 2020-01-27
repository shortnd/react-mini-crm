import React, { useState, useEffect } from "react";

export default function App() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(json => {
        setUsers(json.users)
      })
  }, [])

  return (
    <ul data-testid="users">
      {users.map(user => (
        <li key={user.id} data-testid={`user-${user.id}`}>
          {user.name}
        </li>
      ))}
    </ul>
  )
}
