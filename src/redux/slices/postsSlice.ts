import getData from "@/api/getData";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Post {
  id: number;
  user_id: number;
  title: string;
  body: string;
}

interface PostsState {
  posts: Post[];
  selectedPost: Post | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export const fetchPosts = createAsyncThunk<
  Post[],
  void,
  { rejectValue: string }
>("posts/fetchPosts", async (_, { rejectWithValue }) => {
  try {
    const response = await getData("/public/v2/posts?page=1&per_page=20");
    if (!response || !response.data) {
      throw new Error("Invalid response data");
    }
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.message || "An error occurred");
  }
});

export const fetchPostById = createAsyncThunk<
  Post,
  number,
  { rejectValue: string }
>("posts/fetchPostById", async (postId, { rejectWithValue }) => {
  try {
    const response = await getData(`/public/v2/posts/${postId}`);
    if (!response || !response.data) {
      throw new Error("Invalid response data");
    }
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.message || "An error occurred");
  }
});

// export const addPost = createAsyncThunk<Post, Partial<Post>>(
//   "posts/addPost",
//   async (newPost) => {
//     const response = await axios.post(API_URL, newPost, {
//       headers: {
//         Authorization: `Bearer ${API_KEY}`,
//       },
//     });
//     return response.data;
//   }
// );

// export const updatePost = createAsyncThunk<Post, Post>(
//   "posts/updatePost",
//   async (updatedPost) => {
//     const response = await axios.put(
//       `${API_URL}/${updatedPost.id}`,
//       updatedPost,
//       {
//         headers: {
//           Authorization: `Bearer ${API_KEY}`,
//         },
//       }
//     );
//     return response.data;
//   }
// );

// export const deletePost = createAsyncThunk<number, number>(
//   "posts/deletePost",
//   async (postId) => {
//     await axios.delete(`${API_URL}/${postId}`, {
//       headers: {
//         Authorization: `Bearer ${API_KEY}`,
//       },
//     });
//     return postId;
//   }
// );

const initialState: PostsState = {
  posts: [],
  selectedPost: null,
  status: "idle",
  error: null,
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
        (state, action: PayloadAction<Post>) => {
          state.status = "succeeded";
          state.selectedPost = action.payload;
        }
      )
      .addCase(fetchPostById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
    //   .addCase(addPost.fulfilled, (state, action: PayloadAction<Post>) => {
    //     state.posts.push(action.payload);
    //   })
    //   .addCase(updatePost.fulfilled, (state, action: PayloadAction<Post>) => {
    //     const index = state.posts.findIndex(
    //       (post) => post.id === action.payload.id
    //     );
    //     if (index !== -1) {
    //       state.posts[index] = action.payload;
    //     }
    //   })
    //   .addCase(deletePost.fulfilled, (state, action: PayloadAction<number>) => {
    //     state.posts = state.posts.filter((post) => post.id !== action.payload);
    //   });
  },
});

export default postsSlice.reducer;
