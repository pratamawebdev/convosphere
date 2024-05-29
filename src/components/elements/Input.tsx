import { forwardRef } from "react";

interface InputProps {
  id?: string;
  name?: string;
  type?: "text" | "number" | "password" | "email";
  placeholder?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { id, name, type, placeholder, className, onChange, value, ...props },
  ref
) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
      value={value}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Input);
