import React from "react";
import "./Benefits.css";

import TitleBoxComponents from "./BenefitsComponents/TitleBoxComponents";
import { position } from "@chakra-ui/react";

const Benefits = () => {
  return (
    <section>
      <h3 className="Benefits-title">
        EXPERIENCE PRAGUE WITH COOLPASS BENEFITS
      </h3>
      <div className="Benefits">
        <TitleBoxComponents />
        <div className="phone-content">
          <div className="Benefits-phone"></div>
          <div className="Benefits-prague-card"> </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
