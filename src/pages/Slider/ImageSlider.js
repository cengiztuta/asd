import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";
import axios from "axios";
const ImageSlider = () => {
  const sliderRef = useRef(null);
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
    fetchTranslate();
  }, []);

  useEffect(() => {
    // Ekran boyutu değiştikçe slayt sayısını ayarlayın
    const handleResize = () => {
      if (sliderRef.current) {
        // Özelleştirilmiş slayt sayısı hesaplaması
        const screenWidth = window.innerWidth;
        let slidesToShow = 4; // Başlangıçta dört slayt göster

        if (screenWidth < 1024) {
          slidesToShow = 3; // Ekran genişliği 1024px'den küçükse 3 slayt göster
        }
        if (screenWidth < 768) {
          slidesToShow = 2; // Ekran genişliği 768px'den küçükse 2 slayt göster
        }
        if (screenWidth < 640) {
          slidesToShow = 1; // Ekran genişliği 640px'den küçükse 1 slayt göster
        }

        sliderRef.current.slickGoTo(0); // Aktif slaytı sıfırla
        sliderRef.current.slickSetOption(
          "slidesToShow",
          slidesToShow,
          true // Yeniden çizmeden önce ayarı güncelle
        );
      }
    };

    handleResize(); // Sayfa ilk yüklendiğinde çalıştır
    window.addEventListener("resize", handleResize); // Ekran boyutu değişikliklerini dinle

    return () => {
      window.removeEventListener("resize", handleResize); // Temizleme işlemi
    };
  }, []);

  return (
    <div className="image-slider-container">
      <Slider {...settings} className="image-slider">
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
