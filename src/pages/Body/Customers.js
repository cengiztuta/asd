import React, { useRef, useState } from "react";
import "./Customer.css";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { Box } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import star from "../images/star.png";
import activeStar from "../images/active-star.png";
import inactiveStar from "../images/star.png";
import "swiper/css/navigation";

function ExpandableText({ initialText, expandedText }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="customer-text-container">
      <div className="customer-text">
        {expanded ? expandedText : initialText}
        <a onClick={toggleExpand} className="more-less-button">
          {expanded ? "less " : "more"}
        </a>
      </div>
    </div>
  );
}

const Customers = () => {
  const initialText =
    "Lo mejor, no esperar colas en, el tour en barco por que fueron súper amables y nos dieron de beber y comer un snack y la comidad. Y por poner alguna pega, que no entra el funicular...";
  const expandedText =
    "Lo mejor, no esperar colas en, el tour en barco por que fueron súper amables y nos dieron de beber y comer un snack y la comidad. Y por poner alguna pega, que no entra el funicular porque han quitado el transporte público desde febrero de 2019 y tampoco entra la torre del ayuntamiento..pero recomiendo comprarla!";
  const swiperRef = useRef(null);
  return (
    <div className="customer">
      <div className="customer-container">
        <div className="title-container">
          <h3 className="customer-title">
            {" "}
            WHAT OUR CUSTOMERS SAY ABOUT COOLPASS /PRAGUE CARD{" "}
          </h3>

          <div className="title-stars-rating">
            <h3
              className="customer-title"
              style={{ alignSelf: "center", marginRight: "10px" }}
            >
              4.5
            </h3>
            <span
              class="star"
              style={{
                backgroundImage: `url(${activeStar})`,
              }}
            ></span>
            <span
              class="star"
              style={{
                backgroundImage: `url(${activeStar})`,
              }}
            ></span>
            <span
              class="star"
              style={{
                backgroundImage: `url(${activeStar})`,
              }}
            ></span>
            <span
              class="star"
              style={{
                backgroundImage: `url(${activeStar})`,
              }}
            ></span>
            <span
              class="star"
              style={{
                backgroundImage: `url(${inactiveStar})`,
              }}
            ></span>
          </div>
        </div>

        <div className="customer-wrapper">
          <div className="customer-wrapper-content">
            <Box
              w={"1188px"}
              h={"383px"}
              position={"relative"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              display={"flex"}
            >
              <Box
                h={"24px"}
                cursor={"pointer"}  
                onClick={() => swiperRef.current.swiper.slidePrev()}
              >
                <ChevronLeftIcon w={"24px"} h={"100%"} />
              </Box>

              <Swiper slidesPerView={3} modules={Navigation} ref={swiperRef}>
                <SwiperSlide>
                  <div className="customer-card">
                    <div className="customer-card-header">
                      <div className="stars-rating">
                        <span
                          class="star"
                          style={{
                            backgroundImage: `url(${activeStar})`,
                          }}
                        ></span>
                        <span
                          class="star"
                          style={{
                            backgroundImage: `url(${activeStar})`,
                          }}
                        ></span>
                        <span
                          class="star"
                          style={{
                            backgroundImage: `url(${activeStar})`,
                          }}
                        ></span>
                        <span
                          class="star"
                          style={{
                            backgroundImage: `url(${activeStar})`,
                          }}
                        ></span>
                        <span
                          class="star"
                          style={{
                            backgroundImage: `url(${activeStar})`,
                          }}
                        ></span>
                      </div>
                      <div className="customer-summary"> Todo excepcional </div>
                      <div className="customer-date">July 19, 2019</div>
                    </div>
                    <div className="customer-body">
                      <ExpandableText
                        initialText={initialText}
                        expandedText={expandedText}
                      />{" "}
                    </div>
                    <div className="customer-footer">
                      {" "}
                      <div className="customer-data">
                        {" "}
                        Cristina, Madrid, Spain{" "}
                      </div>
                      <div className="see-translation"></div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="customer-card">
                    <div className="customer-card-header">
                      <div className="stars-rating">
                        <span
                          class="star"
                          style={{
                            backgroundImage: `url(${activeStar})`,
                          }}
                        ></span>
                        <span
                          class="star"
                          style={{
                            backgroundImage: `url(${activeStar})`,
                          }}
                        ></span>
                        <span
                          class="star"
                          style={{
                            backgroundImage: `url(${activeStar})`,
                          }}
                        ></span>
                        <span
                          class="star"
                          style={{
                            backgroundImage: `url(${activeStar})`,
                          }}
                        ></span>
                        <span
                          class="star"
                          style={{
                            backgroundImage: `url(${activeStar})`,
                          }}
                        ></span>
                      </div>
                      <div className="customer-summary"> Todo excepcional </div>
                      <div className="customer-date">July 19, 2019</div>
                    </div>
                    <div className="customer-body">
                      <ExpandableText
                        initialText={initialText}
                        expandedText={expandedText}
                      />{" "}
                    </div>
                    <div className="customer-footer">
                      {" "}
                      <div className="customer-data">
                        {" "}
                        Cristina, Madrid, Spain{" "}
                      </div>
                      <div className="see-translation"></div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="customer-card">
                    <div className="customer-card-header">
                      <div className="stars-rating">
                        <span
                          class="star"
                          style={{
                            backgroundImage: `url(${activeStar})`,
                          }}
                        ></span>
                        <span
                          class="star"
                          style={{
                            backgroundImage: `url(${activeStar})`,
                          }}
                        ></span>
                        <span
                          class="star"
                          style={{
                            backgroundImage: `url(${activeStar})`,
                          }}
                        ></span>
                        <span
                          class="star"
                          style={{
                            backgroundImage: `url(${activeStar})`,
                          }}
                        ></span>
                        <span
                          class="star"
                          style={{
                            backgroundImage: `url(${activeStar})`,
                          }}
                        ></span>
                      </div>
                      <div className="customer-summary"> Todo excepcional </div>
                      <div className="customer-date">July 19, 2019</div>
                    </div>
                    <div className="customer-body">
                      <ExpandableText
                        initialText={initialText}
                        expandedText={expandedText}
                      />{" "}
                    </div>
                    <div className="customer-footer">
                      {" "}
                      <div className="customer-data">
                        {" "}
                        Cristina, Madrid, Spain{" "}
                      </div>
                      <div className="see-translation"></div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="customer-card">
                    <div className="customer-card-header">
                      <div className="stars-rating">
                        <span
                          class="star"
                          style={{
                            backgroundImage: `url(${activeStar})`,
                          }}
                        ></span>
                        <span
                          class="star"
                          style={{
                            backgroundImage: `url(${activeStar})`,
                          }}
                        ></span>
                        <span
                          class="star"
                          style={{
                            backgroundImage: `url(${activeStar})`,
                          }}
                        ></span>
                        <span
                          class="star"
                          style={{
                            backgroundImage: `url(${activeStar})`,
                          }}
                        ></span>
                        <span
                          class="star"
                          style={{
                            backgroundImage: `url(${activeStar})`,
                          }}
                        ></span>
                      </div>
                      <div className="customer-summary"> Todo excepcional </div>
                      <div className="customer-date">July 19, 2019</div>
                    </div>
                    <div className="customer-body">
                      <ExpandableText
                        initialText={initialText}
                        expandedText={expandedText}
                      />{" "}
                    </div>
                    <div className="customer-footer">
                      {" "}
                      <div className="customer-data">
                        {" "}
                        Cristina, Madrid, Spain{" "}
                      </div>
                      <div className="see-translation"></div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="customer-card">
                    <div className="customer-card-header">
                      <div className="stars-rating">
                        <span
                          class="star"
                          style={{
                            backgroundImage: `url(${activeStar})`,
                          }}
                        ></span>
                        <span
                          class="star"
                          style={{
                            backgroundImage: `url(${activeStar})`,
                          }}
                        ></span>
                        <span
                          class="star"
                          style={{
                            backgroundImage: `url(${activeStar})`,
                          }}
                        ></span>
                        <span
                          class="star"
                          style={{
                            backgroundImage: `url(${activeStar})`,
                          }}
                        ></span>
                        <span
                          class="star"
                          style={{
                            backgroundImage: `url(${activeStar})`,
                          }}
                        ></span>
                      </div>
                      <div className="customer-summary"> Todo excepcional </div>
                      <div className="customer-date">July 19, 2019</div>
                    </div>
                    <div className="customer-body">
                      <ExpandableText
                        initialText={initialText}
                        expandedText={expandedText}
                      />{" "}
                    </div>
                    <div className="customer-footer">
                      {" "}
                      <div className="customer-data">
                        {" "}
                        Cristina, Madrid, Spain{" "}
                      </div>
                      <div className="see-translation"></div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="customer-card">
                    <div className="customer-card-header">
                      <div className="stars-rating">
                        <span
                          class="star"
                          style={{
                            backgroundImage: `url(${activeStar})`,
                          }}
                        ></span>
                        <span
                          class="star"
                          style={{
                            backgroundImage: `url(${activeStar})`,
                          }}
                        ></span>
                        <span
                          class="star"
                          style={{
                            backgroundImage: `url(${activeStar})`,
                          }}
                        ></span>
                        <span
                          class="star"
                          style={{
                            backgroundImage: `url(${activeStar})`,
                          }}
                        ></span>
                        <span
                          class="star"
                          style={{
                            backgroundImage: `url(${activeStar})`,
                          }}
                        ></span>
                      </div>
                      <div className="customer-summary"> Todo excepcional </div>
                      <div className="customer-date">July 19, 2019</div>
                    </div>
                    <div className="customer-body">
                      <ExpandableText
                        initialText={initialText}
                        expandedText={expandedText}
                      />{" "}
                    </div>
                    <div className="customer-footer">
                      {" "}
                      <div className="customer-data">
                        {" "}
                        Cristina, Madrid, Spain{" "}
                      </div>
                      <div className="see-translation"></div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <Box
                h={"24px"}
                cursor={"pointer"}
                onClick={() => swiperRef.current.swiper.slideNext()}
              >
                <ChevronRightIcon w={"24px"} h={"100%"} />
              </Box>
            </Box>
         
          </div>
          <div className="pagination-container" >
           <button className="pagination-button-all" ><a>SEE ALL REVIEWS</a></button>
           <button className="pagination-button-write" ><a>WRITE YOUR REWIEV</a></button>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
