import "./header.css";

const Header = () => {
  return (
    <header>
      <nav className="header_nav">
        <ul className="header_row serif">
          <li>
            <a href="#!">Articles</a>
          </li>
          <li>
            <a href="#!">Donate</a>
          </li>
          <li>
            <a href="#!">About us</a>
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
