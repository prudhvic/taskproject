import React from "react";

const Indicators = ({ setTabIndex, tabIndex }) => {
  return (
    <div className="dots">
      <button
        className={tabIndex === 0 ? "dot active" : "dot"}
        onClick={() => setTabIndex(0)}
      ></button>
      <button
        className={tabIndex === 1 ? "dot active" : "dot"}
        onClick={() => setTabIndex(1)}
      ></button>
      <button
        className={tabIndex === 2 ? "dot active" : "dot"}
        onClick={() => setTabIndex(2)}
      ></button>
    </div>
  );
};

export default Indicators;
