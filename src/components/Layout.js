import { NavLink, Outlet } from "react-router-dom";
// import styled from 'styled-components';

// const styledLink = styled(NavLink) `
// color: #212121;
// &.active {
//   color: orangered;
// }
// `;

const Layout = () => {
  return (
    <div>

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

      <main>
        <Outlet />
      </main>
    
      <footer>
        footer
      </footer>
    </div>
    
  )
}

export default Layout;