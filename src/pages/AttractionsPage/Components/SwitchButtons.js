import React from "react";
import { LuLayoutGrid, LuList, LuMapPin } from "react-icons/lu";
const SwitchButtons = ({
  activeIcon,
  handleClick,
  setShowList,
  setShowGrid,
  setShowMap,
}) => {
  return (
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
  );
};

export default SwitchButtons;
