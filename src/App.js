import "./App.css";
import { useState } from "react";

import { pics as data } from "./data";
import CaraouselItem from "./components/CaraouselItem";
import Actions from "./components/Actions";
import Indicators from "./components/Indicators";
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landingpage";
import Pricingpanel from "./components/Pricingpanel";

function App() {
  let [pics, setPics] = useState(data);

  let [tabIndex, setTabIndex] = useState(0);
  let nextSlide = () => {
    if (tabIndex >= pics.length - 1) {
      setTabIndex(0);
    } else {
      setTabIndex((prevIndex) => prevIndex + 1);
    }
  };
  let prevSlide = () => {
    if (tabIndex <= 0) {
      setTabIndex(pics.length - 1);
    } else {
      setTabIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="caraousel-container">
        <Actions nextSlide={nextSlide} prevSlide={prevSlide} />
        <Indicators setTabIndex={setTabIndex} tabIndex={tabIndex} />
        {pics.map(
          (currentPic, index) =>
            tabIndex === index && <CaraouselItem currentPic={currentPic} />
        )}
      </div>
      <Landingpage />
      <Pricingpanel />
    </div>
  );
}

export default App;
