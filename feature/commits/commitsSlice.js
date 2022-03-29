import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  commits: [],
  repo: "",
  loading: false,
};

export const commitsSlice = createSlice({
  name: "commits",
  initialState,
  reducers: {
    updateCommits: (state, { payload }) => {
      state.commits = payload;
    },

    updateRepo: (state, { payload }) => {
      state.repo = payload;
    },
    updateLoading: (state, { payload }) => {
      state.loading = payload;
    },
  },
});

export const { updateCommits, updateRepo, updateLoading } =
  commitsSlice.actions;

export default commitsSlice.reducer;
