import React, { useState } from "react";
import "./../cycles/cycles.css";
import bodyIcon from "./../../../images/body.png";
import vaginaIcon from "./../../../images/vagina.png";
import foodIcon from "./../../../images/food.png";
import workoutIcon from "./../../../images/workout.png";

const accordionItems = [
  { title: "body", icon: bodyIcon },
  { title: "vagina", icon: vaginaIcon },
  { title: "food", icon: foodIcon },
  { title: "workout", icon: workoutIcon },
];

const AccordionItem = ({ title, icon, content }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="accordion-item">
      <button className="cycle-btn-element sans" onClick={toggleAccordion}>
        <span className="cycle-element-icon">
          <img src={icon} alt={title} />
        </span>
        <span className="accordion-title">{title}</span>
      </button>
      <div
        className="sans panel"
        style={{ display: isActive ? "block" : "none" }}
      >
        {content}
      </div>
    </div>
  );
};

const Accordion = ({ contents }) => {
  return (
    <div className="accordion-container">
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={contents[index]}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default Accordion;
