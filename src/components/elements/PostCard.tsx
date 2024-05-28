import Detail from "@/assets/icons/Detail";
import Link from "next/link";
import React from "react";

interface PostCardProps {
  title: string;
  body: string;
  href: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, body, href }) => {
  return (
    <div className="w-full rounded-[12px] p-4 shadow-lg border relative">
      <h2 className="font-semibold text-gray-400 text-xl">{title}</h2>
      <p className="font-semibold text-lg mt-4">{body}</p>
      <div className="mt-12">
        <Link href={href} className="absolute bottom-2 right-2 cursor-pointer">
          <Detail className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
