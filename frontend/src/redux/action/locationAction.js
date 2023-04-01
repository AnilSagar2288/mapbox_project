import axios from "axios";
import {
  LOCATION_LIST_FAIL,
  LOCATION_LIST_REQUEST,
  LOCATION_LIST_SUCCESS,
} from "../constants/locationConstanst";

export const listLocations = () => async (dispatch, getState) => {
  try {
    dispatch({ type: LOCATION_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      "http://localhost:8000/api/locations",
      config
    );

    dispatch({ type: LOCATION_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: LOCATION_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
