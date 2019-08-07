import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'

const UserForm = ({ errors, touched, values, handleSubmit, status }) => {
  const [users, setUsers] = useState([])
  console.log('users', users)

  return (
    <div>
      <h2>User Onboarding Form</h2>
      <Form>
        <Field type='text' name='name' placeholder='Name' />
        <h4>Email</h4>
        <Field type='email' name='email' placeholder='Email' />
        <h4>Password</h4>
        <Field type='password' name='password' placeholder='Password' />
        Terms of Service
        <Field type='checkbox' name='tos' checked={values.tos} />
        <button>SUBMIT</button>
      </Form>
    </div>
  )
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ name, email, password, tos }) {
    return {
      name: name || '',
      email: email || '',
      password: password ||'',
      tos: tos || false
    }
  }
})(UserForm)

// Name
// Email
// Password
// Terms of Service (checkbox)
// A Submit button to send our form data to the server.

export default UserForm
