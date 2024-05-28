import React, { useEffect } from "react";
import PostsLayouts from "../elements/PostsLayout";
import PostCard from "../elements/PostCard";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { fetchPosts } from "@/redux/slices/postsSlice";
import { truncateText } from "../../utils/truncateText";

const OurPosts = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.posts);
  console.log(posts);

  const postStatus = useAppSelector((state) => state.posts.status);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);
  return (
    <PostsLayouts title="Our Posts">
      {posts.map((item) => (
        <PostCard
          key={item.id}
          title={item.title}
          body={truncateText(item.body, 80)}
          href={`/post/${item.id}`}
        />
      ))}
    </PostsLayouts>
  );
};

export default OurPosts;
