import { Field, FieldProps } from "formik";
import { Input as AntInput } from "antd";

const Input = (props: any) => {
  const { label, name, id, component: Component = AntInput, ...rest } = props;

  return (
    <div>
      <label
        htmlFor={id}
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
      >
        {label}
      </label>
      <Field name={name}>
        {({ field }: FieldProps) => (
          <Component
            autoComplete='true'
            className='
            text-dark-gray
             focus:border-blue w-full p-2.5 dark:bg-gray
             dark:border-gray dark:placeholder-lite-gray dark:text-white 
             dark:focus:ring-blue dark:focus:border-blue'
            {...field}
            {...rest}
            onChange={(e) => {
              field.onChange(e);
              if (rest.onChange) {
                rest.onChange(e);
              }
            }}
          />
        )}
      </Field>
    </div>
  );
};

export default Input;
