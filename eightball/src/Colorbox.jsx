import React, { useState } from "react";
import Box from "./Box";

const Colorbox = () => {
  const coloring = [
    "red",
    "yellow",
    "orange",
    "green",
    "blue",
    "purple",
    "pink",
    "white",
    "black",
    "grey",
    "SaddleBrown",
    "SeaGreen",
    "GoldenRod",
    "OrangeRed",
    "CadetBlue",
    "Chocolate",
    "YellowGreen",
    "CornflowerBlue ",
    "Crimson",
    "DeepPink",
    "DarkTurquoise",
  ];

  // get random color
  const getRandomColor = () =>
    coloring[Math.floor(Math.random() * coloring.length)];

  // set colors to state (12 of them)
  const initialColors = Array.from({ length: 16 }, getRandomColor);
  const [colors, setColors] = useState(initialColors);

  // set random color on click
  const handleChangeColor = (index) => {
    const newColors = [...colors];
    newColors[index] = getRandomColor();
    setColors(newColors);
  };

  // make boxes
  const boxes = colors.map((color, index) => (
    <div
      key={index}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box color={color} />
      <button onClick={() => handleChangeColor(index)}>Change color</button>
    </div>
  ));

  return <div style={{ display: "flex", flexWrap: "wrap" }}>{boxes}</div>;
};

export default Colorbox;
