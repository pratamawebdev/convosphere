import React, { useEffect } from "react";
import PostsLayouts from "../elements/PostsLayout";
import PostCard from "../elements/PostCard";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { fetchPosts } from "@/redux/slices/postsSlice";
import { truncateText } from "../../utils/truncateText";
import { ButtonLink } from "../elements/Button";

const OurPosts = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.posts);

  const postStatus = useAppSelector((state) => state.posts.status);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts({ page: 1, per_page: 6 }));
    }
  }, [postStatus, dispatch]);
  return (
    <PostsLayouts
      title="Our Posts"
      classname="mt-20"
      useButton={true}
      button={
        <ButtonLink href="/posts" ariaLabel="all posts">
          All Posts
        </ButtonLink>
      }
    >
      {posts.map((item) => (
        <PostCard
          key={item.id}
          title={truncateText(item.title, 40)}
          body={truncateText(item.body, 80)}
          href={`/post/${item.id}`}
        />
      ))}
    </PostsLayouts>
  );
};

export default OurPosts;
