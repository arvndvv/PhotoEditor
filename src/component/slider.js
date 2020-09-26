import React from "react";
const Slider = ({ min, max, value, handleChange, unit, property }) => {
  const normal = property === "normal";
  var lef = (value / max) * 100;
  var style = { left: `${lef}%` };
  return (
    <div className="slider-container">
      <span className="slideval-container">
        <input
          min={min}
          max={max}
          value={value}
          type="range"
          id="myRange"
          onChange={handleChange}
          //{`fxbar-item ${props.clas} ${props.active ? "active" : ""}`}
          className={`slider ${normal ? "hide" : ""}`}
        ></input>
        <span
          id="val"
          className={`${normal ? "hide" : ""}`}
          style={style}
        >{`${value}${unit}`}</span>
      </span>
    </div>
  );
};
export default Slider;
