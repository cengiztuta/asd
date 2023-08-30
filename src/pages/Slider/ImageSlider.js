import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";
import axios from "axios";

const ImageSlider = () => {
  const api = "https://static2.praguecoolpass.com/";
  const [slides, setSlides] = useState([]);
  const getSlides = async () => {
    try {
      const response = await axios.get(
        "https://api2.praguecoolpass.com/pages/5fd771cc072e5479bded0f2b"
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  const fetchTranslate = async () => {
    const data = await getSlides();
    setSlides(data.mainImage.web_image);
  };

  useEffect(() => {
    fetchTranslate();
  }, []);

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

  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        {slides.map((image, index) => (
          <div key={index}>
            <div
              className="image"
              style={{
                backgroundImage: `url(${api}${image})`,
                width: "100%",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />{" "}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
