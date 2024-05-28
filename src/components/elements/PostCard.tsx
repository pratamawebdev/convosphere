import Detail from "@/assets/icons/Detail";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CardBadge from "./CardBadge";

interface PostCardProps {
  title: string;
  body: string;
  href: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, body, href }) => {
  return (
    <div className="w-full rounded-[12px] p-4 shadow-lg border relative">
      <div className="flex flex-col gap-4">
        <div className="relative">
          <div className="relative w-full h-[240px]">
            <Image
              src={"/images/card-static.webp"}
              fill
              alt="card image"
              className="object-cover"
              sizes="(100vw, 100vh)"
              priority
            />
          </div>
          <CardBadge variant="secondary" className="absolute top-2 left-2">
            Natural
          </CardBadge>
        </div>
        <div className=" flex flex-col gap-4 h-36">
          <h2 className="font-semibold text-gray-400 text-xl">{title}</h2>
          <p className="font-semibold text-lg">{body}</p>
        </div>
        <div className="mt-12 sm:mt-4 flex items-center justify-end sm:justify-between">
          <div className="items-center gap-5 hidden sm:flex">
            <div className="flex items-center gap-3">
              <Image
                src={"/images/public-avatar.webp"}
                width={36}
                height={36}
                alt="personal avatar"
                className="rounded-full border border-gray-300"
              />
              <span className="text-base font-medium text-[#97989F]">
                Public People
              </span>
            </div>
            <span className="text-[#97989F] text-base font-medium">
              May 28, 2024
            </span>
          </div>
          <Link href={href} aria-label="read more" className="cursor-pointer">
            <Detail className="w-8 h-8" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
