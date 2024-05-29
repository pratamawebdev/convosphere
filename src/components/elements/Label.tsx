interface LabelProps {
  htmlFor?: string;
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

const Label: React.FC<LabelProps> = (props) => {
  const { htmlFor, id, className, children } = props;
  return (
    <label htmlFor={htmlFor} id={id} className={className}>
      {children}
    </label>
  );
};

export default Label;
