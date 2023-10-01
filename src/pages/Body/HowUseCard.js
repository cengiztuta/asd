import React, { useEffect, useState } from "react";
import "./Howuse.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import { fetchDataTwoImages } from "../../dataFetching";
import { connect } from "react-redux";
import { setTempDataTwoImages } from "../../redux/action";
const HowUseCard = ({ card, tempDataTwoImages }) => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language;
  useEffect(() => {
    fetchDataTwoImages();
  }, []);
  const images = tempDataTwoImages?.how_to_use?.web_images;

  const api = process.env.REACT_APP_IMAGE_URL;
  const swiperParams = {
    direction: "horizontal",
    slidesPerView: 4,
    loop: false,
    autoplay: false,
    allowSlideNext: true,
    allowSlidePrev: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          clickable: true,
        },
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  };

  return (
    <div className="how-use-wrapper">
      <div className="how-use-steps">
        <Swiper
          modules={[Pagination]}
          pagination={{
            type: "custom",
            clickable: true,
          }}
          {...swiperParams}
          className="how-use-swiper"
        >
          {images?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="how-use-step-new">
                <div
                  className="how-use-step-image"
                  style={{
                    backgroundImage: `url(${api}${item})`,
                  }}
                >
                  <a className="how-use-m-link"></a>
                  <div style={{ display: "block" }}> </div>
                  <a className="how-use-m-link"></a>
                </div>
                <div className="how-use-step-number">{index + 1} </div>
                <div className="how-use-step-text">
                  {card[lng]?.how_to_use.descriptions[index]}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  tempDataTwoImages: state.tempDataTwoImages,
});

export default connect(mapStateToProps, { setTempDataTwoImages })(HowUseCard);
