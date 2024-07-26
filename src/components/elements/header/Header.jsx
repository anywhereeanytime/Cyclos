import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header>
      <nav className="header_nav">
        <ul className="header_row serif">
          <li>
            <Link to="/">Cyclos</Link>
          </li>
          <li>
            <Link to="/donate">Donate</Link>
          </li>
          <li>
            <Link to="/aboutus">About us</Link>
          </li>
          <li>
            <a href="#!">Sign in</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
