import { SearchIcon } from "@chakra-ui/icons";
import React from "react";

const CategoryTab = ({
  lng,
  attractionsCategoryData,
  selectedArea,
  handleButtonClick,
  setSelectedArea,
  setAttractionsFilteredData,
  attractionsCardData,
  tempData,
  filteredDataTour,
}) => {
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
  return (
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
        </div>
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
          </div>
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
            <p>Outside Prague Tours</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryTab;
