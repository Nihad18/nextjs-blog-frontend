"use client";

//antd
import { Button, Divider } from "antd";
//formik
import { Formik, Form, FormikHelpers, FormikErrors } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
//utils
import { ITagForm } from "@/utils/interfaces/admin";
import { tagFormSchema } from "@/utils/schemas/admin";
//components
import Input from "@/components/shared/input/input";
import BreadCrumb from "@/components/shared/breadcrumb";

export default function Tags() {
  const handleSubmit = async (
    values: ITagForm,
    { setSubmitting, resetForm }: FormikHelpers<ITagForm>
  ) => {
    console.log(values);
    setSubmitting(false);
    resetForm();
  };
  return (
    <main className='page'>
      <BreadCrumb />
      <Divider className='dark:bg-white my-3' />
      <h1 className='head-text'>Create tag</h1>
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
            <Button
              type='primary'
              className='dark:bg-violet-700 dark:hover:!bg-violet-600'
              htmlType='submit'
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
