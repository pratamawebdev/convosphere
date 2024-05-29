import { MouseEventHandler, ReactNode } from "react";
import TitleSection from "./TitleSection";
import { Button } from "./Button";

interface UserLayoutPostProps {
  title: string;
  children: ReactNode;
  pagination?: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const UserLayout: React.FC<UserLayoutPostProps> = ({
  title,
  children,
  pagination,
  onClick,
}) => {
  return (
    <section className="py-16">
      <div className="flex items-center justify-between">
        <TitleSection title={title} />
        <div className="flex items-center gap-2">
          <Button onClick={onClick}>Add New</Button>
        </div>
      </div>
      <div className="w-full mt-8 overflow-x-auto select-none">{children}</div>
      <div className="flex justify-center mt-8">{pagination}</div>
    </section>
  );
};

export default UserLayout;
