import React, { ReactNode } from "react";
import TitleSection from "./TitleSection";

interface PostsLayoutsProps {
  title: string;
  children: ReactNode;
  classname?: string;
  button?: ReactNode;
  useButton?: boolean;
}

const PostsLayouts: React.FC<PostsLayoutsProps> = ({
  title,
  children,
  classname,
  button,
  useButton = false,
}) => {
  return (
    <section className={`py-16 mb-32 ${classname}`}>
      <TitleSection title={title} />
      <div className="w-full grid mt-8 grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3">
        {children}
      </div>
      {useButton && <div className="flex justify-center mt-8">{button}</div>}
    </section>
  );
};

export default PostsLayouts;
