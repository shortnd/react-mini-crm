import React, { useState } from "react"
import { useHistory } from "react-router-dom";

import Layout from "../layouts/Layout"

const CreateUser = () => {
  const [name, setName] = useState("");
  const history = useHistory();

  const addUser = () => {
    fetch("/api/users", {
      method: "POST",
      body: {
        name: name
      }
    }).then(() => {
      history.replace("/users");
    });
  }

  return (
    <Layout>
      <h2>Create User</h2>
      <h3>{name}</h3>
      <form method="POST" onSubmit={(event) => {
        event.preventDefault()
        addUser()
      }}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="name" onChange={({ target: { value } }) => setName(value)} />
        <button type="submit">Add User</button>
        <button type="reset" onClick={(e) => {
          e.preventDefault();
          history.goBack();
        }}>Cancel</button>
      </form>
    </Layout>
  )
};

export default CreateUser
