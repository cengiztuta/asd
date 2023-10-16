import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import "./Attraction.css";
import "./Components/AreaList.css";
import { Input, background } from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { LuLayoutGrid, LuList, LuMapPin } from "react-icons/lu";
import { GoTriangleDown } from "react-icons/go";
import { connect } from "react-redux";
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
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
} from "@chakra-ui/react";
import FreeAttractions from "./Components/FreeAttractions";
import AreaCard from "./Components/AreaCard";
import PragueAreas from "./Components/PragueAreas";
const Attraction = ({
  tempData,
  attractionsCategoryData,
  attractionsCardData,
  attractionsContentData,
  attractionsData,
  attractionsRegionData,
}) => {
  const DataURL = process.env.REACT_APP_DATA_URL;
  const { i18n } = useTranslation();
  const lng = i18n.language;
  const [showCalculator, setShowCalculator] = useState(true);

  const [selectedRegion, setSelectedRegion] = useState(
    tempData[lng]?.ATTRACTIONS_order_by_popularity
  );
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
  const selectedTitlesIndex = [
    1, 11, 12, 16, 15, 2, 3, 13, 6, 7, 14, 9, 8, 5, 10,
  ];
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

  const categoryID = [
    "6427f0f0dea6bc5b8890f590",
    "5f575890418c980b69d941bb",
    "5f57a9b9418c980b69d941bd",
    "59f5f6bd55b58747073c3e8c",
    "59f5f6c555b58747073c3e8d",
    "6480333931761314e0f641e2",
    "5f57b24a418c980b69d941be",
    "59f5f6b555b58747073c3e8b",
    "59f5f6cd55b58747073c3e8e",
  ];
  const categoryTourID = [
    "59f5f69a55b58747073c3e88",
    "5f5792d8418c980b69d941bc",
    "59f5f6a155b58747073c3e89",
  ];
  const categoryOutsideID = { _id: "62d12641116d510b0126d420" };

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
      <section className="category-tab">
        <p className="author">
          {" "}
          {tempData[lng]?.HEADER_photo_by_label} National Museum
        </p>
        <div className="category-container">
          <div className="row-filters">
            <div className="input-container">
              <input
                className="input"
                type="text"
                placeholder={tempData[lng]?.SEARCH}
              />
              <SearchIcon color={"gray"} className="icon" />
            </div>
          </div>{" "}
          <div className="row-main-category">
            <div
              className={selectedArea === "change" ? "selected" : "category"}
              onClick={function () {
                setAttractionsFilteredData(attractionsCardData);
                setSelectedArea("change");
              }}
            >
              {tempData[lng]?.ALL_ATTRACTIONS.toUpperCase()}
            </div>
            {attractionsCategoryData.map((item, index) =>
              categoryID.includes(item._id) ? (
                <div
                  className={selectedArea === index ? "selected" : "category"}
                  key={index}
                >
                  <p
                    style={{ alignSelf: "center" }}
                    onClick={() => handleButtonClick(index)}
                  >
                    {item?.content[lng]?.title}
                  </p>
                </div>
              ) : null
            )}

            <div className="seperator"> </div>
          </div>
          <div className="row-tours">
            {" "}
            <div
              className={selectedArea === "Sight" ? "selected" : "category"}
              onClick={function () {
                setAttractionsFilteredData(attractionsCardData);
                setSelectedArea("Sight");
              }}
            >
              {tempData[lng]?.FOOTER_sightseeing_tours.toUpperCase()}{" "}
            </div>{" "}
            {attractionsCategoryData.map((item, index) =>
              categoryTourID.includes(item._id) ? (
                <div
                  className={selectedArea === index ? "selected" : "category"}
                  key={index}
                >
                  <p
                    style={{ alignSelf: "center" }}
                    onClick={() => handleButtonClick(index)}
                  >
                    {item?.content[lng]?.title}
                  </p>{" "}
                </div>
              ) : null
            )}
            <div
              className={selectedArea === "OutSide" ? "selected" : "category"}
              onClick={function () {
                setAttractionsFilteredData(attractionsCardData);
                setSelectedArea("OutSide");
                filteredDataTour(categoryOutsideID);
              }}
            >
              {" "}
              <p>Outside Prague Tours</p>
            </div>
          </div>
        </div>
      </section>

      <main className="all-attractions">
        <div className="body-container">
          <div className="content-header">
            <h3> SIGHT SEEING TOURS</h3>
            <div className="switch-buttons">
              <LuLayoutGrid
                onClick={function (event) {
                  handleClick(1);
                  setShowGrid(true);
                  setShowList(false);
                  setShowMap(false);
                }}
                color={activeIcon === 1 ? "#da4b07" : ""}
                size={"25px"}
              />

              <LuList
                onClick={function (event) {
                  handleClick(2);
                  setShowList(true);
                  setShowGrid(false);
                  setShowMap(false);
                }}
                size={"25px"}
                color={activeIcon === 2 ? "#da4b07" : ""}
              />
              <LuMapPin
                onClick={function (event) {
                  handleClick(3);
                  setShowList(false);
                  setShowGrid(false);
                  setShowMap(true);
                }}
                color={activeIcon === 3 ? "#da4b07" : ""}
                size={"25px"}
              />
            </div>
            <div className="region-select">
              {" "}
              <Box p="4">
                <Menu>
                  <MenuButton
                    className="region-button"
                    as={Button}
                    rightIcon={<GoTriangleDown />}
                  >
                    {tempData[lng]?.AREA_all_areas_btn}
                  </MenuButton>
                  <MenuList className="region-list" zIndex={100}>
                    <MenuItem className="menu-item">
                      {tempData[lng]?.AREA_all_areas_btn}
                    </MenuItem>
                    {selectedTitlesIndex.map((index) => (
                      <MenuItem className="menu-item" key={index}>
                        {
                          attractionsRegionData[index - 1]?.content?.[lng]
                            ?.title
                        }
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              </Box>
            </div>{" "}
            <Box p="4">
              <Menu>
                <MenuButton
                  className="region-button"
                  as={Button}
                  rightIcon={<GoTriangleDown />}
                >
                  {selectedRegion}
                </MenuButton>
                <MenuList maxH="200px" overflowY="auto" zIndex={10} w={"100%"}>
                  <MenuItem
                    className="menu-item"
                    onClick={function () {
                      sortDataAZ();
                      setSelectedRegion("A-Z");
                    }}
                  >
                    {" "}
                    A-Z
                  </MenuItem>
                  <MenuItem
                    className="menu-item"
                    onClick={function () {
                      setSelectedRegion(
                        tempData[lng]?.ATTRACTIONS_order_by_popularity
                      );
                    }}
                  >
                    {tempData[lng]?.ATTRACTIONS_order_by_popularity}
                  </MenuItem>
                  <MenuItem
                    className="menu-item"
                    onClick={function () {
                      setSelectedRegion(
                        tempData[lng]?.ATTRACTIONS_order_by_discounts
                      );
                      sortDataBenefit(attractionsFilteredCardData);
                    }}
                  >
                    {tempData[lng]?.ATTRACTIONS_order_by_discounts}
                  </MenuItem>
                  <MenuItem
                    className="menu-item"
                    onClick={function () {
                      setSelectedRegion(
                        tempData[lng]?.ATTRACTIONS_order_by_free
                      );
                      sortDataFree();
                    }}
                  >
                    {tempData[lng]?.ATTRACTIONS_order_by_free}
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <div
              className="toggle-calculator"
              onClick={() => handleCalculatorClick()}
            >
              {" "}
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
                <div className="table-container">
                  <table>
                    <thead>
                      <tr>
                        <th colSpan={2} className="attractions-summary"></th>
                        <th className="price-title">
                          {" "}
                          Normal Entry Price (Adult/Student)
                        </th>
                        <th className="benefit-col">CoolPass benefit</th>
                        <th className="like-col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {attractionsFilteredCardData
                        .slice(0, cardLength)
                        .map((item, index) => (
                          <tr key={index}>
                            <td className="attraction-image-col">
                              <div
                                className="attraction-image"
                                style={{
                                  backgroundImage: `url(${api}${item.webimages[0]})`,
                                }}
                              >
                                {" "}
                              </div>
                            </td>
                            <td className="attraction-row">
                              {item.content[lng]?.title}{" "}
                            </td>
                            <td className="price">
                              {" "}
                              {item?.priceAdult}Kč / {item.priceStudent} Kč{" "}
                            </td>
                            <td className="benefit-value"> {item?.benefit} </td>
                            <td className="like-col">
                              <Box className="like-button">
                                {filledItems[index] ? (
                                  <HiHeart
                                    className="area-heart-image"
                                    onClick={() => FavoriteArea(index)}
                                  />
                                ) : (
                                  <HiOutlineHeart
                                    className="area-heart-image"
                                    onClick={() => FavoriteArea(index)}
                                  />
                                )}
                              </Box>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>{" "}
                </div>
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
                <div className="calculator-container">
                  <div className="calculator-header">
                    <span className="calculator-header-text">
                      {" "}
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
                            <div className="attractions-list">
                              <div
                                style={{
                                  display: "flex",
                                  background: "white",
                                  marginTop: "5px",
                                  minHeight: "16px",
                                  alignItems: "center",
                                }}
                                key={index}
                              >
                                <p className="attractions-list-title">
                                  {item.card.content[lng]?.title}
                                </p>
                                <p className="attractions-list-price">
                                  {" "}
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
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </main>

      <section className="free-attractions">
        <div className="header-container">
          {" "}
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

        <FreeAttractions />
      </section>

      <section className="prague-areas">
        <section className="areas">
          <h3 className="area-title">
            {tempData[lng]?.ATTRACTIONS_prague_areas}
          </h3>
          <PragueAreas />
          <a className="area-link">
            {" "}
            <button className="area-button">
              {tempData[lng]?.SHOW_ALL}
            </button>{" "}
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
