import React from "react";
import { Button } from "./Button";
import CommentCard from "./CommentCard";
import { Comment } from "@/types";

interface CommentLayoutProps {
  comments?: Comment[];
}

const CommentLayout: React.FC<CommentLayoutProps> = (props) => {
  const { comments } = props;
  return (
    <section className="mt-16">
      <div className="md:flex md:items-center md:justify-between py-1 border-b-2">
        <h3 className="text-2xl font-bold">
          Comments{" "}
          <span className="text-lg text-gray-500">({comments?.length})</span>
        </h3>
        <Button className="hidden md:block">Add Comment</Button>
      </div>
      <div className="grid grid-cols-1 gap-2 mt-8">
        {comments &&
          comments.map((item) => (
            <CommentCard
              key={item.id}
              name={item.name}
              email={item.email}
              body={item.body}
            />
          ))}
      </div>
    </section>
  );
};

export default CommentLayout;
