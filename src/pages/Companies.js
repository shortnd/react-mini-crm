import React, { useState, useEffect } from "react";

import Layout from "../layouts/Layout";
import { Link } from "react-router-dom";

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch('/api/companies')
      .then(res => res.json())
      .then(json => setCompanies(json.companies))
  }, []);

  return (
    <Layout>
      <h2>Companies</h2>
      <Link to="/companies/create">Add Company</Link>
      {companies.length ? (
        <ul>
          {companies.map(company => (
            <li key={company.id}><Link to={`/companies/${company.id}`}>{company.name}</Link></li>
          ))}
        </ul>
      ) : (
        <h3>No Companies</h3>
      )}
    </Layout>
  )
}

export default Companies;
