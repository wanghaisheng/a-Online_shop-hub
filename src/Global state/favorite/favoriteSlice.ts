import { createSlice } from "@reduxjs/toolkit";

interface FavoriteType {
  id: number;
  description: string;
  image: string;
  title: string;
  price: number;
  category: string;
};

type FavoriteStateType = {
  myFavorite: FavoriteType[];
};

const storedData = sessionStorage.getItem("myFavorite");  //checking if storedData isn't null

const initialState: FavoriteStateType = { myFavorite: storedData ? JSON.parse(storedData) : [], 
};


const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addingFavorite: (state, action) => {
      state.myFavorite.push(action.payload);
      sessionStorage.setItem("myFavorite", JSON.stringify(state.myFavorite));
    },
    deletingFavorite: (state, action) => {
        state.myFavorite = state.myFavorite.filter(item => item.id !== action.payload);
        sessionStorage.setItem("myFavorite", JSON.stringify(state.myFavorite));
    },
  },
});

//actions
export const {addingFavorite, deletingFavorite} = favoriteSlice.actions;

export default favoriteSlice.reducer;
