import React, { useRef, useState, useEffect } from "react";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import Card from "./Card";
import { Box } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import "swiper/css/navigation";
import axios from "axios";
import "./Card.css";

const NewCardSlider = () => {
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
          <div
            style={{ minWidth: "1140px", width: "1140px" }}
            className="att-title-container"
          >
            <h3 className="top-attractions-title">
              TOP PRAGUE ATTRACTIONS INCLUDED IN COOLPASS
            </h3>
          </div>
        </section>
        <div className="att-wrapper">
          <ChevronLeftIcon
            onClick={() => swiperRef.current.swiper.slidePrev()}
            class="att-slide-icon"
          />

          <Swiper
            direction="horizontal"
            slidesPerView={4}
            ref={swiperRef}
            modules={Navigation}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },

              720: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="att-swiper"
          >
            {attractions.map((card, index) => (
              <SwiperSlide key={index} className="att-swiper-slide">
                <Card card={card.content.en} img={card.images[0]} />
              </SwiperSlide>
            ))}
          </Swiper>

          <ChevronRightIcon
            onClick={() => swiperRef.current.swiper.slideNext()}
            class="att-slide-icon"
            color={"green"}
          />
        </div>
      </Box>{" "}
    </div>
  );
};

export default NewCardSlider;
