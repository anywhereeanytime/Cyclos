import "./../footer/footer.css";
import footerVector from "./../../../images/FooterVector.svg";
import instagram from "./../../../images/instagram emoji.svg";
import appStore from "./../../../images/app store.svg";
import playMarket from "./../../../images/media play.svg";

const Footer = () => {
  return (
    <footer className="footer sans">
      <div className="container">
        <div className="column">
          <ul className="list">
            <li>
              <a href="#!">Home</a>
            </li>
            <li>
              <a href="#!">About</a>
            </li>
            <li>
              <a href="#!">Work with us</a>
            </li>
            <li>
              <a href="#!">Contact us</a>
            </li>
          </ul>
          <p className="copywrite">© 2024 No Name Copywriting Studio</p>
        </div>
        <div className="column">
          <ul className="list">
            <li>
              <img src={instagram} alt="" />
              <a href="#!">Instagram</a>
            </li>
            <li>
              {" "}
              <img src={appStore} alt="" />
              <a href="#!">App Store</a>
            </li>
            <li>
              {" "}
              <img src={playMarket} alt="" />
              <a href="#!">Play Market</a>
            </li>
          </ul>
          <p className="copywrite">Site by @anywhereeanytime</p>
        </div>
        <div className="logo">
          <img src={footerVector} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
