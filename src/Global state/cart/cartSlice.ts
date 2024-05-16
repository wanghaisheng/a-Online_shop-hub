import { createSlice } from "@reduxjs/toolkit";

interface CartType {
  id: number;
  description: string;
  image: string;
  title: string;
  price: number;
  category: string;
  productQuantity: number;
}

type CartStateType = {
  myCart: CartType[];
  cartQuantity: number;
  cartTotalAmount: number;
};

const storedData = sessionStorage.getItem("myCart"); //checking if storedData in myCart isn't null

const initialState: CartStateType = {
  myCart: storedData ? JSON.parse(storedData) : [],
  cartQuantity: storedData
    ? JSON.parse(storedData).reduce(
        (acc: number, item: CartType) => acc + item.productQuantity,
        0,
      )
    : 0,
  cartTotalAmount: storedData
    ? JSON.parse(storedData).reduce(
        (acc: number, item: CartType) =>
          acc + item.productQuantity * item.price,
        0,
      )
    : 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addingProductToCart: (state, action) => {
      const productIndex = state.myCart.findIndex(
        (p) => p.id === action.payload.id,
      );
      if (productIndex >= 0) {
        state.myCart[productIndex].productQuantity += 1;
      } else {
        //adding new property to state productQuantity with default value
        const product = { ...action.payload, productQuantity: 1 };
        state.myCart.push(product);
      }
      state.cartQuantity = state.myCart.reduce(
        (acc, item) => acc + item.productQuantity,
        0,
      );
      state.cartTotalAmount = state.myCart.reduce(
        (acc, item) => acc + item.productQuantity * item.price,
        0,
      );
      sessionStorage.setItem("myCart", JSON.stringify(state.myCart));
    },
    deletingProductFromCart: (state, action) => {
      state.myCart = state.myCart.filter((item) => item.id !== action.payload);
      state.cartQuantity = state.myCart.reduce(
        (acc, item) => acc + item.productQuantity,
        0,
      );
      state.cartTotalAmount = state.myCart.reduce(
        (acc, item) => acc + item.productQuantity * item.price,
        0,
      );
      sessionStorage.setItem("myCart", JSON.stringify(state.myCart));
    },
  },
});

//acttions
export const { addingProductToCart, deletingProductFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;