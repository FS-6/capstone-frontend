import axios from "axios";

const API_URL = "https://vivacious-foal-overcoat.cyclic.app/categories";
const FETCH_CATEGORIES_REQUEST = "FETCH_CATEGORIES_REQUEST";
const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
const FETCH_CATEGORIES_FAILURE = "FETCH_CATEGORIES_FAILURE";

const initialState = {
  categories: [],
  isLoading: false,
  error: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: action.payload,
      };
    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const fetchCategoriesRequest = () => ({ type: FETCH_CATEGORIES_REQUEST });
const fetchCategoriesSuccess = (categories) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: categories,
});
const fetchCategoriesFailure = (error) => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload: error,
});

const api = axios.create({
  baseURL: API_URL,
});

export const getAllCategories = () => async (dispatch) => {
  dispatch(fetchCategoriesRequest());
  try {
    const { data } = await api.get();
    dispatch(fetchCategoriesSuccess(data.data));
  } catch (error) {
    dispatch(fetchCategoriesFailure(error));
  }
};

export default categoryReducer;
