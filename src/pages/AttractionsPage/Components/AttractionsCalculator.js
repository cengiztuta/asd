import React from "react";
import "../Attraction.css";
const AttractionsCalculator = ({
  selectedCardData,
  removeCard,
  clearAll,
  lng,
  tempData,
}) => {
  return (
    <div className="calculator-container">
      <div className="calculator-header">
        <span className="calculator-header-text">
          {tempData[lng]?.CALCULATOR_title}
        </span>
      </div>
      <div className="calculator-body">
        {selectedCardData.length > 0 ? (
          <div>
            <div className="liked-attractions-title">
              <p className="calculator-selected-card-adult">
                Normal Adult Price
              </p>
            </div>
            <div>
              {selectedCardData.map((item, index) => (
                <div className="attractions-list" key={index}>
                  <div
                    style={{
                      display: "flex",
                      background: "white",
                      marginTop: "5px",
                      minHeight: "16px",
                      alignItems: "center",
                    }}
                  >
                    <p className="attractions-list-title">
                      {item.card.content[lng].title}
                    </p>
                    <p className="attractions-list-price">
                      {item.card.priceAdult} Kč
                    </p>
                    <div
                      className="attractions-list_delete"
                      onClick={() => removeCard(index)}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="calculator-none-fav">
            {tempData[lng]?.CALCULATOR_tip}
          </div>
        )}
      </div>

      <div>
        <div className="clear-button-container">
          {selectedCardData.length > 0 ? (
            <div className="clear-button">
              <span className="clear" onClick={clearAll}>
                {tempData[lng]?.CALC_CLEAR}
              </span>
            </div>
          ) : null}
        </div>
        <div className="calculator-footer-button">
          <span className="calculator-footer-button-text">
            {tempData[lng]?.CALCULATOR_check_my_savings_btn}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AttractionsCalculator;
