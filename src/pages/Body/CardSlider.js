import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardSlider.css";

const CardSlider = () => {
    const NextArrow = ({ onClick }) => (
        <div className="slick-arrow slick-next" onClick={onClick}>
          Next
        </div>
      );
      
      const PrevArrow = ({ onClick }) => (
        <div className="slick-arrow slick-prev" onClick={onClick}>
          Prev
        </div>
      );
  const settings = {
    dots: false,
    arrow: true,
    speed: 1500,
    slidesToShow: 1,
    innerHeight: 500,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 6000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
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
            <img className="card" src={image} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
