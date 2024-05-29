import deleteData from "@/api/deleteData";
import getData from "@/api/getData";
import updateData from "@/api/updateData";
import postData from "@/api/postData";
import { User, UserCreate } from "@/types";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface UsersState {
  users: User[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  currentPage: number;
  perPage: number;
}

interface FetchUsersParams {
  page: number;
  per_page: number;
  name?: string;
}

export const fetchUsers = createAsyncThunk<
  User[],
  FetchUsersParams,
  { rejectValue: string }
>("users/fetchUsers", async ({ page, per_page, name }, { rejectWithValue }) => {
  try {
    let endpoint = `/public/v2/users?page=${page}&per_page=${per_page}`;
    if (name) {
      endpoint += `&name=${encodeURIComponent(name)}`; // Menambahkan parameter pencarian name jika tersedia
    }
    const response = await getData(endpoint);
    if (!response || !response.data) {
      throw new Error("Invalid response data");
    }
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.message || "An error occurred");
  }
});

export const createUser = createAsyncThunk<
  User,
  UserCreate,
  { rejectValue: string }
>("users/createUser", async (userData, { rejectWithValue }) => {
  try {
    const response = await postData(`/public/v2/users`, userData);
    if (!response || !response.data) {
      throw new Error("Invalid response data");
    }
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.message || "An error occurred");
  }
});

export const updateUser = createAsyncThunk<
  User,
  { userId: number; userData: User },
  { rejectValue: string }
>("users/updateUser", async ({ userId, userData }, { rejectWithValue }) => {
  console.log(userId, userData);

  try {
    const response = await updateData(`/public/v2/users/${userId}`, userData);
    if (!response || !response.data) {
      throw new Error("Invalid response data");
    }
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.message || "An error occurred");
  }
});

export const deleteUser = createAsyncThunk<
  number,
  number,
  { rejectValue: string }
>("users/deleteUser", async (userId, { rejectWithValue }) => {
  try {
    await deleteData(`/public/v2/users/${userId}`);
    return userId;
  } catch (error: any) {
    return rejectWithValue(error.message || "An error occurred");
  }
});

const initialState: UsersState = {
  users: [],
  status: "idle",
  error: null,
  currentPage: 1,
  perPage: 10,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
      .addCase(deleteUser.fulfilled, (state, action: PayloadAction<number>) => {
        state.users = state.users.filter((user) => user.id !== action.payload);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
      .addCase(updateUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.users = state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        );
        state.status = "succeeded";
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
      .addCase(createUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.users.push(action.payload);
        state.status = "succeeded";
      })
      .addCase(createUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export default usersSlice.reducer;
