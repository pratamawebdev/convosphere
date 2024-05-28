import React, { useEffect } from "react";
import DetailPostLayout from "../elements/DetailPostLayout";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { fetchPostById } from "@/redux/slices/postsSlice";
import { useParams } from "next/navigation";

const DetailPost: React.FC = () => {
  const { postId } = useParams();
  const id = postId.toString();
  console.log(id);
  const dispatch = useAppDispatch();
  const selectedPost = useAppSelector((state) => state);
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
      {/* <h1>{title}</h1>
            <p>{body}</p> */}
    </DetailPostLayout>
  );
};

export default DetailPost;
