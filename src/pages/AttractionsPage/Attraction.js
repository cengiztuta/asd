import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Attraction.css";
import "./Components/AreaList.css";
import { connect } from "react-redux";
import AttractionsCalculator from "./Components/AttractionsCalculator";
import {
  setTempData,
  setAttractionsCategoryData,
  setAttractionsCardData,
  setAttractionsData,
  setAttractionsContentData,
  setAttractionsRegionData,
} from "../../redux/action.js";
import {
  fetchData,
  fetchAttractionsCategoryData,
  fetchAttractionsCardData,
  fetchAttractionsData,
  fetchAttractionsRegionData,
} from "../../dataFetching";
import FreeAttractions from "./Components/FreeAttractions";
import AreaCard from "./Components/AreaCard";
import PragueAreas from "./Components/PragueAreas";
import CategoryTab from "./Components/CategoryTab";
import TableContainer from "./Components/TableContainer";
import SwitchButtons from "./Components/SwitchButtons";
import Regions from "./Components/Regions";
import SortSelect from "./Components/SortSelect";
const Attraction = ({
  tempData,
  attractionsCategoryData,
  attractionsCardData,
  attractionsContentData,
  attractionsData,
  attractionsRegionData,
}) => {
  const { i18n } = useTranslation();
  const lng = i18n.language;
  const [showCalculator, setShowCalculator] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState();
  const [showGrid, setShowGrid] = useState(true);
  const [showList, setShowList] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [selectedArea, setSelectedArea] = useState(null);
  const [attractionsFilteredCardData, setAttractionsFilteredData] = useState(
    []
  );
  const [cardLength, setCardLength] = useState(15);
  const [activeIcon, setActiveIcon] = useState(1);
  const api = process.env.REACT_APP_IMAGE_URL;
  const [selectedCardData, setSelectedCardData] = useState([]);
  const [filledItems, setFilledItems] = useState([]);

  const handleCalculatorClick = () => {
    setShowCalculator(!showCalculator);
  };
  useEffect(() => {
    fetchData();
    fetchAttractionsCategoryData();
    fetchAttractionsCardData();
    fetchAttractionsData();
    fetchAttractionsRegionData();
  }, []);
  useEffect(() => {
    setAttractionsFilteredData(attractionsCardData);
    setSelectedArea("change");
    setSelectedRegion(tempData[lng]?.ATTRACTIONS_order_by_popularity);
  }, [attractionsCardData]);

  const FavoriteArea = (index) => {
    if (filledItems[index]) {
      const updatedFilledItems = { ...filledItems };
      delete updatedFilledItems[index];
      setFilledItems(updatedFilledItems);
      removeCard(index);
    } else {
      const selectedCard = attractionsFilteredCardData[index];
      setSelectedCardData((prevData) => [
        ...prevData,
        { index, card: selectedCard },
      ]);
      setFilledItems({ ...filledItems, [index]: true });
    }
  };

  const removeCard = (index) => {
    const updatedSelectedCardData = selectedCardData.filter(
      (card) => card.index !== index
    );
    setSelectedCardData(updatedSelectedCardData);
    const updatedFilledItems = { ...filledItems };
    delete updatedFilledItems[index];
    setFilledItems(updatedFilledItems);
  };

  const handleButtonClick = (index) => {
    setSelectedArea(index);
    filteredDataNew(attractionsCategoryData[index]);
  };

  const handleClick = (iconNumber) => {
    setActiveIcon(iconNumber);
  };

  const [showMoreText, setShowMoreText] = useState(tempData?.[lng]?.SHOW_MORE);
  const ShowMore = () => {
    setCardLength(cardLength + 30);
    if (cardLength >= 105) {
      setShowMoreText(tempData[lng]?.SHOW_LESS);
    }
    if (showMoreText === tempData[lng]?.SHOW_LESS) {
      setCardLength(15);
      setShowMoreText(tempData?.[lng]?.SHOW_MORE);
      scrollToTop();
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 750,
      behavior: "smooth",
    });
  };

  const sortDataAZ = () => {
    const sortedData = [...attractionsFilteredCardData].sort((a, b) => {
      const titleA = a.content[lng]?.title;
      const titleB = b.content[lng]?.title;
      return titleA.localeCompare(titleB);
    });

    setAttractionsFilteredData(sortedData);
  };
  const sortDataBenefit = () => {
    const sortedData = [...attractionsFilteredCardData].sort((a, b) => {
      const benefitA = a.benefit;
      const benefitB = b.benefit;

      return benefitA.localeCompare(benefitB);
    });

    setAttractionsFilteredData(sortedData);
  };

  const sortDataFree = () => {
    const sortedData = [...attractionsFilteredCardData].sort((a, b) => {
      const benefitA = a.benefit;
      const benefitB = b.benefit;

      return benefitB.localeCompare(benefitA);
    });

    setAttractionsFilteredData(sortedData);
  };

  const filteredDataNew = (item) => {
    const filteredData = attractionsCardData.filter((i) => {
      return i.categories.includes(item._id);
    });
    setAttractionsFilteredData(filteredData);
  };

  const filteredDataTour = (item) => {
    const filteredData = attractionsCardData.filter((i) => {
      return i.categories.includes(item._id);
    });
    setAttractionsFilteredData(filteredData);
  };

  const clearAll = () => {
    setSelectedCardData([]);
    setFilledItems([]);
  };

  return (
    <div>
      <section
        className="attractions-header"
        style={{
          backgroundImage: `url(${api}${attractionsData?.mainImage?.web_image})`,
        }}
      >
        <div className="title-container">
          <div className="header-title">
            <a className="title"> {attractionsContentData[lng]?.title}</a>
            <p className="subtitle">{attractionsContentData[lng]?.subtitle}</p>
          </div>
        </div>
      </section>
      <div>
        <CategoryTab
          attractionsCardData={attractionsCardData}
          lng={lng}
          tempData={tempData}
          attractionsCategoryData={attractionsCategoryData}
          selectedArea={selectedArea}
          setSelectedArea={setSelectedArea}
          handleButtonClick={handleButtonClick}
          filteredDataTour={filteredDataTour}
          setAttractionsFilteredData={setAttractionsFilteredData}
        />
      </div>

      <main className="all-attractions">
        <div className="body-container">
          <div className="content-header">
            <h3> SIGHT SEEING TOURS</h3>
            <SwitchButtons
              activeIcon={activeIcon}
              handleClick={handleClick}
              setShowList={setShowList}
              setShowGrid={setShowGrid}
              setShowMap={setShowMap}
            />
            <Regions
              tempData={tempData}
              attractionsRegionData={attractionsRegionData}
              lng={lng}
            />
            <SortSelect
              lng={lng}
              tempData={tempData}
              sortDataAZ={sortDataAZ}
              sortDataBenefit={sortDataBenefit}
              sortDataFree={sortDataFree}
              setSelectedRegion={setSelectedRegion}
              selectedRegion={selectedRegion}
              attractionsFilteredCardData={attractionsFilteredCardData}
            />

            <div
              className="toggle-calculator"
              onClick={() => handleCalculatorClick()}
            >
              <span>
                {showCalculator
                  ? tempData[lng]?.CALCULATOR_hide_calculator
                  : tempData[lng]?.CALCULATOR_show_calculator}
              </span>
            </div>
          </div>

          <section
            className={
              showCalculator === false ? "hide-calculator" : "main-content"
            }
          >
            <div className="attractions">
              {showGrid && (
                <div className="grid-container">
                  <div
                    className={
                      showCalculator === true
                        ? "attractions-grid"
                        : "fourattractions-grid"
                    }
                  >
                    {attractionsFilteredCardData
                      ?.slice(0, cardLength)
                      .map((card, index) => (
                        <AreaCard card={card} key={index} />
                      ))}
                  </div>
                </div>
              )}{" "}
              {showList && (
                <TableContainer
                  attractionsFilteredCardData={attractionsFilteredCardData}
                  cardLength={cardLength}
                  filledItems={filledItems}
                  lng={lng}
                  tempData={tempData}
                  FavoriteArea={FavoriteArea}
                />
              )}
              {showMap && (
                <div
                  style={{
                    height: "100px",
                    width: "100px",
                    display: "flex",
                    background: "red",
                  }}
                ></div>
              )}
              <a
                className="area-link"
                style={showMap ? { display: "none" } : null}
              >
                <button className="area-button" onClick={ShowMore}>
                  {showMoreText}
                </button>
              </a>
            </div>{" "}
            {showCalculator === false ? null : (
              <div className="calculator">
                <AttractionsCalculator
                  selectedCardData={selectedCardData}
                  removeCard={removeCard}
                  clearAll={clearAll}
                  tempData={tempData}
                  lng={lng}
                />
              </div>
            )}
          </section>
        </div>
      </main>

      <section className="free-attractions">
        <FreeAttractions
          tempData={tempData}
          lng={lng}
          attractionsContentData={attractionsContentData}
        />
      </section>

      <section className="prague-areas">
        <section className="areas">
          <h3 className="area-title">
            {tempData[lng]?.ATTRACTIONS_prague_areas}
          </h3>
          <PragueAreas />
          <a className="area-link">
            <button className="area-button">{tempData[lng]?.SHOW_ALL}</button>{" "}
          </a>
        </section>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tempData: state.tempData,
  attractionsCategoryData: state.attractionsCategoryData,
  attractionsCardData: state.attractionsCardData,
  attractionsData: state.attractionsData,
  attractionsRegionData: state.attractionsRegionData,
  attractionsContentData: state.attractionsContentData,
});

export default connect(mapStateToProps, {
  setTempData,
  setAttractionsCategoryData,
  setAttractionsCardData,
  setAttractionsData,
  setAttractionsContentData,
  setAttractionsRegionData,
})(Attraction);
