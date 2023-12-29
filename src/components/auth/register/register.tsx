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
import { registerFormSchema } from "@/utils/schemas/auth";
// interfaces
import { IRegisterForm } from "@/utils/interfaces/auth";

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
