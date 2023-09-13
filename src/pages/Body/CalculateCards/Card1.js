import React, { useEffect, useRef, useState } from "react";
import "../Calculator.css";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { Box } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Card1 = () => {
  const [tempData, setTempData] = useState([]);
  const { t, i18n } = useTranslation();
  const lng = i18n.language;
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
  console.log(tempData);
  const fetchTempData = async () => {
    const data = await getOffersTemp();
    setTempData(data);
  };
  useEffect(() => {
    fetchTempData();
  }, []);

  const [adultCounterValue, setAdultCounterValue] = useState(0);
  const [childCounterValue, setChildCounterValue] = useState(0);

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

  const totalPrice = childCounterValue * 38 + adultCounterValue * 55;
  return (
    <Box className="Card">
      <div className="Card-header">
        <div className="Card-header-content">
          <h2 className="Card-type">{t('translation.CALCULATOR_1_day_pass')}</h2>
          <a className="Card-subtitle">
          {tempData[lng]?.BUY_PRAGUE_CARD_COOL_PASS}
          </a>
        </div>
      </div>
      <div className="Card-body">
        <div className="adult-calculator">
          <p className="adult-calculator-label">{tempData[lng]?.ADULT_PRICE}</p>

          <div className="price-section">
            <a className="price-label">{tempData[lng]?.PRICE}</a>
            <a className="adult-price">55 EUR</a>
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
          <p className="adult-calculator-label">
            {tempData[lng]?.STUDENT_PRICE}
            {tempData[lng]?.CHILD_PRICE}
          </p>

          <div className="price-section">
            <a className="adult-price">38 EUR</a>
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
            <a class="price-label"> {tempData[lng]?.YOUR_PRICE} : </a>
            <a class="price">{totalPrice} EUR</a>
          </div>
        </div>
        <div class="card-footer">
          <a>
            <p class="footer-text">
              {" "}
              {tempData[lng]?.CALCULATOR_COMPLETE_BOOKING_BTN}{" "}
            </p>
          </a>
        </div>
      </div>
    </Box>
  );
};

export default Card1;
