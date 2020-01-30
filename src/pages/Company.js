import React, { useState, useEffect } from "react";
import Layout from "../layouts/Layout";
import { useParams, Link } from "react-router-dom";

const Company = () => {
  const { id } = useParams();
  const [company, setCompany] = useState({});
  useEffect(() => {
    fetch(`/api/companies/${id}`)
      .then(res => res.json())
      .then(json => setCompany(json.company))
  }, [id]);
  return (
    <Layout>
      {company.name ? (
        <>
          <h2>{company.name}</h2>
          {company.logo && (
            <img src={company.logo} alt={`${company.name} logo`} />
          )}
          <h3>Contact Email: <a href={`mailto:${company.email}`}>{company.email}</a></h3>
          <a href={company.website} target="_blank" rel="noopener noreferrer">{company.website}</a>
          <br />
          <Link to={`/companies/${company.id}/edit`}>Edit</Link> |
          <Link to={`/companies/${company.id}/delete`}>Delete</Link>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </Layout>
  )
}

export default Company
