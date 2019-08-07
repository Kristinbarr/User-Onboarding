import React, { useState } from 'react'
import { Form, Field } from 'formik'

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

// Name
// Email
// Password
// Terms of Service (checkbox)
// A Submit button to send our form data to the server.

export default UserForm
