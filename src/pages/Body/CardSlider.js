import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardSlider.css";
import { position } from "@chakra-ui/react";

const CardSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          marginRight: "25px",
          background: "green",
          zIndex: 1,
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "green",
          marginLeft: "25px",
          justifyContent: "center",
          zIndex: 1,
          alignSelf: "center",
          position: "absolute",
        }}
        onClick={onClick}
      />
    );
  }

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
    <div className="card-slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img className="card" src={image} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
