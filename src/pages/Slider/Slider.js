import React, { useEffect, useState } from "react";
import "./Slider.css";
import ImageSlider from "./ImageSlider";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Slider = () => {
  const { t } = useTranslation();

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
                {t("pages.5fd771cc072e5479bded0f2b.title")}
              </h1>
              <h3 className="header-content-title-two">
                {t("pages.5fd771cc072e5479bded0f2b.subtitle")}
              </h3>
              <p className="author-container-m">
                {t("translation.HEADER_photo_by_label")} Prague City Tourism &
                Czech Tourism
              </p>
            </div>
            <div className="search-container">
              <div className="inputone">
                <input
                  className="dsadsa"
                  type="text"
                  placeholder={t("translation.SEARCH")}
                />
                <SearchIcon color={"gray"} className="icon" />
              </div>
              <Button _hover={{ bg: "#FF9848" }} className="button">
                {t("translation.APP_LETS_GO")}
              </Button>
            </div>
          </div>
          <p className="author-container">
            {t("translation.HEADER_photo_by_label")} Prague City Tourism & Czech
            Tourism{" "}
          </p>
        </section>
        <section className="underbar">
          <a className="underbar-text">
            {t("pages.5fd771cc072e5479bded0f2b.header_banner")}
          </a>
        </section>
        <div className="search-container-m">
          <div className="inputone-m">
            <Input
              className="dsadsa-m"
              type="text"
              placeHolder={t("translation.SEARCH")}
            />
            <SearchIcon color={"gray"} className="icon-m" />
          </div>
          <Button _hover={{ bg: "#FF9848" }} className="button-m">
            {t("translation.APP_LETS_GO")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
