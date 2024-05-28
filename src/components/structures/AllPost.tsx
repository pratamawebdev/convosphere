/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import PostsLayouts from "../elements/PostsLayout";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { fetchPosts } from "@/redux/slices/postsSlice";
import PostCard from "../elements/PostCard";
import { truncateText } from "@/utils/truncateText";
import Pagination from "../elements/Pagination";

const AllPost = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.posts);
  const postStatus = useAppSelector((state) => state.posts.status);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 6;

  useEffect(() => {
    if (postStatus === "idle" || postStatus === "succeeded") {
      dispatch(fetchPosts({ page: currentPage, per_page: perPage }));
    }
  }, [dispatch, currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <PostsLayouts
      title="All Posts"
      useButton={true}
      button={
        <Pagination
          prevOnClick={handlePrevPage}
          nextOnClick={handleNextPage}
          disabledPrev={currentPage === 1}
          disabledNext={posts.length < perPage}
          currentPage={currentPage}
        />
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

export default AllPost;
