import { createSlice } from "@reduxjs/toolkit";

type CategoryStateType = {
  value: string;
};

const initialState: CategoryStateType = {
  value: "",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    //equivalent syntax -> passingCategory(state, action){}
    passingCategory: (state, action) => {
      state.value = action.payload;
    },
  },
});


//actions
export const {passingCategory} = categorySlice.actions;



export default categorySlice.reducer;
