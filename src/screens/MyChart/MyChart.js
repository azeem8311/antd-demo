import React, { useEffect, useState } from "react";

const MyChart = () => {
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  const [moves, setMoves] = useState(false);

  var dragValue;

  var element = document.getElementById("el");
  useEffect(() => {}, []);

  const move = () => {
    setMoves(true);
  };
  const mouseDown = () => {
    dragValue = element;
  };

  const moveMouse = (e) => {
    var x = e.pageX;
    var y = e.pageY;

    setX(x);
    setY(y);
  };

  return (
    <div
      id="el"
      style={{ position: "absolute", left: x + "px", topL: y + "px" }}
      onMouseMove={moveMouse}
      onLoad={move}
      onMouseDown={mouseDown}
    >
      hello
    </div>
  );
};

export default MyChart;
