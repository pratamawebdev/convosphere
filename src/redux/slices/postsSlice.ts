import getData from "@/api/getData";
import { Comment, Post } from "@/types";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface PostWithComments extends Post {
  comments?: Comment[];
}

interface PostsState {
  posts: Post[];
  selectedPost: PostWithComments | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  currentPage: number;
  perPage: number;
}

interface FetchPostsParams {
  page: number;
  per_page: number;
}
export const fetchPosts = createAsyncThunk<
  Post[],
  FetchPostsParams,
  { rejectValue: string }
>("posts/fetchPosts", async ({ page, per_page }, { rejectWithValue }) => {
  try {
    const response = await getData(
      `/public/v2/posts?page=${page}&per_page=${per_page}`
    );
    if (!response || !response.data) {
      throw new Error("Invalid response data");
    }
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.message || "An error occurred");
  }
});
export const fetchPostById = createAsyncThunk<
  PostWithComments,
  number,
  { rejectValue: string }
>("posts/fetchPostById", async (postId, { rejectWithValue }) => {
  try {
    const postResponse = await getData(`/public/v2/posts/${postId}`);
    if (!postResponse || !postResponse.data) {
      throw new Error("Invalid post response data");
    }

    const commentsResponse = await getData(
      `/public/v2/posts/${postId}/comments`
    );
    if (!commentsResponse || !commentsResponse.data) {
      throw new Error("Invalid comments response data");
    }

    const postWithComments: PostWithComments = {
      ...postResponse.data,
      comments: commentsResponse.data,
    };

    return postWithComments;
  } catch (error: any) {
    return rejectWithValue(error.message || "An error occurred");
  }
});

const initialState: PostsState = {
  posts: [],
  selectedPost: null,
  status: "idle",
  error: null,
  currentPage: 1,
  perPage: 10,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
      .addCase(fetchPostById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchPostById.fulfilled,
        (state, action: PayloadAction<PostWithComments>) => {
          state.status = "succeeded";
          state.selectedPost = action.payload;
        }
      )
      .addCase(fetchPostById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export default postsSlice.reducer;
