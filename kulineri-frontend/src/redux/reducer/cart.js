import axios from "axios";

// Constants
const API_URL = "https://vivacious-foal-overcoat.cyclic.app/user/carts";
const FETCH_CART_REQUEST = "FETCH_CART_REQUEST";
const FETCH_CART_SUCCESS = "FETCH_CART_SUCCESS";
const FETCH_CART_FAILURE = "FETCH_CART_FAILURE";
const RESET_CART = "RESET_CART";

const initialState = {
  carts: [],
  isLoading: false,
  isSuccess: false,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CART_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        carts: action.payload,
      };
    case FETCH_CART_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case RESET_CART:
      return initialState;
    default:
      return state;
  }
};

const fetchCartRequest = () => ({ type: FETCH_CART_REQUEST });
const fetchCartSuccess = (carts) => ({
  type: FETCH_CART_SUCCESS,
  payload: carts,
});
const fetchCartFailure = (error) => ({
  type: FETCH_CART_FAILURE,
  payload: error,
});
export const resetCart = () => ({ type: RESET_CART });

// Axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  },
});

export const getCart = () => async (dispatch) => {
  dispatch(fetchCartRequest());
  try {
    const { data } = await api.get();
    dispatch(fetchCartSuccess(data.data));
  } catch (error) {
    dispatch(fetchCartFailure(error));
  }
};

export const getCartById = (id) => async (dispatch) => {
  dispatch(fetchCartRequest());
  try {
    const { data } = await api.get(`/${id}`);
    dispatch(fetchCartSuccess(data.data));
  } catch (error) {
    dispatch(fetchCartFailure(error));
  }
};

export const addToCart = (product) => async (dispatch) => {
  dispatch(fetchCartRequest());
  try {
    const { data } = await api.post("/add", product);
    dispatch(fetchCartSuccess(data.data));
  } catch (error) {
    dispatch(fetchCartFailure(error));
  }
};

export const deleteCart = (id) => async (dispatch) => {
  dispatch(fetchCartRequest());
  try {
    const { data } = await api.delete(`/delete/${id}`);
    dispatch(fetchCartSuccess(data.data));
  } catch (error) {
    dispatch(fetchCartFailure(error));
  }
};

export default cartReducer;
