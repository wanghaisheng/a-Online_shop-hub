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





// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// const sessionStorageMiddleware = (store) => (next) => (action) => {
//   const result = next(action);
//   const state = store.getState();
//   sessionStorage.setItem(
//     "myFavorite",
//     JSON.stringify(state.favorite.myFavorite),
//   );
//   return result;
// };

//w store
// const store = configureStore({
//   reducer: {
//     favorite: favoriteReducer,
//   },
//   middleware: [...getDefaultMiddleware(), sessionStorageMiddleware],
// });



//z Clothing
//import { RootState} from "../../Global state/store";
//import { useSelector } from "react-redux";
//import SelectedClothing from "../../components/SelectedClothing/SelectedClothing";
//const chosedCategory = useSelector((state: RootState) => state.category.value);
//{/* {chosedCategory === "JEWELRY" && <QueryFetchedJewelry/>} */}

//z NavLinksHome
// import { RootState } from "@reduxjs/toolkit/query";
//import { useDispatch } from "react-redux";
//import { passingCategory } from "../../../Global state/categoryOfQuery/categorySlice";
// z typeTS  //query?: string;
// w funkcji komponentu 
// const handleClick = (category: AppDispatch) =>
//   dispatch(passingCategory(category));
//const dispatch = useDispatch();
//przy div w return -onClick={() => dispatch(passingCategory(query))}