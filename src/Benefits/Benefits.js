import React from "react";
import "./Benefits.css";

import TitleBoxComponents from "./BenefitsComponents/TitleBoxComponents";

const Benefits = () => {
  return (
    <section>
      <h3 className="Benefits-title">
        EXPERIENCE PRAGUE WITH COOLPASS BENEFITS
      </h3>
      <div className="Benefits">
        <div className="buse">
          <TitleBoxComponents />
          <div
            style={{
              height: "390px",
              width: "195px",
              backgroundColor: "red",
              justifyContent:'center',
              alignSelf:'center'
         
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
