import axios from "axios";

const API_URL = "https://vivacious-foal-overcoat.cyclic.app";
const FETCH_TRANSACTION_REQUEST = "FETCH_TRANSACTION_REQUEST";
const FETCH_TRANSACTION_SUCCESS = "FETCH_TRANSACTION_SUCCESS";
const FETCH_TRANSACTION_FAILURE = "FETCH_TRANSACTION_FAILURE";

const initialState = {
  transactions: [],
  isLoading: false,
  error: null,
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRANSACTION_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_TRANSACTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        transactions: action.payload.transactions,
      };
    case FETCH_TRANSACTION_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const fetchTransactionRequest = () => ({
  type: FETCH_TRANSACTION_REQUEST,
});

const fetchTransactionSuccess = (transactions) => ({
  type: FETCH_TRANSACTION_SUCCESS,
  payload: { transactions },
});

const fetchTransactionFailure = (error) => ({
  type: FETCH_TRANSACTION_FAILURE,
  payload: error,
});

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  },
});

export const getTransaction = () => async (dispatch) => {
  dispatch(fetchTransactionRequest());

  try {
    const { data } = await api.get("/user/transactions");
    dispatch(fetchTransactionSuccess(data.data));
  } catch (error) {
    dispatch(fetchTransactionFailure(error));
  }
};

export const getTransactionById = (id) => async (dispatch) => {
  dispatch(fetchTransactionRequest());
  try {
    const { data } = await api.get(`/user/transactions/${id}`);
    dispatch(fetchTransactionSuccess(data.data));
  } catch (error) {
    dispatch(fetchTransactionFailure(error.response.message));
  }
};

export const createTransaction = (transaction) => async (dispatch) => {
  try {
    const { data } = await api.post("/user/transactions/add", transaction);
    dispatch(fetchTransactionSuccess(data.data));
  } catch (error) {
    dispatch(fetchTransactionFailure(error.response.message));
  }
};

export default transactionReducer;
