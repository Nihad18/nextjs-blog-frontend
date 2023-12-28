import React from "react";
import { Field } from "formik";
const Input = (props: any) => {
  return (
    <div>
      <label
        htmlFor={props.id}
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
      >
        {props.label}
      </label>
      <Field
        {...props}
        className='bg-lite-gray border border-lite-gray 
        text-dark-gray sm:text-sm rounded-lg focus:ring-blue
         focus:border-blue block w-full p-2.5 dark:bg-gray 
         dark:border-gray dark:placeholder-lite-gray dark:text-white 
         dark:focus:ring-blue dark:focus:border-blue'
        required={true}
      />
    </div>
  );
};

export default Input;
