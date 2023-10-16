import React, { useEffect, useRef } from "react";
import "./FreeAttractions.css";
import { connect } from "react-redux";
import { setFreeCardImages } from "../../../redux/action";
import { fetchFreeCardImages } from "../../../dataFetching";
import FreeCard from "./FreeCard";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
const FreeAttractions = ({
  freeCardImages,
  tempData,
  lng,
  attractionsContentData,
}) => {
  const swiperRef = useRef(null);
  useEffect(() => {
    fetchFreeCardImages();
  }, []);

  return (
    <section>
      <div className="header-container">
        <h3 className="free-title">
          {tempData[lng]?.ATTRACTIONS_free_entry_attractions}
        </h3>
        <p
          className="free-subtitle"
          dangerouslySetInnerHTML={{
            __html: attractionsContentData[lng]?.free_entry_description,
          }}
        />
      </div>
      <div className="slider-container">
        <div class="slide-iconn">
          <ChevronLeftIcon
            onClick={() => swiperRef.current.swiper.slidePrev()}
            class="att-slide-icon"
          />
        </div>
        <Swiper
          direction="horizontal"
          slidesPerView={1}
          ref={swiperRef}
          modules={Navigation}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },

            720: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="free-swiper"
        >
          {freeCardImages?.map((card, index) => (
            <SwiperSlide key={index} className="att-swiper-slide">
              <FreeCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div class="slide-iconn">
          <ChevronRightIcon
            onClick={() => swiperRef.current.swiper.slideNext()}
            class="att-slide-icon"
          />
        </div>
      </div>
    </section>
  );
};
const mapStateToProps = (state) => ({
  freeCardImages: state.freeCardImages,
});

export default connect(mapStateToProps, { setFreeCardImages })(FreeAttractions);
