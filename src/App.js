import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/MainPage/Main";
import Footer from "./pages/Footer/Footer";

import Attraction from "../src/pages/AttractionsPage/Attraction";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/attractions" element={<Attraction />} />
      </Routes>
 <Footer/>
    </div>
  );
}

export default App;
