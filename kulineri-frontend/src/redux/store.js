import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/user";
import cartReducer from "./reducer/cart";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
