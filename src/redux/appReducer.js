import { getData } from "../api/api";

const SET_DATA = "SET_DATA";

let initialState = {
  data: [],
  pageSize: 20,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA: {
      return {
        ...state,
        data: [...action.data],
      };
    }
    default:
      return state;
  }
};

export const setData = (data) => ({
  type: SET_DATA,
  data,
});

export const getDataThunk = () => (dispatch) => {
  getData().then((response) => {
    dispatch(setData(response));
  });
};

export default appReducer;
