import React, { useState } from "react";
import "./../cycles/cycles.css";

const AccordionItem = ({ title, content, icon }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="accordion-item">
      <button
        className={`accordion sans ${isActive ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <span className="icon">{icon}</span>
        {title}
      </button>
      <div className="panel" style={{ display: isActive ? "block" : "none" }}>
        {content}
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="accordion-container">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default Accordion;
