import { configureStore } from "@reduxjs/toolkit";
import commitsReducer from "../feature/commits/commitsSlice";
export const store = configureStore({
  reducer: {
    commits: commitsReducer,
  },
});
