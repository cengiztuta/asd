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

  const data = [
    {
      title: `${review.title}`,
      place: `${review.place}`,
      date: `${review.date}`,
      name: `${review.name}`,
      text: `${review.text}`,
      rating: `${review.rating}`,
      id: `${review._id}`,
    },
  ];
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
            ></span>
          </div>
        </div>

        <div className="customer-wrapper">
          <CustomerCardSlider data={review} />{" "}
        </div>
        <div className="pagination-container">
          <button className="pagination-button-all">
            <a>SEE ALL REVIEWS</a>
          </button>
          <button className="pagination-button-write">
            <a>WRITE YOUR REVIEW</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customers;
