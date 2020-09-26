import React from "react";

const Sidebaritem = (props) => {
  return (
    <div>
      <button
        className={`fxbar-item ${props.clas} ${props.active ? "active" : ""}`}
        onClick={props.handlefilter}
      >
        {props.name}
      </button>
    </div>
  );
};
export default Sidebaritem;
