import { useState } from "react";

import mainLogo from "./../images/Vector.png";

const Spot = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const newX = Math.random() * window.innerWidth;
    const newY = Math.random() * window.innerHeight;
    setPosition({ x: newX, y: newY });
  };
  return (
    <div
      className="main-logo"
      onMouseMove={handleMouseMove}
      style={{ top: position.y, left: position.x }}
    >
      <img src={mainLogo} alt="" />
    </div>
  );
};
export default Spot;
