import axios from "axios";
import {
  setNewsData,
  setTempData,
  setTempDataTwo,
  setTempDataTwoImages,
  setAttractionsCategoryData,
  setAttractionsCardData,
  setAttractionsData,
  setAttractionsContentData,
  setAttractionsRegionData,
  setFreeCardImages,
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
export const fetchAttractionsData = async () => {
  try {
    const response = await axios.get(
      `${dataURL}pages/5fe31408c1478823bac06380`
    );
    store.dispatch(setAttractionsData(response.data));
    store.dispatch(setAttractionsContentData(response.data.content));
  } catch (error) {
    console.log("error");
  }
};
export const fetchAttractionsRegionData = async () => {
  try {
    const response = await axios.get(`${dataURL}area`);
    store.dispatch(setAttractionsRegionData(response.data));
  } catch (error) {
    console.log("error");
  }
};
export const fetchFreeCardImages = async () => {
  try {
    const response = await axios.get(
      `${dataURL}object/attraction/5a56f961ee67b73d3bfa5707`
    );
    store.dispatch(setFreeCardImages(response.data.slice(100, 107)));
  } catch (error) {
    console.log("error");
  }
};
