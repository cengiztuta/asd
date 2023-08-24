import React from "react";
import "./Body.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardSlider.css";
import CardSlider from "./CardSlider";
import NewCardSlider from "./NewCardSlider";
import { Card } from "@chakra-ui/react";
import Benefits from "../../Benefits/Benefits";
import { Box } from "@chakra-ui/react";
import Offer from "./Offer";

const Body = () => {
  const CardData = [
    {
      id: 1,
      img: 'url("https://static2.praguecoolpass.com/767a2036-cc95-4ac6-a9d5-d3f5a74511a4.jpg")',
      title: "Prague Castle",
      description:
        " The Prague Castle is the biggest Castle complex in the World.",
      banner: "INCLUDED With CoolPass",
    },
    {
      img: 'url("https://static2.praguecoolpass.com/767a2036-cc95-4ac6-a9d5-d3f5a74511a4.jpg")',
      title: "Prague Castle",
      description:
        " The Prague Castle is the biggest Castle complex in the World.",
      banner: "INCLUDED With CoolPass",
    },
    {
      img: 'url("https://static2.praguecoolpass.com/767a2036-cc95-4ac6-a9d5-d3f5a74511a4.jpg")',
      title: "Prague Castle",
      description:
        " The Prague Castle is the biggest Castle complex in the World.",
      banner: "INCLUDED With CoolPass",
    },
    {
      img: 'url("https://static2.praguecoolpass.com/767a2036-cc95-4ac6-a9d5-d3f5a74511a4.jpg")',
      title: "Prague Castle",
      description:
        " The Prague Castle is the biggest Castle complex in the World.",
      banner: "INCLUDED With CoolPass",
    },
    {
      img: 'url("https://static2.praguecoolpass.com/767a2036-cc95-4ac6-a9d5-d3f5a74511a4.jpg")',
      title: "Prague Castle",
      description:
        " The Prague Castle is the biggest Castle complex in the World.",
      banner: "INCLUDED With CoolPass",
    },
    {
      img: 'url("https://static2.praguecoolpass.com/767a2036-cc95-4ac6-a9d5-d3f5a74511a4.jpg")',
      title: "Prague Castle",
      description:
        " The Prague Castle is the biggest Castle complex in the World.",
      banner: "INCLUDED With CoolPass",
    },
  ];
  return (
    <div>
      <section
        id="top-attractions"
        style={{ justifyContent: "center", display: "flex" }}
      >
        <Box
          style={{
            height: "263px",
            width: "100%",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <NewCardSlider CardData={CardData} />
        </Box>
      </section>
      <section style={{ display: "flex", justifyContent: "center" }}>
        <Benefits />
      </section>

      <Offer />
    </div>
  );
};

export default Body;
