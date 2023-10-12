import { createStore } from "redux";

const initialState = {
  tempData: [],
  tempDataTwo: [],
  newsData: [],
  tempDataTwoImages: [],
  attractionsCategoryData: [],
  attractionsCardData: [],
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
    case "SET_NEWS_DATA":
      return {
        ...state,
        newsData: action.payload,
      };
    case "SET_ATTRACTIONS_CATEGORY_DATA":
      return {
        ...state,
        attractionsCategoryData: action.payload,
      };
    case "SET_ATTRACTIONS_CARD_DATA":
      return {
        ...state,
        attractionsCardData: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
