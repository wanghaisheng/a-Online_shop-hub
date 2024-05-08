import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categoryOfQuery/categorySlice";
import favoriteReducer from "./favorite/favoriteSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    favorite: favoriteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
