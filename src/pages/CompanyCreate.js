import React, { useState } from "react";

import Layout from "../layouts/Layout"

const CreateCompany = () => {
  const [company, setCompany] = useState({
    name: '',
    email: '',
    logo: '',
    website: ''
  });

  function create(e) {
    e.preventDefault();
    fetch(`/companies`, {
      method: "POST",
      body: JSON.stringify(company)
    }).then(res => console.log(res))
  }

  function handleInput({ target: { name, value } }) {
    setCompany({
      ...company,
      [name]: value
    })
  }
  return (
    <Layout>
      <h2>Create Company</h2>
      {JSON.stringify(company)}
      <form method="POST" onSubmit={e => create(e)}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" onChange={handleInput}/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={handleInput}/>
        </div>
        <div>
          <label htmlFor="logo">Logo</label>
          <input type="text" name="logo" id="logo" onChange={handleInput} />
        </div>
        <div>
          <label htmlFor="website">Website</label>
          <input type="url" name="website" id="website" onChange={handleInput}/>
        </div>
        <div>
          <button type="submit">Add Company</button>
        </div>
      </form>
    </Layout>
  )
}

export default CreateCompany;
