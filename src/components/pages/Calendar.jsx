import Marquee from "./../elements/marquee/Marquee";
import "./pages styles/calendar.css";
import Button from "../elements/button/Button";
import mainLogo from "./../../images/Vector.png";

const Calendar = () => {
  return (
    <main>
      <Marquee />
      <h1 className="serif user-greeting">hi, Leila!</h1>
      <Button>on our way to hack your cycle!</Button>
      <div>
        <img src={mainLogo} alt="" />
      </div>
      <div className="form-container">
        <div className="purple-container"></div>
        <div className="white-container">
          <div className="completed-one sans">completed 1/2</div>
        </div>
      </div>
    </main>
  );
};

export default Calendar;
