import { ReactNode } from "react";
import TitleSection from "./TitleSection";

interface DetailPostProps {
  title: string;
  children: ReactNode;
}

const DetailPostLayout: React.FC<DetailPostProps> = ({ title, children }) => {
  return (
    <section className="mt-20 py-16 mb-32">
      <TitleSection title={title} />
      <div className="w-full grid mt-8 grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {children}
      </div>
    </section>
  );
};

export default DetailPostLayout;
