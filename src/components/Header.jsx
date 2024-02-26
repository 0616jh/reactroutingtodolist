import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <header className="full-bleed">
      <h1>React Routing Site</h1>
      <nav>
        <ul className="nav_container">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tasklist">Task List</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
