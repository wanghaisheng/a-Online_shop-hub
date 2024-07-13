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


  animationPingOnce: boolean;
};

const storedData = sessionStorage.getItem("myFavorite");  //checking if storedData isn't null

const initialState: FavoriteStateType = {
  myFavorite: storedData ? JSON.parse(storedData) : [],

  
  animationPingOnce: false,
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
      state.myFavorite = state.myFavorite.filter(
        (item) => item.id !== action.payload,
      );
      sessionStorage.setItem("myFavorite", JSON.stringify(state.myFavorite));
    },
    triggerPingOnceAnimation: (state) => {
      state.animationPingOnce = true;
    },
    resetPingOnceAnimation: (state) => {
      state.animationPingOnce = false;
    },
  },
});

//actions
export const {addingFavorite, deletingFavorite,
  triggerPingOnceAnimation,
  resetPingOnceAnimation,} = favoriteSlice.actions;

export default favoriteSlice.reducer;
