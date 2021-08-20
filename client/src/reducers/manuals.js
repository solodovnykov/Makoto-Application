import {
  CREATE_MANUAL,
  UPDATE_MANUAL,
  DELETE_MANUAL,
  FETCH_ALL_MANUAL,
  START_LOADING_MANUAL,
  END_LOADING_MANUAL,
  FETCH_POST_MANUAL,
} from "../constants/actionTypes";

const manuals = (state = { isLoading: true, manuals: [] }, action) => {
  switch (action.type) {
    case START_LOADING_MANUAL:
      return { ...state, isLoading: true };
    case END_LOADING_MANUAL:
      return { ...state, isLoading: false };
    case DELETE_MANUAL:
      return {
        ...state,
        manuals: state.manuals.filter(
          (manual) => manual._id !== action.payload
        ),
      };
    case UPDATE_MANUAL:
      return {
        ...state,
        manuals: state.manuals.map((manual) =>
          manual._id === action.payload._id ? action.payload : manual
        ),
      };
    case FETCH_ALL_MANUAL:
      return {
        ...state,
        manuals: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_POST_MANUAL:
      return { ...state, manual: action.payload };
    case CREATE_MANUAL:
      return { ...state, manuals: [...state.manuals, action.payload] };

    default:
      return state;
  }
};

export default manuals;
