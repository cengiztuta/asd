import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";
const ImageSlider = () => {
  const settings = {
    dots: true,
    speed: 300,
    slidesToShow: 1,
    innerHeight: 500,
  };

  const images = [
    require("../images/buse.png"),
    require("../images/bugra.png"),
    require("../images/hakan.png"),

    // Diğer resimler
  ];

  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="image" key={index}>
            <img src={image} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
