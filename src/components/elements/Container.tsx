import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container w-full mx-auto px-2 md:px-4">{children}</div>
  );
};

export default Container;
