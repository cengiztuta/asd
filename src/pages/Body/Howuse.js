import React from "react";
import "./Howuse.css";
import step1 from "../images/step-1.jpg";
import step2 from "../images/step2.jpg";
import step3 from "../images/step3.jpg";
import step4 from "../images/step4.jpg";

const Howuse = () => {
  return (
    <div className="Howuse">
      <div className="Howuse-container">
        <h3 className="Howuse-title">
          HOW TO USE PRAGUE COOLPASS — FEW EASY STEPS
        </h3>
        <div className="Howuse-wrapper">
          <div className="Howuse-steps">
            <div className="steps">
              <div
                className="step-image"
                style={{ backgroundImage: `url(${step1})` }}
              >
                <a
                  href="https://apps.apple.com/us/app/prague-cool-pass/id1378275600"
                  target="_blank"
                  style={{
                    height: "50px",
                    width: "180px",
                    alignSelf: "center",
                    margin: "13px",
                  }}
                ></a>
                <div style={{ display: "block" }}></div>
                <a
                  href="https://play.google.com/store/apps/details?id=com.bookletia.coolpassprague"
                  target="_blank"
                  style={{
                    height: "50px",
                    width: "180px",
                    alignSelf: "center",
                    margin: "12px",
                  }}
                ></a>
              </div>
              <div className="step-number">1</div>
              <div className="step-text">
                {" "}
                Download free Prague CoolPass App to your smartphone and buy
                your CoolPass directly from the App or on our website.{" "}
              </div>
            </div>

            <div className="steps">
              <div
                className="step-image"
                style={{ backgroundImage: `url(${step2})` }}
              ></div>
              <div className="step-number">2</div>
              <div className="step-text">
                If you buy CoolPass in the App, you only need to register your
                name there. If buying on our website, you can easily download it
                to your phone by entering the code from your confirmation mail.
              </div>
            </div>

            <div className="steps">
              <div
                className="step-image"
                style={{ backgroundImage: `url(${step3})` }}
              ></div>
              <div className="step-number">3</div>
              <div className="step-text">
                Once your CoolPass is registered in the App, it displays a
                QR-code which you can use for entries, just show it at each
                attraction. The validity of your Pass is activated by the first
                entry.
              </div>
            </div>

            <div className="steps">
              <div
                className="step-image"
                style={{ backgroundImage: `url(${step4})` }}
              ></div>
              <div className="step-number">4</div>
              <div className="step-text">
                Instead of mobile CoolPass, you can order physical Prague Card
                and collect it upon arrival. Present your voucher in a printed
                or digital way at one of our centrally located collection
                points.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howuse;
