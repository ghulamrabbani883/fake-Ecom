import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  singleUser: {},
  auth: null,
  status: "idle",
  error: null,
};
const BASE_URL = "https://fakestoreapi.com/users";

export const fetchAllUsers = createAsyncThunk(
  "users/fetchAllUsers",
  async () => {
    try {
      const res = await axios.get(BASE_URL);
      return res.data;
    } catch (error) {
      initialState.error = error;
    }
  }
);

export const fetchUserById = createAsyncThunk(
  "users/fetchUserById",
  async (id) => {
    try {
      const res = await axios.get(BASE_URL + "/" + id);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return error;
    }
  }
);

export const createUser = createAsyncThunk("users/createUser", async (user) => {
  try {
    const res = await axios.post(BASE_URL, user);
    return res.data;
  } catch (error) {
    initialState.error = error;
  }
});
export const updateUser = createAsyncThunk("users/updateUser", async (user) => {
  try {
    const res = await axios.put(BASE_URL, user);
    return res.data;
  } catch (error) {
    initialState.error = error;
  }
});

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  try {
    const res = await axios.delete(BASE_URL + "/" + id);
    return res.data;
  } catch (error) {
    initialState.error = error;
  }
});

export const loginUser = createAsyncThunk("users/login", (credentials) => {
  fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    body: JSON.parse({
      username: credentials.userName,
      password: credentials.password,
    }),
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
});
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.status = "idle";
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.error = action.error;
        state.status = "idle";
      });
    builder
      .addCase(fetchUserById.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.singleUser = action.payload;
        state.status = "idle";
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.error = action.error;
        state.status = "idle";
      });
    builder
      .addCase(createUser.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.singleUser = action.payload;
        state.status = "idle";
      })
      .addCase(createUser.rejected, (state, action) => {
        state.error = action.error;
        state.status = "idle";
      });
    builder
      .addCase(updateUser.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.singleUser = action.payload;
        state.status = "idle";
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.error = action.error;
        state.status = "idle";
      });
    builder
      .addCase(deleteUser.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.singleUser = action.payload;
        state.status = "idle";
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.error = action.error;
        state.status = "idle";
      });
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.auth = action.payload;
        state.status = "idle";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error;
        state.status = "idle";
      });
  },
});

export const getAllUser = (state) => state.users.users;
export const getSingleUser = (state) => state.users.singleUser;
export const getUserStatus = (state) => state.users.status;
export const getUserError = (state) => state.users.error;
export const getUserAuth = (state) => state.users.auth;

export default userSlice.reducer;
