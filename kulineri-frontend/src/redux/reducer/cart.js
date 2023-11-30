const initialState = {
  cartItems: [],
  isLoading: false,
  isError: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          {
            productDetail: action.productDetail,
            jumlah: action.jumlah,
            subtotal: action.subtotal,
          },
        ],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.id),
      };
    case "EDIT_CART_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.id ? { ...item, jumlah: action.jumlah } : item
        ),
      };
    case "CHECKOUT":
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};


// Action creators
export const addToCart = (productDetail, jumlah, subtotal) => ({
  type: "ADD_TO_CART",
  productDetail,
  jumlah,
  subtotal,
});

export const removeFromCart = (id) => ({
  type: "REMOVE_FROM_CART",
  id,
});

export const editCartItem = (id, jumlah) => ({
  type: "EDIT_CART_ITEM",
  id,
  jumlah,
});

export const checkout = () => ({
  type: "CHECKOUT",
});

export default cartReducer;