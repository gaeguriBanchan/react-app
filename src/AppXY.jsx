import React, { useState } from "react";
import "./AppXY.css";

const AppXY = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  return (
    <div
      className="container"
      onPointerMove={(e) => {
        console.log(e.clientX, e.clientY);
        // setPosition({x: e.clientX, y: e.clientY})
        // 수평으로만 이동한다면? => ...prev 로 바뀌지않는건 이전값을 유지 시킬수있다
        setPosition((prev)=>({...prev, x: e.clientX}))
      }}
    >
      <div
        className="pointer"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      />
      <div></div>
    </div>
  );
};

export default AppXY;
