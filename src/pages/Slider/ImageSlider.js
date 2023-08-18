import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";
import Header from "../Header/Header";

const ImageSlider = () => {
  const settings = {
    dots: true,
    speed: 1500,
    slidesToShow: 1,
    innerHeight: 500,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 6000,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
  };

  const images = [
    require("../images/image1.jpg"),
    require("../images/image2.jpg"),
    require("../images/image3.jpg"),

    // Diğer resimler
  ];

  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="image" key={index}>
      
            <img style={{ height: "100%", width: "100%" }} src={image} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
