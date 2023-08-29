import React, { useEffect, useRef, useState } from "react";
import "../Calculator.css";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { Box } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import "swiper/css/navigation";

const Card6  = () => {
  const [adultCounterValue, setAdultCounterValue] = useState(0);
  const [childCounterValue, setChildCounterValue] = useState(0);
  // const [totalPrice, setTotalPrice] = useState(0)

  const adultIncreaseCounter = () => {
    setAdultCounterValue(adultCounterValue + 1);
  };
  const adultDecreaseCounter = () => {
    if (adultCounterValue > 0) {
      setAdultCounterValue(adultCounterValue - 1);
    }
  };
  const childIncreaseCounter = () => {
    setChildCounterValue(childCounterValue + 1);
  };
  const childDecreaseCounter = () => {
    if (childCounterValue > 0) {
      setChildCounterValue(childCounterValue - 1);
    }
  };

  const totalPrice = childCounterValue * 84 + adultCounterValue * 118;
  return (
    <Box className="Card">
      <div className="Card-header">
        <div className="Card-header-content">
          <h2 className="Card-type">3 DAY PASS</h2>
          <a className="Card-subtitle">Buying Prague Cool Pass / Card</a>
        </div>
      </div>
      <div className="Card-body">
        <div className="adult-calculator">
          <p className="adult-calculator-label">Adult</p>

          <div className="price-section">
            <a className="price-label">Price</a>
            <a className="adult-price">118 EUR</a>
          </div>
          <div className="price-calculator">
            <div class="decrement-button" onClick={adultDecreaseCounter}>
              <span class="decrement"> </span>
            </div>
            <div class="card-count">
              {" "}
              <a class="card-counter">{adultCounterValue}</a>
            </div>
            <div class="increment-button" onClick={adultIncreaseCounter}>
              <div class="plus">
                <span class="vertical"></span>
                <span class="horizontal"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="adult-calculator">
          <p className="adult-calculator-label">Student Child</p>

          <div className="price-section">
            <a className="adult-price">84 EUR</a>
          </div>
          <div className="price-calculator">
            <div class="decrement-button" onClick={childDecreaseCounter}>
              <span class="decrement"> </span>
            </div>
            <div class="card-count">
              {" "}
              <a class="card-counter">{childCounterValue}</a>
            </div>
            <div class="increment-button" onClick={childIncreaseCounter}>
              <div class="plus">
                <span class="vertical"></span>
                <span class="horizontal"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="total-price-section">
          <div class="total-price">
            <a class="price-label"> Your Price : </a>
            <a class="price">{totalPrice} EUR</a>
          </div>
        </div>
        <div class="card-footer">
          <a>
            <p class="footer-text"> COMPLETE YOUR BOOKING </p>
          </a>
        </div>
      </div>
    </Box>
  );
};

export default Card6;
