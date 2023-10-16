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
const Regions = ({ tempData, attractionsRegionData, lng }) => {
  const selectedTitlesIndex = [
    1, 11, 12, 16, 15, 2, 3, 13, 6, 7, 14, 9, 8, 5, 10,
  ];
  return (
    <div className="region-select">
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
                {attractionsRegionData[index - 1]?.content?.[lng]?.title}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
    </div>
  );
};

export default Regions;
