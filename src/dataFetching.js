import axios from "axios";
import { setTempData, setTempDataTwo, setTempDataTwoImages } from "./redux/action";
import store from "./redux/store";

export const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://api2.praguecoolpass.com/translation"
    );
    store.dispatch(setTempData(response.data));
  } catch (error) {
    console.error("error", error);
  }
};

export const fetchDataTwo = async () => {
  try {
    const response = await axios.get(
      "https://api2.praguecoolpass.com/pages/5fd771cc072e5479bded0f2b"
    );
    store.dispatch(setTempDataTwo(response.data.content));
  } catch (error) {
    console.log("error");
  }
};
export const fetchDataTwoImages = async () => {
  try {
    const response = await axios.get(
      "https://api2.praguecoolpass.com/pages/5fd771cc072e5479bded0f2b"
    );
    store.dispatch(setTempDataTwoImages(response.data));
  } catch (error) {
    console.log("error");
  }
};
