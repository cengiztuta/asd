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
      <Box
        style={{
          height: "263px",
          width: "100%",
          maxWidth: "1208px", // Genişliği ekran boyutuna uygun olarak ayarlayın
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          marginTop: "40px",
        }}
      >
        <section
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ minWidth: "1140px", width: "1140px" }}>
            <h3 className="top-attractions-title">
              TOP PRAGUE ATTRACTIONS INCLUDED IN COOLPASS
            </h3>
          </div>
        </section>
        <div
          style={{
            display: "flex",
            height: "auto",
            width: "auto",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Box
            h={"34px"}
            cursor={"pointer"}
            onClick={() => swiperRef.current.swiper.slidePrev()}
            display={{ base: "none", md: "block" }}
          >
            <ChevronLeftIcon w={"34px"} h={"100%"} />
          </Box>
          <Box
            w={"100%"}
            h={"auto"}
            position={"relative"}
            flexDirection={"row"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            display={"flex"}
            flexWrap={"wrap"}
            mt={"20px"}
          >
            <Swiper
              direction="horizontal"
              slidesPerView={4}
              ref={swiperRef}
              modules={Navigation}
              breakpoints={{
                320: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              style={{
                maxWidth: "1140px",
                width: "100%",
                height: "100%",
              }}
            >
              {attractions.map((card, index) => (
                <SwiperSlide
                  key={index}
                  style={{
                    maxWidth: "270px",
                    width: "100%",
                    height: "204px",
                  }}
                >
                  <Card card={card.content.en} img={card.images[0]} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
          <Box
            h={"34px"}
            cursor={"pointer"}
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            <ChevronRightIcon w={"34px"} h={"100%"} />
          </Box>
        </div>
      </Box>{" "}
    </div>
  );
};

export default NewCardSlider;
