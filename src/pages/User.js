import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom";

import Layout from "../layouts/Layout"
const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState({})

  function getUser(id) {
    fetch(`/api/users/${id}`)
      .then(res => res.json())
      .then(json => {
        setUser(json.user)
      })
  }

  useEffect(() => {
    getUser(id)
  }, [id])

  return (
    <Layout>
      <h1>{user.name}</h1>
      <br />
      <Link to={`/users/${user.id}/edit`}>Edit</Link> | <Link to={`/users/${user.id}/delete`}>Delete</Link>
    </Layout>
  )
}

export default User
