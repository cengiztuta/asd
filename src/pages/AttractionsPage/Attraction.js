import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import "./Attraction.css";
import { Input, background } from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { LuLayoutGrid, LuList, LuMapPin } from "react-icons/lu";
import { GoTriangleDown } from "react-icons/go";
import { connect } from "react-redux";
import { setTempData, setTempDataTwo } from "../../redux/action.js";
import { fetchData, fetchDataTwo } from "../../dataFetching";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import {
  ChakraProvider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";

import FreeAttractions from "./Components/FreeAttractions";
import AreaCard from "./Components/AreaCard";
import AreaList from "./Components/AreaList";
import { use } from "i18next";
const Attraction = ({ tempData }) => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language;
  const [showCalculator, setShowCalculator] = useState(true);
  const [attractionsData, setAttractionsData] = useState([]);
  const [show, setShow] = useState(false);
  const [favoriteCard, setFavoriteCard] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(
    tempData[lng]?.ATTRACTIONS_order_by_popularity
  );
  const [showGrid, setShowGrid] = useState(true);
  const [showList, setShowList] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [attractionsCategoryData, setAttractionsCategoryData] = useState([]);
  const [selectedArea, setSelectedArea] = useState(null);
  const [regionsData, setRegionsData] = useState([]);
  const [attractionsContentData, setAttractionsContentData] = useState([]);
  const [attractionsCardData, setAttractionsCardData] = useState([]);
  const [attractionsFilteredCardData, setAttractionsFilteredData] = useState(
    []
  );

  const [cardLength, setCardLength] = useState(15);
  const [activeIcon, setActiveIcon] = useState(1);

  const api = process.env.REACT_APP_IMAGE_URL;

  const [filledItems, setFilledItems] = useState({});
  const handleCalculatorClick = () => {
    setShowCalculator(!showCalculator);
  };
  const FavoriteArea = (index) => {
    setFilledItems((prevFilledItems) => ({
      ...prevFilledItems,
      [index]: !prevFilledItems[index],
    }));
  };
  const handleButtonClick = (index) => {
    setSelectedArea(index);
    filteredDataNew(attractionsCategoryData[index]);
  };
  const handleClick = (iconNumber) => {
    setActiveIcon(iconNumber);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const getAttractionsCardData = async () => {
    try {
      const response = await axios.get(
        "https://api2.praguecoolpass.com/object/attraction/"
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  const fetchAttractionsCardData = async () => {
    const data = await getAttractionsCardData();

    setAttractionsCardData(data);
    setAttractionsFilteredData(data);
  };
  useEffect(() => {
    fetchAttractionsCardData();
  }, []);

  const getAttractionsData = async () => {
    try {
      const response = await axios.get(
        "https://api2.praguecoolpass.com/pages/5fe31408c1478823bac06380"
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  const fetchAttractionsData = async () => {
    const data = await getAttractionsData();

    setAttractionsData(data);
    setAttractionsContentData(data.content);
  };
  useEffect(() => {
    fetchAttractionsData();
  }, []);

  const getAttractionsCategoryData = async () => {
    try {
      const response = await axios.get(
        "https://api2.praguecoolpass.com/category"
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  const fetchAttractionsCategoryData = async () => {
    const data = await getAttractionsCategoryData();

    setAttractionsCategoryData(data);
  };
  useEffect(() => {
    fetchAttractionsCategoryData();
  }, []);

  const getRegionsData = async () => {
    try {
      const response = await axios.get("https://api2.praguecoolpass.com/area");
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  const fetchRegionsData = async () => {
    const data = await getRegionsData();

    setRegionsData(data);
  };
  useEffect(() => {
    fetchRegionsData();
  }, []);
  const selectedTitlesIndex = [
    1, 11, 12, 16, 15, 2, 3, 13, 6, 7, 14, 9, 8, 5, 10,
  ];
  const selectedCategoryIndex = [1, 2, 3, 4, 5, 9, 10, 12, 13];
  const selectedTourIndex = [6, 7, 8];
  const areaIndex = [1, 11, 12, 16, 15, 2, 3, 13];

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
  const allTours = [
    { _id: "62d12641116d510b0126d420" },
    { _id: "59f5f69a55b58747073c3e88" },
    { _id: "5f5792d8418c980b69d941bc" },
    { _id: "59f5f6a155b58747073c3e89" },
  ];

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
  const resetData = () => {
    setAttractionsFilteredData(attractionsCardData);
  };

  console.log();
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
                  <MenuList
                    maxH="200px"
                    overflowY="scroll"
                    overflowX={"none"}
                    width={"198px"}
                    borderWidth={1}
                    borderColor={"red"}
                    zIndex={100}
                  >
                    <MenuItem className="menu-item">
                      {tempData[lng]?.AREA_all_areas_btn}
                    </MenuItem>
                    {selectedTitlesIndex.map((index) => (
                      <MenuItem className="menu-item" key={index}>
                        {regionsData[index - 1]?.content?.[lng]?.title}
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
                      resetData();
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
                    <div className="calculator-none-fav">
                      {tempData[lng]?.CALCULATOR_tip}{" "}
                    </div>
                  </div>

                  <div>
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
          <div className="areas-wrapper">
            {areaIndex.map((index) => (
              <div
                className="area-card"
                style={{
                  backgroundImage: `url(${api}${
                    regionsData[index - 1]?.webimages
                  })`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                key={index}
              >
                <Box
                  className="free-card-footer"
                  onMouseEnter={() => setShow(index)}
                  onMouseLeave={() => setShow(false)}
                >
                  <Box className="free-card-footer-content">
                    <p className="free-card-title">
                      {regionsData[index - 1]?.content[lng]?.title}
                    </p>
                  </Box>
                  ;
                  {show === index && (
                    <Box className="free-card-footer-text-content">
                      <Text className="free-card-footer-text" key={index}>
                        {regionsData[index - 1]?.content?.en?.subtitle}
                      </Text>
                    </Box>
                  )}
                </Box>
              </div>
            ))}
          </div>
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
});

export default connect(mapStateToProps, { setTempData })(Attraction);