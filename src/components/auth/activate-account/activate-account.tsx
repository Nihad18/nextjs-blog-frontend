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
import { otpCodeFormSchema } from "@/utils/schemas/auth";
const ActivateAccount = () => {
  const handleSubmit = async (
    values,
    { setSubmitting, resetForm }
  ) => {
    console.log(values);
    setSubmitting(false);
    resetForm({ values: "" });
  };

  return (
    <div className='form'>
      <h1 className='heading-text'>Activate account</h1>
      <Formik
        initialValues={{ otpCode: "", }}
        onSubmit={handleSubmit}
        validationSchema={toFormikValidationSchema(otpCodeFormSchema)}
      >
        {({ errors, isSubmitting }) => (
          <Form>
            <Input
              label='Otp code'
              id='otpCode'
              name='otpCode'
              type='text'
              placeholder='otp code'
            />
            <div className='text-red'>{errors.otpCode}</div>
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

export default ActivateAccount;
