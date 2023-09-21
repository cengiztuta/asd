import React, { useState, useEffect } from "react";
import "./Offer.css";
import { useTranslation } from "react-i18next";
import { fetchDataTwo } from "../../dataFetching";
import { setTempDataTwo } from "../../redux/action";
import { connect } from "react-redux";
const OfferCard = ({ card, tempDataTwo }) => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language;
  const api = process.env.REACT_APP_IMAGE_URL;

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  useEffect(() => {
    fetchDataTwo();
  }, []);
  const Grid = () => {
    return (
      <div className="grid">
        {tempDataTwo[lng]?.offers.items.map((item, index) => (
          <div
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className={`pop-up ${hoveredIndex === index ? "active" : ""}`}
            key={index}
            style={{
              backgroundImage: `url(${api}${card[index]})`,
            }}
          >
            {hoveredIndex === index ? (
              <div className="hovered">
                <div className="text-container">
                  <p
                    className="pop-up-text-title"
                    dangerouslySetInnerHTML={{
                      __html: item.title,
                    }}
                  ></p>
                  <div className="pop-up-text">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: item.features_list,
                      }}
                    ></p>
                  </div>
                </div>
                <div className="pop-up-button-content">
                  <a className="see-all-button">
                    <button className="pop-up-button">
                      {item.button_text}{" "}
                    </button>
                  </a>
                </div>
              </div>
            ) : (
              <div className="pop-up-title">
                <p
                  className="pop-up-title-h3"
                  dangerouslySetInnerHTML={{
                    __html: item.title,
                  }}
                ></p>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Grid />
    </div>
  );
};

const mapStateToProps = (state) => ({
  tempDataTwo: state.tempDataTwo,
});

export default connect(mapStateToProps, { setTempDataTwo })(OfferCard);
