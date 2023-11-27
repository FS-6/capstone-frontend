import axios from "axios";

const initialState = {
  user: null,
  isLoading: false,
  isError: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "GET_USER_FULFILLED":
      return {
        ...state,
        user: action.payload.data,
        isLoading: false,
        isError: false,
      };
    case "GET_USER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

const startFetch = () => ({
  type: "GET_USER_PENDING",
});

const successFetch = (data) => ({
  type: "GET_USER_FULFILLED",
  payload: data,
});

const errorFetch = () => ({
  type: "GET_USER_REJECTED",
});

export const getUser = () => {
  return async (dispatch) => {
    dispatch(startFetch());
    try {
      const response = await axios.get(
        "https://lazy-shorts-fish.cyclic.app/user/profile",
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
      dispatch(successFetch(response));
    } catch (error) {
      dispatch(errorFetch());
    }
  };
};

export const editUser = (data) => {
  return async (dispatch) => {
    dispatch(startFetch());
    try {
      const response = await axios.put(
        "https://lazy-shorts-fish.cyclic.app/user/edit",
        data
      );
      dispatch(successFetch(response));
    } catch (error) {
      dispatch(errorFetch());
    }
  };
};

export default userReducer;
