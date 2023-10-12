import axios from "axios";
import {
  setNewsData,
  setTempData,
  setTempDataTwo,
  setTempDataTwoImages,
  setAttractionsCategoryData,
  setAttractionsCardData,
} from "./redux/action";
import store from "./redux/store";
const dataURL = process.env.REACT_APP_DATA_URL;

export const fetchData = async () => {
  try {
    const response = await axios.get(`${dataURL}translation`);
    store.dispatch(setTempData(response.data));
  } catch (error) {
    console.error("error", error);
  }
};

export const fetchDataTwo = async () => {
  try {
    const response = await axios.get(
      `${dataURL}pages/5fd771cc072e5479bded0f2b`
    );
    store.dispatch(setTempDataTwo(response.data.content));
  } catch (error) {
    console.log("error");
  }
};
export const fetchDataTwoImages = async () => {
  try {
    const response = await axios.get(
      `${dataURL}pages/5fd771cc072e5479bded0f2b`
    );
    store.dispatch(setTempDataTwoImages(response.data));
  } catch (error) {
    console.log("error");
  }
};

export const fetchNewsData = async () => {
  try {
    const response = await axios.get(`${dataURL}news`);
    store.dispatch(setNewsData(response.data.slice(0, 2)));
  } catch (error) {
    console.log("error");
  }
};

export const fetchAttractionsCategoryData = async () => {
  try {
    const response = await axios.get(`${dataURL}category`);
    store.dispatch(setAttractionsCategoryData(response.data));
  } catch (error) {
    console.log("error");
  }
};
export const fetchAttractionsCardData = async () => {
  try {
    const response = await axios.get(`${dataURL}object/attraction/`);
    store.dispatch(setAttractionsCardData(response.data));
  } catch (error) {
    console.log("error");
  }
};
