
import { NavLink } from "react-router-dom";

export function Haeder() {
  const LinkActive = ({isActive}) => {
    return {color: isActive ? "red" : "green"}
  }

  return (
    <>
      <header>
        <nav className="nav-wrap">
        <h1>React Router</h1>
          <ul>
            <li><NavLink style={({isActive}) => {
              return {color: isActive ? "red" : "blue"}
            }} to="/">Home</NavLink></li>

            <li><NavLink style={LinkActive} to="/dogs">Dogs</NavLink></li>
            <li><NavLink style={LinkActive} to="/page1">Page-1</NavLink></li>
            <li><NavLink className="item-link" to="/page2">Page-2</NavLink></li>
          </ul>
        </nav>
      </header>
    </>
  );
}