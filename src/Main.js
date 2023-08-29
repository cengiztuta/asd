import React from "react";
import Header from "./pages/Header/Header";
import Slider from "./pages/Slider/Slider";
import Body from "./pages/Body/Body";
import Footer from "./pages/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Body />
      <Footer/>
    </div>
  );
};

export default Main;
