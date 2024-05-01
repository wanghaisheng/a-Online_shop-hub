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