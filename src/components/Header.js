
import { NavLink } from "react-router-dom";

export function Haeder() {
  return (
    <>
      <header>
        <nav className="nav-wrap">
        <h1>React Router</h1>
          <ul>
            <li><NavLink className="item-link" to="/">Home</NavLink></li>
            <li><NavLink className="item-link" to="/dogs">Dogs</NavLink></li>
            <li><NavLink className="item-link" to="/page1">Page-1</NavLink></li>
            <li><NavLink className="item-link" to="/page2">Page-2</NavLink></li>
          </ul>
        </nav>
      </header>
    </>
  );
}