import React from "react";
import "./Box.css";

function Box({ id, handleRemove, color, width = 5, height = 5 }) {
  const remove = () => handleRemove(id);
  return (
    <div className="Box">
      <div
        className="Box-color"
        style={{
          backgroundColor: `${color}`,
          width: `${width}em`,
          height: `${height}em`,
        }}
      />
      <button className="Box-btn" onClick={remove}>
        X
      </button>
    </div>
  );
}

export default Box;
