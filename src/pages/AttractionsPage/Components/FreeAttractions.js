import React, { useState, useEffect, useRef } from "react";
import "./FreeAttractions.css";
import { connect } from "react-redux";
import { setTempData, setTempDataTwo } from "../../../redux/action";
import { fetchData, fetchDataTwo } from "../../../dataFetching";
import { useTranslation } from "react-i18next";
import FreeCard from "./FreeCard";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import axios from "axios";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
const FreeAttractions = ({ tempData }) => {
  const swiperRef = useRef(null);
  const { t, i18n } = useTranslation();
  const lng = i18n.language;
  const [freeCardImages, setFreeCardImages] = useState([]);
  const [tryData, setTryData] = useState({});
  const dataURL = process.env.REACT_APP_DATA_URL;
  const getCardImages = async () => {
    try {
      const response = await axios.get(
        `${dataURL}object/attraction/5a56f961ee67b73d3bfa5707"`
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  const fetchTranslate = async () => {
    const data = await getCardImages();
    setFreeCardImages(data.slice(100, 107));
    setTryData(data);
  };
 
  useEffect(() => {
    fetchTranslate();
  }, []);


  return (
    <section>
      <div className="slider-container">
        <div class="slide-iconn">
          <ChevronLeftIcon
            onClick={() => swiperRef.current.swiper.slidePrev()}
            class="att-slide-icon"
          />
        </div>
        <Swiper
          direction="horizontal"
          slidesPerView={1}
          ref={swiperRef}
          modules={Navigation}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },

            720: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="free-swiper"
        >
          {freeCardImages.map((card, index) => (
            <SwiperSlide key={index} className="att-swiper-slide">
              <FreeCard card={card} hakan={lng} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div class="slide-iconn">
          <ChevronRightIcon
            onClick={() => swiperRef.current.swiper.slideNext()}
            class="att-slide-icon"
          />
        </div>
      </div>
    </section>
  );
};
const mapStateToProps = (state) => ({
  tempData: state.tempData,
});

export default connect(mapStateToProps, { setTempData })(FreeAttractions);
