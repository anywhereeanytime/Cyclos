import "./main.css";
import mainImg from "./../../images/main.jpg";
import mainLogo from "./../../images/Vector.png";
import Button from "../button/Button";

const Main = () => {
  return (
    <section className="main">
      <div className="main-container">
        <div className="main-text-container">
          <div className="main-title serif title1">Cyclos</div>
          <div className="main-logo">
            <img src={mainLogo} alt="" />
          </div>
          <div className="main-text sans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam.
          </div>
          <Button>Goooooooooo!</Button>
        </div>
        <div className="main-image-container">
          <img src={mainImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Main;
