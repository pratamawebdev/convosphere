import React, { useEffect } from "react";
import DetailPostLayout from "../elements/DetailPostLayout";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { fetchPostById } from "@/redux/slices/postsSlice";
import { useParams } from "next/navigation";
import CardBadge from "../elements/Badge";
import Image from "next/image";
import CommentLayout from "../elements/CommentLayout";

const DetailPost: React.FC = () => {
  const { postId } = useParams();
  const id = postId.toString();
  const dispatch = useAppDispatch();
  const selectedPost = useAppSelector((state) => state.posts.selectedPost);
  console.log(selectedPost);

  const postStatus = useAppSelector((state) => state.posts.status);
  const error = useAppSelector((state) => state.posts.error);

  useEffect(() => {
    if (id) {
      dispatch(fetchPostById(Number(id)));
    }
  }, [id, dispatch]);

  return (
    <DetailPostLayout title={`Post with id ${id}`}>
      <div className="flex flex-col gap-4 w-full">
        <CardBadge>Natural</CardBadge>
        <h1 className="text-3xl font-bold">{selectedPost?.title}</h1>
        <div className="items-center gap-5 flex">
          <div className="flex items-center gap-3">
            <Image
              src={"/images/public-avatar.webp"}
              width={36}
              height={36}
              alt="personal avatar"
              className="rounded-full border border-gray-300"
            />
            <span className="text-base md:text-lg font-medium text-[#97989F] lg:text-xl">
              Public People
            </span>
          </div>
          <div className="h-8 w-0.5 bg-[#97989F]" />
          <span className="text-[#97989F] text-base font-medium md:text-lg lg:text-xl">
            May 28, 2024
          </span>
        </div>
      </div>
      <div className="relative w-full h-[300px] mt-8 md:h-[500px] lg:h-[700px]">
        <Image
          src={"/images/card-static.webp"}
          alt="card image"
          fill
          className="object-cover"
          priority
        />
      </div>
      <p className="mt-8 font-medium text-black text-justify text-base md:text-lg lg:text-xl">
        {selectedPost?.body}
      </p>
      <CommentLayout comments={selectedPost?.comments} />
    </DetailPostLayout>
  );
};

export default DetailPost;
