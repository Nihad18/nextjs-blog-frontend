import { Field, FieldProps } from "formik";
import { Input as AntInput } from "antd";

interface InputProps {
  label: string;
  name: string;
  id: string;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  component?: typeof AntInput;
  [key: string]: any;
}

const Input = (props: InputProps) => {
  const {
    label,
    name,
    id,
    className = "",
    labelClassName = "",
    inputClassName = "",
    component: Component = AntInput,
    ...rest
  } = props;

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${labelClassName}`}
      >
        {label}
      </label>
      <Field name={name}>
        {({ field }: FieldProps) => (
          <Component
            autoComplete="on"
            className={`shared-input ${inputClassName}`}
            {...field}
            {...rest}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
