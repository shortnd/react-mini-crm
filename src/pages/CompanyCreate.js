import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Layout from "../layouts/Layout"

const CreateCompany = () => {
  const history = useHistory();
  return (
    <Layout>
      <h2>Create Company</h2>
      <Formik
        initialValues={{
          name: '',
          email: '',
          logo: '',
          website: ''
        }}
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
          fetch(`/api/companies`, {
            method: 'POST',
            body: values
          }).then(res => {
            console.log(res)
            setSubmitting(false);
            history.push("/companies");
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
}

export default CreateCompany;
