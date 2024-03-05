import { configureStore } from "@reduxjs/toolkit";
import searchData from "./slice/searchSlice";

export const store = configureStore({
  reducer: {
    data: searchData,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
