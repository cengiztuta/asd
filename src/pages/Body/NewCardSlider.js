import React, { useRef, useState, useEffect } from "react";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import Card from "./Card";
import { Box } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import "swiper/css/navigation";
import axios from "axios";
import "./Card.css";
import { useTranslation } from "react-i18next";
import { fetchData } from "../../dataFetching";
import { setTempData } from "../../redux/action";
import { connect } from "react-redux";

const NewCardSlider = ({ tempData }) => {
  const { i18n } = useTranslation();
  const lng = i18n.language;
  const swiperRef = useRef(null);
  const [attractions, setAttractions] = useState([]);
  const getAttractions = async () => {
    try {
      const response = await axios.get(
        "https://api2.praguecoolpass.com/object/attraction/top-attractions"
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  const fetchTranslate = async () => {
    const data = await getAttractions();
    setAttractions(data);
  };

  useEffect(() => {
    fetchTranslate();
  }, []);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Box className="top-att-container">
        <section
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h3 className="top-attractions-title">
            {tempData[lng]?.HOME_top_attractions_title}
          </h3>
        </section>
        <div className="att-wrapper">
          <Box class="slide-iconn">
            <ChevronLeftIcon
              onClick={() => swiperRef.current.swiper.slidePrev()}
              class="att-slide-icon"
            />
          </Box>

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
            className="att-swiper"
          >
            {attractions.map((card, index) => (
              <SwiperSlide key={index} className="att-swiper-slide">
                <Card card={card} hakan={lng} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Box class="slide-iconn">
            <ChevronRightIcon
              onClick={() => swiperRef.current.swiper.slideNext()}
              class="att-slide-icon"
            />
          </Box>
        </div>
      </Box>{" "}
    </div>
  );
};

const mapStateToProps = (state) => ({
  tempData: state.tempData,
});

export default connect(mapStateToProps, { setTempData })(NewCardSlider);
