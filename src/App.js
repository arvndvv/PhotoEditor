import React, { useState, useCallback } from "react";
import Slider from "./component/slider";
import Sidebaritem from "./component/sidebaritem";
import "./App.css";
const defaults = [
  {
    name: "Normal",
    property: "normal",
    value: 0,
    range: {
      min: 0,
      max: 0,
    },
    unit: "%",
  },
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Saturation",
    property: "saturate",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Grayscale",
    property: "grayscale",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Sepia",
    property: "sepia",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Hue Rotate",
    property: "hue-rotate",
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: "deg",
  },
  {
    name: "Blur",
    property: "blur",
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: "px",
  },
];

function App() {
  const [options, setOptions] = useState(defaults);
  const [selected, setSelected] = useState(0);
  const selecteditem = options[selected];
  const handleslider = ({ target }) => {
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if (index !== selected) return option;
        return { ...option, value: target.value };
      });
    });
  };

  const getImageStyle = useCallback(() => {
    if (selecteditem.property !== "normal") {
      const filters = options.map((option) => {
        if (option.property !== "normal") {
          return `${option.property}(${option.value}${option.unit})`;
        } else {
          return "";
        }
      });

      return { filter: filters.join(" ") };
    } else {
      return {
        filter:
          " brightness(100%) contrast(100%) saturate(100%) grayscale(0%) sepia(0%) hue-rotate(0deg) blur(0px)",
      };
    }
  }, [selecteditem, options]);
  const imgchange = ({ target }) => {
    console.log(target.innerHTML);
    if (target.innerHTML === "1") {
      console.log(target.innerHTML);
      document.querySelector("#img").classList.remove("main-img2");

      document.querySelector("#img").classList.add("main-img");
    }
    if (target.innerHTML === "2") {
      console.log(target.innerHTML);
      document.querySelector("#img").classList.add("main-img2");
    }
  };
  return (
    <div className="container">
      <div className="header">PhotoEditor</div>
      <div className="main-img" id="img" style={getImageStyle()}>
        <ul>
          <li onClick={imgchange}>1</li>
          <li onClick={imgchange}>2</li>
        </ul>
      </div>
      <div className="fxbar">
        {options.map((option, index) => {
          return (
            <Sidebaritem
              key={index}
              name={option.name}
              clas={option.property}
              active={index === selected}
              handlefilter={() => {
                setSelected(index);
              }}
            />
          );
        })}
      </div>
      <Slider
        min={selecteditem.range.min}
        max={selecteditem.range.max}
        value={selecteditem.value}
        handleChange={handleslider}
        unit={selecteditem.unit}
        property={selecteditem.property}
      />
      <footer>Code By B374BR4IN</footer>
    </div>
  );
}

export default App;
