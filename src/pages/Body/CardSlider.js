import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardSlider.css";
import { position } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const CardSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <ChevronRightIcon boxSize={"24px"} marginRight={"24px"} />,
    prevArrow: <ChevronLeftIcon boxSize={"24px"} marginLeft={"24px"} />,
  };

  const images = [
    require("../images/image1.jpeg"),
    require("../images/image2.jpeg"),
    require("../images/image3.jpeg"),
    require("../images/image3.jpeg"),
    require("../images/image3.jpeg"),
    require("../images/image3.jpeg"),

    // Diğer resimler
  ];

  return (
    
    <div className="top-prague-att">
<a className="top-title">TOP PRAGUE ATTRACTIONS INCLUDED IN COOLPASS</a>
    <div className="bumbum">
      <div className="card-slider-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img className="card" src={image} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </div>
  );
};

export default CardSlider;


