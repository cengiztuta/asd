import React, { useEffect, useState } from "react";
import "./Slider.css";
import ImageSlider from "./ImageSlider";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Slider = () => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language;
  const [tempData, setTempData] = useState([]);
  const getOffersTemp = async () => {
    try {
      const response = await axios.get(
        "https://api2.praguecoolpass.com/pages/5fd771cc072e5479bded0f2b"
      );
      return response.data.content;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  console.log(tempData);
  const fetchTempData = async () => {
    const data = await getOffersTemp();
    setTempData(data);
  };
  useEffect(() => {
    fetchTempData();
  }, []);


  const [tempDataTwo, setTempDataTwo] = useState([]);
  const getOffersTempTwo = async () => {
    try {
      const response = await axios.get(
        "https://api2.praguecoolpass.com/translation"
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  console.log(tempDataTwo);
  const fetchTempDataTwo = async () => {
    const data = await getOffersTempTwo();
    setTempDataTwo(data);
  };
  useEffect(() => {
    fetchTempDataTwo();
  }, []);


  return (
    <div id="app">
      <div className="Slider">
        <ImageSlider />
        <section
          style={{
            justifyContent: "center",
            display: "flex",
          }}
        >
          <div className="header-content">
            <div className="header-content-title">
              <h1 className="header-content-title-one">
                {tempData[lng]?.title}
              </h1>
              <h3 className="header-content-title-two">
                {tempData[lng]?.subtitle}
              </h3>
              <p className="author-container-m">
                {tempDataTwo[lng]?.HEADER_photo_by_label} Prague City Tourism &
                Czech Tourism
              </p>
            </div>
            <div className="search-container">
              <div className="inputone">
                <input
                  className="dsadsa"
                  type="text"
                  placeholder={tempDataTwo[lng]?.SEARCH}
                />
                <SearchIcon color={"gray"} className="icon" />
              </div>
              <Button _hover={{ bg: "#FF9848" }} className="button">
                {tempDataTwo[lng]?.APP_LETS_GO}
              </Button>
            </div>
          </div>
          <p className="author-container">
            {tempDataTwo[lng]?.HEADER_photo_by_label} Prague City Tourism & Czech
            Tourism{" "}
          </p>
        </section>
        <section className="underbar">
          <a className="underbar-text">
            {tempData[lng]?.header_banner}
          </a>
        </section>
        <div className="search-container-m">
          <div className="inputone-m">
            <Input
              className="dsadsa-m"
              type="text"
              placeHolder={tempDataTwo[lng]?.SEARCH}
            />
            <SearchIcon color={"gray"} className="icon-m" />
          </div>
          <Button _hover={{ bg: "#FF9848" }} className="button-m">
            {tempDataTwo[lng]?.APP_LETS_GO}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
