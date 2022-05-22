import React, { useState } from "react";
import Box from "./Box.js";
import NewBoxForm from "./NewBoxForm.js";
import "./BoxList.css";

function BoxList() {
  const startingBox = {
    color: "red",
    width: 3,
    height: 3,
    id: 1,
  };

  const secondBox = {
    color: "blue",
    id: 2,
  };

  const [boxes, setBoxes] = useState([startingBox, secondBox]);

  const addBox = (boxObj) => {
    setBoxes((boxes) => [...boxes, boxObj]);
  };

  const removeBox = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };

  const boxComponents = boxes.map((box) => (
    <Box
      key={box.id}
      id={box.id}
      color={box.color}
      width={box.width}
      height={box.height}
      handleRemove={removeBox}
    />
  ));

  return (
    <>
      <h1>Colorful Boxes!!!</h1>
      <div className="BoxList">{boxComponents}</div>
      <div>
        <NewBoxForm createBox={addBox} />
      </div>
    </>
  );
}

export default BoxList;
