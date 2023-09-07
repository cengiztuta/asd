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

const Customers = () => {
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

  const formatDate = (dateStr) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="customer">
      <div className="customer-container">
        <div className="title-container">
          <h3 className="customer-title">
            {" "}
            WHAT OUR CUSTOMERS SAY ABOUT COOLPASS /PRAGUE CARD{" "}
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
            <a>SEE ALL REVIEWS</a>
          </button>
          <button className="pagination-button">
            <a>WRITE YOUR REVIEW</a>
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Customers;
