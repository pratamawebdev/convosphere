import { ReactNode } from "react";
import TitleSection from "./TitleSection";

interface DetailPostProps {
  title: string;
  children: ReactNode;
}

const DetailPostLayout: React.FC<DetailPostProps> = ({ title, children }) => {
  return (
    <section className="py-16">
      <TitleSection title={title} />
      <div className="w-full mt-8 ">{children}</div>
    </section>
  );
};

export default DetailPostLayout;
