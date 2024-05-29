import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

interface FormFieldProps {
  children: React.ReactNode;
  htmlFor?: string;
  id?: string;
  classNameLabel?: string;
  name?: string;
  type?: "text" | "number" | "password" | "email";
  placeholder?: string;
  classNameInput?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
}

const FormField: React.ForwardRefRenderFunction<
  HTMLInputElement,
  FormFieldProps
> = (
  {
    children,
    htmlFor,
    id,
    classNameLabel,
    name,
    type = "text",
    placeholder,
    classNameInput,
    onChange,
    value,
  },
  ref
) => {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={htmlFor} id={id} className={classNameLabel}>
        {children}
      </Label>
      <Input
        ref={ref}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className={classNameInput}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default forwardRef(FormField);
