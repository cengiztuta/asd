import React, { useState, useEffect } from "react";
import "./Benefits.css";
import axios from "axios";
import BenefitsCard from "./BenefitsCard.js";
import "./Benefits.css";
const Benefits = () => {
  return (
    <section style={{marginTop:'40px'}}>
  
        <h3 className="Benefits-title">
          EXPERIENCE PRAGUE WITH COOLPASS BENEFITS
        </h3>

      <div className="Benefits">
        <BenefitsCard />
        <div className="phone-content">
          <div className="Benefits-phone"></div>
          <div className="Benefits-prague-card"> </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
