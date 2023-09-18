import React, { useEffect, useState } from "react";
import "./Slider.css";
import ImageSlider from "./ImageSlider";
import { Input, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import { fetchData, fetchDataTwo } from "../../dataFetching";
import { setTempData, setTempDataTwo } from "../../redux/action";
import { connect } from "react-redux";
const Slider = ({ tempData, tempDataTwo }) => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language;

  useEffect(() => {
    fetchData();
    fetchDataTwo();
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
                {tempDataTwo[lng]?.title}
              </h1>
              <h3 className="header-content-title-two">
                {tempDataTwo[lng]?.subtitle}
              </h3>
              <p className="author-container-m">
                {tempData[lng]?.HEADER_photo_by_label} Prague City Tourism &
                Czech Tourism
              </p>
            </div>
            <div className="search-container">
              <div className="inputone">
                <input
                  className="dsadsa"
                  type="text"
                  placeholder={tempData[lng]?.SEARCH}
                />
                <SearchIcon color={"gray"} className="icon" />
              </div>
              <Button _hover={{ bg: "#FF9848" }} className="button">
                {tempData[lng]?.APP_LETS_GO}
              </Button>
            </div>
          </div>
          <p className="author-container">
            {tempData[lng]?.HEADER_photo_by_label} Prague City Tourism & Czech
            Tourism{" "}
          </p>
        </section>
        <section className="underbar">
          <a className="underbar-text">{tempDataTwo[lng]?.header_banner}</a>
        </section>
        <div className="search-container-m">
          <div className="inputone-m">
            <Input
              className="dsadsa-m"
              type="text"
              placeHolder={tempData[lng]?.SEARCH}
            />
            <SearchIcon color={"gray"} className="icon-m" />
          </div>
          <Button _hover={{ bg: "#FF9848" }} className="button-m">
            {tempData[lng]?.APP_LETS_GO}
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tempData: state.tempData,
  tempDataTwo: state.tempDataTwo,
});

export default connect(mapStateToProps, { setTempData, setTempDataTwo })(
  Slider
);
