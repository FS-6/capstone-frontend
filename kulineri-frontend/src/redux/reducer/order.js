import axios from "axios";

const API_URL = "https://vivacious-foal-overcoat.cyclic.app";
const FETCH_ORDER_REQUEST = "FETCH_ORDER_REQUEST";
const FETCH_ORDER_SUCCESS = "FETCH_ORDER_SUCCESS";
const FETCH_ORDER_FAILURE = "FETCH_ORDER_FAILURE";

const initialState = {
  orders: [],
  isLoading: false,
  error: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORDER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        orders: action.payload,
      };
    case FETCH_ORDER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const fetchOrderRequest = () => ({ type: FETCH_ORDER_REQUEST });
const fetchOrderSuccess = (orders) => ({
  type: FETCH_ORDER_SUCCESS,
  payload: orders,
});
const fetchOrderFailure = (error) => ({
  type: FETCH_ORDER_FAILURE,
  payload: error,
});

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  },
});

export const getOrderById = (id) => async (dispatch) => {
  dispatch(fetchOrderRequest());
  try {
    const { data } = await api.get(`user/orders/${id}`);
    dispatch(fetchOrderSuccess(data.data));
  } catch (error) {
    dispatch(fetchOrderFailure(error.response.message));
  }
};

export const createOrder = (order) => async (dispatch) => {
  dispatch(fetchOrderRequest());
  try {
    const { data } = await api.post("user/orders/add", order);
    dispatch(fetchOrderSuccess(data.data));
  } catch (error) {
    dispatch(fetchOrderFailure(error.response.message));
  }
};

export default orderReducer;
