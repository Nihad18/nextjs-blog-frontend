"use client";
import React from "react";
import { Formik, Form } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import "../auth.css";
import Input from "@/components/shared/input/input";

interface IRegisterForm {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const registerFormSchema = z
  .object({
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
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{7,30}$/.test(value),
        {
          message:
            "Password too weak , password must have at least 1 uppercase,1 lowercase and 1 special character",
        }
      ),
    confirmPassword: z.string().min(7).max(30),
  })
  .refine((values: IRegisterForm) => values.password === values.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const Register = () => {
  const handleSubmit = async (
    values: IRegisterForm,
    { setSubmitting, resetForm }
  ) => {
    console.log(values);
    setSubmitting(false);
    resetForm({ values: "" });
  };

  return (
    <div className='form'>
      <h1 className='heading-text'>Register</h1>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={toFormikValidationSchema(registerFormSchema)}
      >
        {({ errors, isSubmitting }) => (
          <Form>
            <Input
              label='Full name'
              id='fullName'
              name='fullName'
              type='text'
              placeholder='full name'
            />
            <div className='text-red'>{errors.fullName}</div>
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
            <Input
              label='Confirm password'
              id='confirmPassword'
              name='confirmPassword'
              type='password'
              placeholder='confirm password'
            />
            <div className='text-red'>{errors.confirmPassword}</div>
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

export default Register;
