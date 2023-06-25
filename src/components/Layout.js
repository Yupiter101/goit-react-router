import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Haeder } from "./Header";
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
      <Haeder></Haeder>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      {/* <footer> footer </footer> */}
    </div>
  )
}

export default Layout;

