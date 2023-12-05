import axios from "axios";

const API_URL = "https://vivacious-foal-overcoat.cyclic.app";
const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";
const RESET_PRODUCT = "RESET_PRODUCT";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
  selectedCategory: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload.products,
        selectedCategory: action.payload.selectedCategory,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case RESET_PRODUCT:
      return initialState;
    default:
      return state;
  }
};

const fetchProductsRequest = () => ({ type: FETCH_PRODUCTS_REQUEST });
const fetchProductsSuccess = (products, selectedCategory = null) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products, selectedCategory },
});
const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error.message,
});
export const resetProduct = () => ({ type: RESET_PRODUCT });

const api = axios.create({
  baseURL: API_URL,
});

export const getAllProducts = () => async (dispatch) => {
  dispatch(fetchProductsRequest());
  try {
    const { data } = await api.get("/products");
    dispatch(fetchProductsSuccess(data.data));
  } catch (error) {
    dispatch(fetchProductsFailure(error));
  }
};

export const getProductByName = (name) => async (dispatch) => {
  dispatch(fetchProductsRequest());
  try {
    const { data } = await api.get(`/products/name/${name}`);
    dispatch(fetchProductsSuccess(data.data));
  } catch (error) {
    dispatch(fetchProductsFailure(error));
  }
};

export const getProductById = (id) => async (dispatch) => {
  dispatch(fetchProductsRequest());
  try {
    const { data } = await api.get(`/products/${id}`);
    dispatch(fetchProductsSuccess(data.data));
  } catch (error) {
    dispatch(fetchProductsFailure(error));
  }
};

export const getProductByCategory = (id) => async (dispatch) => {
  dispatch(fetchProductsRequest());
  try {
    const { data } = await api.get(`/products/category/${id}`);
    dispatch(fetchProductsSuccess(data.data, id));
  } catch (error) {
    dispatch(fetchProductsFailure(error));
  }
};

export default productReducer;
