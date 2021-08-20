import * as api from "../api";
import {
  CREATE_MANUAL,
  UPDATE_MANUAL,
  DELETE_MANUAL,
  FETCH_ALL_MANUAL,
  START_LOADING_MANUAL,
  END_LOADING_MANUAL,
  FETCH_POST_MANUAL,
} from "../constants/actionTypes";

export const getManual = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING_MANUAL });

    const { data } = await api.fetchManual(id);

    dispatch({ type: FETCH_POST_MANUAL, payload: data });
    dispatch({ type: END_LOADING_MANUAL });
  } catch (error) {
    console.log(error.message);
  }
};

export const getManuals = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING_MANUAL });

    const {
      data: { data, currentPage, numberOfPages },
    } = await api.fetchManuals(page);

    dispatch({
      type: FETCH_ALL_MANUAL,
      payload: { data, currentPage, numberOfPages },
    });
    dispatch({ type: END_LOADING_MANUAL });
  } catch (error) {
    console.log(error.message);
  }
};

export const createManual = (post) => async (dispatch) => {
  try {
    const { data } = await api.createManual(post);
    dispatch({ type: CREATE_MANUAL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateManual = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateManual(id, post);

    dispatch({ type: UPDATE_MANUAL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteManual = (id) => async (dispatch) => {
  try {
    await api.deleteManual(id);

    dispatch({ type: DELETE_MANUAL, payload: id });
  } catch (error) {
    console.log(error);
  }
};
