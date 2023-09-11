import React from "react";
import "./Howuse.css";
import HowUseCard from "./HowUseCard";
import { useTranslation } from "react-i18next";

const Howuse = () => { 
  const {t} = useTranslation()
  return (
    <div className="Howuse">
      <div className="Howuse-container">
        <h3 className="Howuse-title">
          {t("translation.HOME_how_to_use_title")}
        </h3>

        <HowUseCard  />
      </div>
    </div>
  );
};

export default Howuse;
