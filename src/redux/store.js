import { createStore } from "redux";

const initialState = {
  tempData: [],
  tempDataTwo: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TEMP_DATA":
      return {
        ...state,
        tempData: action.payload,
      };
    case "SET_TEMP_DATA_TWO":
      return {
        ...state,
        tempDataTwo: action.payload,
      };
    case "SET_TEMP_DATA_TWO_IMAGES":
      return {
        ...state,
        tempDataTwoImages: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
