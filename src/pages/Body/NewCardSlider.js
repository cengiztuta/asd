import React, { useRef } from "react";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import Card from "./Card";
import { Box } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import "swiper/css/navigation";

const NewCardSlider = ({ CardData }) => {
  const swiperRef = useRef(null);
  return (
    <Box
      w={"1188px"}
      h={"263px"}
      position={"relative"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      display={"flex"}
    >
      <Box
        h={"24px"}
        cursor={"pointer"}
        onClick={() => swiperRef.current.swiper.slidePrev()}
      >
        <ChevronLeftIcon w={"24px"} h={"100%"} />
      </Box>

      <Swiper
        slidesPerView={4}
        ref={swiperRef}
        modules={Navigation}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {CardData.map((card, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: "270px",
              height: "204px",
            }}
          >
            <Card card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Box
        h={"24px"}
        cursor={"pointer"}
        onClick={() => swiperRef.current.swiper.slideNext()}
      >
        <ChevronRightIcon w={"24px"} h={"100%"} />
      </Box>
    </Box>
  );
};

export default NewCardSlider;
