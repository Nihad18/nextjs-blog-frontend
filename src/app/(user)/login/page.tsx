"use client";
import React from "react";
// formik
import { Formik, Form, FormikHelpers, FormikErrors } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
// style files
import "@/assets/styles/auth.css";
// components
import dynamic from "next/dynamic";
const Input = dynamic(() => import("@/components/shared/input/input"), {
  ssr: false,
});
import { Input as AntInput } from "antd";

// schemas
import { loginFormSchema } from "@/utils/schemas/auth";
// interfaces
import { ILoginForm } from "@/utils/interfaces/auth";
// services
import { LoginService } from "@/services/auth-service";

const LoginPage: React.FC = () => {
  const handleSubmit = async (
    values: ILoginForm,
    { setSubmitting, resetForm }: FormikHelpers<ILoginForm>
  ) => {
    console.log(values);
    const { loading, error, data } = await LoginService(values);
    if (error) {
      console.log(error);
    } else if (loading) {
      console.log(loading);
    }
    console.log(data);
    setSubmitting(false);
    resetForm();
  };

  return (
    <div className='form'>
      <h1 className='heading-text'>Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={toFormikValidationSchema(loginFormSchema)}
      >
        {({
          errors,
          isSubmitting,
        }: {
          errors: FormikErrors<ILoginForm>;
          isSubmitting: boolean;
        }) => (
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
              component={AntInput.Password}
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

export default LoginPage;
