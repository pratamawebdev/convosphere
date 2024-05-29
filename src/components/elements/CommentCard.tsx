import Image from "next/image";
import React from "react";

interface CommentCardProps {
  name: string;
  email: string;
  body: string;
}

const CommentCard: React.FC<CommentCardProps> = (props) => {
  const { name, email, body } = props;
  return (
    <div className="p-2 bg-white shadow-md rounded-xl">
      <div className="flex flex-col gap-4">
        <span className="flex items-center gap-2">
          <Image
            src={"/images/public-avatar.webp"}
            width={50}
            height={50}
            alt="personal avatar"
            className="rounded-full border-[2px]"
          />
          <span className="flex flex-col">
            <span className="text-base font-semibold">{name}</span>
            <span className="text-[#97989F] hidden sm:block">{email}</span>
          </span>
        </span>
        <p className="text-base">{body}</p>
      </div>
    </div>
  );
};

export default CommentCard;
