type ErrorMessageProps = {
  title?: any;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ title }) => {
  return (
    <p className="text-[14px] leading-[21px] text-[#EA0000] mt-2">{title}</p>
  );
};

export default ErrorMessage;
