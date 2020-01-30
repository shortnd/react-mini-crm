import React, { useState, useEffect } from "react";
import Layout from "../layouts/Layout";
import { useParams, useHistory } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"

const EditCompany = () => {
    const { id } = useParams();
    const history = useHistory();
    const [company, setCompany] = useState({})

    useEffect(() => {
      fetch(`/api/companies/${id}`)
        .then(res => res.json())
        .then(json => setCompany(json.company))
    }, [id])

    return (
      <Layout>
        <h2>Edit {company.name || '' }</h2>
        <Formik
          initialValues={{
            name: `${company.name || ''}`,
            email: `${company.email || ''}`,
            logo: `${company.logo || ''}`,
            website: `${company.website || ''}`
          }}
          enableReinitialize={true}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            email: Yup.string()
              .email("Invalid email address")
              .required('Required'),
            logo: Yup.string()
              .url("Must be a valid url"),
            website: Yup.string()
              .url("Must be a valid url")
              .required("Required")
          })}
          onSubmit={(values, { setSubmitting }) => {
            fetch(`/api/companies/${company.id}`, {
              method: "PUT",
              body: values
            }).then(_ => {
              history.push(`/companies/${company.id}`)
              setSubmitting(false)
            }).catch(err => {
              alert("Error submitting form");
              setSubmitting(false)
            })
          }}>
            <Form>
            <div>
                <label htmlFor="name">Name</label>
                <Field name="name" type="text" required />
                <small style={{
                  color: 'red',
                  display: 'block'
                }}>
                  <ErrorMessage name="name" />
                </small>
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <Field name="email" type="email" required />
                <small style={{
                  color: 'red',
                  display: 'block'
                }}>
                  <ErrorMessage name="email" />
                </small>
              </div>
              <div>
                <label htmlFor="logo">Logo</label>
                <Field name="logo" type="url" />
                <small style={{
                  color: 'red',
                  display: 'block'
                }}>
                  <ErrorMessage name="logo" />
                </small>
              </div>
              <div>
                <label htmlFor="website">Website</label>
                <Field name="website" type="url" />
                <small style={{
                  color: 'red',
                  display: 'block'
                }}>
                  <ErrorMessage name="website" />
                </small>
              </div>
              <div>
                <button type="submit">Save Company</button>
              </div>
            </Form>
        </Formik>
      </Layout>
    )
};

export default EditCompany;
