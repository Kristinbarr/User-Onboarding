import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import { Form, Field, withFormik } from 'formik'
// import * as Yup from 'yup'

const UserForm = (props) => {
  // { errors, touched, values, handleSubmit, status }
  // const [users, setUsers] = useState([])
  // console.log('users', users)

  return (
      <Form>
        <Field type='text' name='name' placeholder='Name' />
        <Field type='email' name='email' placeholder='Email' />
        <Field type='password' name='password' placeholder='Password' />
        <label>
          Terms of Service
          <Field type='checkbox' name='tos' />
          <span className='checkmark' />
        </label>
        <button>SUBMIT</button>
      </Form>

  )
}

// pass in 2 funcs on an obj to withFormik
const FormikUserForm = withFormik({
  // mapPropsToValues function initializes state and handlechange for form
  mapPropsToValues({ name, email, password, tos }) {
    return {
      name: name || '',
      email: email || '',
      password: password || '',
      tos: tos || false
    }
  },
  handleSubmit(values) {
    console.log('form submitted', values)
  }
})(UserForm)

export default FormikUserForm
