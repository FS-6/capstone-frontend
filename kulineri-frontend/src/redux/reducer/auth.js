import axios from "axios";

const API_URL = "https://vivacious-foal-overcoat.cyclic.app/user";
const LOGIN_PENDING = "LOGIN_PENDING";
const LOGIN_FULFILLED = "LOGIN_FULFILLED";
const LOGIN_REJECTED = "LOGIN_REJECTED";
const CLEAR_MESSAGE = "CLEAR_MESSAGE";
const LOGOUT = "LOGOUT";

const initialState = {
  token: null,
  isLogin: false,
  isLoading: false,
  isError: false,
  message: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_FULFILLED:
      return {
        ...state,
        token: action.payload,
        isLogin: true,
        isLoading: false,
      };
    case LOGIN_REJECTED:
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
    case LOGOUT:
      return {
        ...state,
        token: null,
        isLogin: false,
      };
    default:
      return state;
  }
};

const loginPending = () => ({ type: LOGIN_PENDING });
const loginFulfilled = (payload) => ({ type: LOGIN_FULFILLED, payload });
const loginRejected = (payload) => ({ type: LOGIN_REJECTED, payload });
export const clearMessage = () => ({ type: CLEAR_MESSAGE });

const api = axios.create({
  baseURL: API_URL,
});

export const doLogin = (userData) => async (dispatch) => {
  dispatch(loginPending());
  try {
    const { data } = await api.post("/login", userData);
    sessionStorage.setItem("token", data.token);
    sessionStorage.setItem("isLogin", "true");
    dispatch(loginFulfilled(data.token));
  } catch (error) {
    dispatch(loginRejected(error));
  }
};

export const doLogout = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("isLogin");
  return { type: LOGOUT };
};

export default authReducer;
