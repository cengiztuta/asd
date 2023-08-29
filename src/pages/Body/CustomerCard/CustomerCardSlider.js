import React, { useRef } from "react";
import "../Customer.css";
import { SwiperSlide, Swiper } from "swiper/react";
import CustomerCard from "./CustomerCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
const CustomerCardSlider = ({ data }) => {
  const swiperRef = useRef(null);
  return (
    <Box
      w={"1188px"}
      h={"100%"}
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
        slidesPerView={3}
        ref={swiperRef}
        style={{
          display: "flex",
          minHeight: "255px",
          height: "100%",
          maxHeight: "410px",
        }}
      >
        {data.map((card, index) => (
          <SwiperSlide key={index}>
            <CustomerCard card={card} />
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

export default CustomerCardSlider;
