"use client";
import React from "react";
import { Formik, Form } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import "../auth.css";
import Input from "@/components/shared/input/input";

const registerFormSchema = z.object({
  // defines a required field called message with length constraints of 3-50 characters.
  fullName: z.string().min(3).max(50),
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
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(value),
      {
        message:
          "Password too weak , password must have at least 1 uppercase,1 lowercase and 1 special character",
      }
    ),
});

const Register = () => {
  const handleSubmit = async (values: any) => {
    console.log(values);
  };

  return (
    <div className='form'>
      <h1 className='heading-text'>Register</h1>
      <Formik
        initialValues={{ fullName: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={toFormikValidationSchema(registerFormSchema)}
      >
        {({ errors }) => (
          <Form>
            <Input label='Your full name' id='fullName' name='fullName' type='text' />
            <Input label='Your email' id='email' name='email' type='email' />
            <div className='text-red'>{errors.email}</div>
            <Input
              label='Your password'
              id='password'
              name='password'
              type='password'
            />
            <div className='text-red'>{errors.password}</div>
            <button className='submit-button' type='submit'>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
