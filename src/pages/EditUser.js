import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

import Layout from "../layouts/Layout";

const EditUser = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  function getUser(id) {
    fetch(`/api/users/${id}`)
      .then(res => res.json())
      .then(json => {
        setUser(json.user)
      })
  }

  function updateUser() {
    fetch(`/api/users/${id}`, {
      method: 'POST',
      body: user
    }).then(res => {
      console.log(res)
    })
  }

  function updateInput({target}) {
    const {name, value} = target
    setUser({
      [name]: value
    })
  }

  useEffect(() => {
    getUser(id)
  }, [id])

  return (
    <Layout>
      <h1>Edit User: {user.name}</h1>
      <form method="POST" onSubmit={(e) => {
        e.preventDefault();
        updateUser()
      }}>
        <input type="text" name="name" value={user.name || ''} onChange={updateInput} />
        <button type="submit">Update {user.name || ''}</button>
      </form>
    </Layout>
  );
}

export default EditUser;
