import axios from "axios";

const API_URL = "https://vivacious-foal-overcoat.cyclic.app/";
const GET_USER_PENDING = "GET_USER_PENDING";
const GET_USER_FULFILLED = "GET_USER_FULFILLED";
const GET_USER_REJECTED = "GET_USER_REJECTED";
const USER_REGIST_PENDING = "USER_REGIST_PENDING";
const USER_REGIST_FULFILLED = "USER_REGIST_FULFILLED";
const USER_REGIST_REJECTED = "USER_REGIST_REJECTED";
const CLEAR_MESSAGE = "CLEAR_MESSAGE";

const initialState = {
  user: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_PENDING:
    case USER_REGIST_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USER_FULFILLED:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case USER_REGIST_FULFILLED:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
      };
    case GET_USER_REJECTED:
    case USER_REGIST_REJECTED:
      return {
        ...state,
        isError: true,
        isLoading: false,
        message: action.payload,
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        message: "",
      };
    default:
      return state;
  }
};

const pendingAction = (type) => ({ type });
const fulfilledAction = (type, payload) => ({ type, payload });
const rejectedAction = (type, payload) => ({ type, payload });

export const clearMessage = () => pendingAction(CLEAR_MESSAGE);

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  },
});

export const userRegist = (userData) => async (dispatch) => {
  dispatch(pendingAction(USER_REGIST_PENDING));
  try {
    const { data } = await api.post("/user/register", userData);
    dispatch(fulfilledAction(USER_REGIST_FULFILLED, data.data));
  } catch (error) {
    dispatch(rejectedAction(USER_REGIST_REJECTED, error.message));
  }
};

export const getUser = () => async (dispatch) => {
  dispatch(pendingAction(GET_USER_PENDING));
  try {
    const { data } = await api.get("/user/profile");
    dispatch(fulfilledAction(GET_USER_FULFILLED, data.data));
  } catch (error) {
    dispatch(rejectedAction(GET_USER_REJECTED, error.message));
  }
};

export default userReducer;
