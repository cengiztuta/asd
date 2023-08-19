import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";

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
    require("../images/image1.jpeg"),
    require("../images/image2.jpeg"),
    require("../images/image3.jpeg"),

    // Diğer resimler
  ];

  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img className="image" src={image} />
          </div>
        ))}
      </Slider>
    
    </div>
  );
};

export default ImageSlider;
