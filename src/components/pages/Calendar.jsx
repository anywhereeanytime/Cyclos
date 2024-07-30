import Marquee from "./../elements/marquee/Marquee";
import "./pages styles/calendar.css";
import Button from "../elements/button/Button";
import mainLogo from "./../../images/Vector.png";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { useUser } from "./../elements/UserNameContext";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const navigate = useNavigate();

  const calculateCycle = () => {
    if (!endDate) {
      alert("Please select a valid date range");
      return;
    }

    // Define the phases
    const menstruationEnd = endDate;
    const follicularEnd = addDays(menstruationEnd, 9);
    const ovulationEnd = addDays(follicularEnd, 3);
    const lutealEnd = addDays(ovulationEnd, 13);

    // Get today's date
    const today = new Date();
    console.log(today);

    // Determine the current phase
    let currentPhase = "";
    if (today <= menstruationEnd) {
      currentPhase = "Menstruation";
      navigate("/menstruation");
    } else if (today <= follicularEnd) {
      currentPhase = "Follicular";
      navigate("/follicular");
    } else if (today <= ovulationEnd) {
      currentPhase = "Ovulation";
      navigate("/ovulation");
    } else if (today <= lutealEnd) {
      currentPhase = "Luteal";
      navigate("/luteal");
    } else {
      currentPhase = "Menstruation";
      navigate("/menstruation");
    }

    // Display the results
    console.log(`Current Phase: ${currentPhase}`);
  };

  const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };
  const { userName } = useUser();
  const displayName = userName || "darling";

  return (
    <main>
      <Marquee />
      <div className="calendar-wrapper">
        <h1 className="serif user-greeting">hi, {displayName}!</h1>
        <Button>on our way to hack your cycle!</Button>
        <img className="calendar-logo" src={mainLogo} alt="" />
        <div className="form-container">
          <div className="purple-container"></div>
          <div className="white-container">
            <div className="completed-one sans">completed 1/2</div>
            <p className="duration-period serif">
              Duration of your last period:
            </p>
            <DatePicker
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              inline
            />
            <Button onClick={calculateCycle}>next</Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Calendar;
