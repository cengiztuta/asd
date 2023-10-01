import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";
import axios from "axios";
import { connect } from "react-redux";
import { fetchDataTwoImages } from "../../dataFetching";
import { setTempDataTwoImages } from "../../redux/action";

const ImageSlider = ({ tempDataTwoImages }) => {
  const sliderRef = useRef(null);   
  const api = process.env.REACT_APP_IMAGE_URL;
  useEffect(() => {
    fetchDataTwoImages();
  }, []);
  const images = tempDataTwoImages?.mainImage?.web_image;
  const settings = {
    dots: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
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

  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current) {
        const screenWidth = window.innerWidth;
        let slidesToShow = 4;

        if (screenWidth < 1024) {
          slidesToShow = 3;
        }
        if (screenWidth < 768) {
          slidesToShow = 2;
        }
        if (screenWidth < 640) {
          slidesToShow = 1;
        }

        sliderRef.current.slickGoTo(0);
        sliderRef.current.slickSetOption("slidesToShow", slidesToShow, true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="image-slider-container">
      <Slider {...settings} className="image-slider">
        {images?.map((image, index) => (
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

const mapStateToProps = (state) => ({
  tempDataTwoImages: state.tempDataTwoImages,
});

export default connect(mapStateToProps, { setTempDataTwoImages })(ImageSlider);
