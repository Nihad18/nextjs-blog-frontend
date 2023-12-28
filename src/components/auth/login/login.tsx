"use client";
import React from "react";
import { Formik, Form } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import "../auth.css";
import Input from "@/components/shared/input/input";

const loginFormSchema = z.object({
  // defines a required field called email.
  // we use the built-in email validator from zod
  email: z.string().email("Please enter a valid email"),
  // defines a required field called message with length constraints of 7-30 characters.
  password: z
    .string()
    .min(7)
    .max(30)
    .refine(
      (value: string) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{7,30}$/.test(value),
      {
        message:
          "Password too weak , password must have at least 1 uppercase,1 lowercase and 1 special character",
      }
    ),
});

const Login = () => {
  const handleSubmit = async (values: any, { setSubmitting, resetForm }) => {
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
