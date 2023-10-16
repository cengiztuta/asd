import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
} from "@chakra-ui/react";
import { GoTriangleDown } from "react-icons/go";
const SortSelect = ({
  tempData,
  lng,
  sortDataAZ,
  sortDataBenefit,
  sortDataFree,
  setSelectedRegion,
  selectedRegion,
  attractionsFilteredCardData,
}) => {
  return (
    <div>
      {" "}
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
                setSelectedRegion(tempData[lng]?.ATTRACTIONS_order_by_free);
                sortDataFree();
              }}
            >
              {tempData[lng]?.ATTRACTIONS_order_by_free}
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </div>
  );
};

export default SortSelect;
