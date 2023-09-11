import React from "react";
import "./Howuse.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
const HowUseCard = () => {
  const { t } = useTranslation();
  const api = "https://static2.praguecoolpass.com/";
  const swiperParams = {
    direction: "horizontal",
    slidesPerView: 4,
    loop: false, // Loop devre dışı
    autoplay: false, // Otomatik oynatmayı devre dışı
    allowSlideNext: true, // Sonraki slayta geçişi engelle
    allowSlidePrev: true, // Önceki slayta geçişi engelle

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          // 768 piksel veya daha küçük ekranlarda noktaları etkinleştirin
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
  const items = t("pages.5fd771cc072e5479bded0f2b.how_to_use.descriptions", {
    returnObjects: true,
    something: "gold",
  });

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
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="how-use-step-new">
                <div
                  className="how-use-step-image"
                  style={{ backgroundImage: `url(${api}${t(item.web_images)})` }}
                >
                  <a className="how-use-m-link"></a>
                  <div style={{ display: "block" }}> </div>
                  <a className="how-use-m-link"></a>
                </div>
                <div className="how-use-step-number">{index + 1} </div>
                <div className="how-use-step-text">{t(item.descriptions)}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HowUseCard;
