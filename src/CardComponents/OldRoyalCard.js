import React from "react";
import "./Cards.css";

const OldRoyalCard = () => {
  const bg = require("../pages/images/old-royal.jpg");
  return (
    <div className="card">
      <img style={{ height: "204px", width: "270px" }} src={bg}></img>
    </div>
  );
};

export default OldRoyalCard;
