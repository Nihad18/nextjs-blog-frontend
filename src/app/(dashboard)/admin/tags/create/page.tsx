"use client";

import Link from "next/link";
import "@/assets/styles/admin.css";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Divider } from "antd";

import { Formik, Form, FormikHelpers, FormikErrors } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { ITagForm } from "@/utils/interfaces/admin";
import { tagFormSchema } from "@/utils/schemas/admin";
import Input from "@/components/shared/input/input";

export default function Tags() {
  const handleSubmit = async (
    values: ITagForm,
    { setSubmitting, resetForm }: FormikHelpers<ITagForm>
  ) => {
    console.log(values);
    // const { loading, error, data } = await LoginService(values);
    // if (error) {
    //   console.log(error);
    // } else if (loading) {
    //   console.log(loading);
    // }
    // console.log(data);
    setSubmitting(false);
    resetForm();
  };
  return (
    <main className='page'>
      <Breadcrumb
        className='breadcrumb'
        items={[
          {
            title: (
              <>
                <HomeOutlined />
                <Link href='/admin'>Admin</Link>
              </>
            ),
          },
          {
            title: <Link href='/admin/tags'>Tags</Link>,
          },
          {
            title: <span className=''>Create tag</span>,
          },
        ]}
      />
      <Divider className='bg-gray my-3' />
      <h1 className="head-text">Create tag</h1>
      <Formik
        initialValues={{ tagName: "" }}
        onSubmit={handleSubmit}
        validationSchema={toFormikValidationSchema(tagFormSchema)}
      >
        {({
          errors,
          isSubmitting,
        }: {
          errors: FormikErrors<ITagForm>;
          isSubmitting: boolean;
        }) => (
          <Form>
            <Input
              label='Tag name'
              id='tagName'
              name='tagName'
              type='text'
              placeholder='Tag name'
            />
            <div className='text-red'>{errors.tagName}</div>
            {/* <button
              className='submit-button'
              type='submit'
              disabled={isSubmitting}
            >
              Submit
            </button> */}
            <Button
              type='primary'
              htmlType="submit"
              disabled={isSubmitting}
              size='large'
            >
              Create tag
            </Button>
          </Form>
        )}
      </Formik>
    </main>
  );
}
