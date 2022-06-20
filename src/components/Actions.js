import React from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
const Actions = ({ prevSlide, nextSlide }) => {
  return (
    <div className="btns">
      <button onClick={prevSlide} className="prev-btn btn">
        <BsFillArrowLeftCircleFill />
      </button>
      <button onClick={nextSlide} className="next-btn btn">
        <BsFillArrowRightCircleFill />
      </button>
    </div>
  );
};

export default Actions;
