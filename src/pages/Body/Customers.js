import React, { useRef, useState, useEffect } from "react";
import "./Customer.css";
import { SwiperSlide, Swiper } from "swiper/react";
import { Box } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import star from "../images/star.png";
import activeStar from "../images/active-star.png";
import inactiveStar from "../images/star.png";
import "swiper/css/navigation";
import axios from "axios";
import CustomerCardSlider from "./CustomerCard/CustomerCardSlider";
import { useTranslation } from "react-i18next";

const Customers = () => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language
  const swiperRef = useRef(null);
  const [review, setReview] = useState([]);

  const getReview = async () => {
    try {
      const response = await axios.get(
        "https://api2.praguecoolpass.com/review/card"
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  const fetchTranslate = async () => {
    const data = await getReview();
    setReview(data);
  };

  useEffect(() => {
    fetchTranslate();
  }, []);

  const [tempData, setTempData] = useState([]);
  const getOffersTemp = async () => {
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
  const fetchTempData = async () => {
    const data = await getOffersTemp();
    setTempData(data);
  };
  useEffect(() => {
    fetchTempData();
  }, []);

  return (
    <div className="customer">
      <div className="customer-container">
        <div className="title-container">
          <h3 className="customer-title">
            {" "}
            {tempData[lng]?.REVIEWS_what_do_customers_say}
          </h3>

          <div className="title-stars-rating">
            <h3
              className="customer-title"
              style={{ alignSelf: "center", marginRight: "10px" }}
            >
              4.5
            </h3>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <span
                class="star"
                style={{
                  backgroundImage: `url(${activeStar})`,
                }}
              ></span>
              <span
                class="star"
                style={{
                  backgroundImage: `url(${activeStar})`,
                }}
              ></span>
              <span
                class="star"
                style={{
                  backgroundImage: `url(${activeStar})`,
                }}
              ></span>
              <span
                class="star"
                style={{
                  backgroundImage: `url(${activeStar})`,
                }}
              ></span>
              <span
                class="star"
                style={{
                  backgroundImage: `url(${inactiveStar})`,
                }}
              ></span>{" "}
            </div>
          </div>
        </div>
        <CustomerCardSlider data={review} />{" "}
        <div className="pagination-container">
          <button className="pagination-button ">
            <a>{tempData[lng]?.REVIEWS_see_all} </a>
          </button>
          <button className="pagination-button">
            <a>{tempData[lng]?.REVIEWS_write_your_opinion}</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customers;
