import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducer/product";
import categoryReducer from "./reducer/category";
import authReducer from "./reducer/auth";
import userReducer from "./reducer/user";
import cartReducer from "./reducer/cart";
import transactionReducer from "./reducer/transaction";
import orderReducer from "./reducer/order";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    cart: cartReducer,
    product: productReducer,
    category: categoryReducer,
    transaction: transactionReducer,
    order: orderReducer,
  },
});

export default store;
