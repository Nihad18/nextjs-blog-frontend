"use client";
import React from "react";
// formik 
import { Formik, Form } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
// style files
import "../auth.css";
// components
import Input from "@/components/shared/input/input";
// schemas
import { loginFormSchema } from "@/utils/schemas/auth";
// interfaces
import { ILoginForm } from "@/utils/interfaces/auth";

const Login = () => {
  const handleSubmit = async (values: ILoginForm, { setSubmitting, resetForm }) => {
    console.log(values);
    setSubmitting(false);
    resetForm({ values: "" });
  };

  return (
    <div className='form'>
      <h1 className='heading-text'>Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={toFormikValidationSchema(loginFormSchema)}
      >
        {({ errors, isSubmitting }) => (
          <Form>
            <Input
              label='Email'
              id='email'
              name='email'
              type='email'
              placeholder='email'
            />
            <div className='text-red'>{errors.email}</div>
            <Input
              label='Password'
              id='password'
              name='password'
              type='password'
              placeholder='password'
            />
            <div className='text-red'>{errors.password}</div>
            <button
              className='submit-button'
              type='submit'
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
