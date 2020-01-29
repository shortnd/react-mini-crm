import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import Layout from "../layouts/Layout"

const DeleteUser = () => {
  const { id } = useParams();
  const history = useHistory();
  const [user, setUser] = useState({});

  function removeUser(e, id) {
    e.preventDefault()
    fetch(`/api/users/${id}/delete`, {
      method: 'DELETE'
    })
      .then(res => {
        alert(`${user.name} was deleted!`);
        history.push("/users")
      })
  };

  useEffect(() => {
    fetch(`/api/users/${id}`)
      .then(res => res.json())
      .then(json => {
        setUser(json.user)
      })
  }, [id]);

  return (
    <Layout>
      <h2>Delete {user.name || ''}</h2>
      <form method="POST" onSubmit={(e) => removeUser(e, user.id)}>
        <button type="submit">Delete</button>
      </form>
    </Layout>
  )
}

export default DeleteUser
