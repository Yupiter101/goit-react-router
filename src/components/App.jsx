import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
// import PageHome from "pages/PageHome";
// import Page1 from "pages/Page1";
// import Page2 from "pages/Page2";
// import Dogs from "pages/Dog";
// import DogDetalis from "pages/DogDetalis";
import Layout from "./Layout";
// import DogGalary from "./DogGalary";
// import DogDescrip from "./DogSubscr";
import { NotFound } from "pages/NotFound";

import { Mission } from "./Mission";
import { Revievs } from "./Revievs";
import { Team } from "./Team";

const PageHome = lazy(()=> import('../pages/PageHome'));
const Dogs = lazy(()=> import('../pages/Dog'));
const Page1 = lazy(()=> import('../pages/Page1'));
const Page2 = lazy(()=> import('../pages/Page2'));
const DogDetalis = lazy(()=> import('../pages/DogDetalis'));
const DogGalary = lazy(()=> import('./DogGalary'));
const DogDescrip = lazy(()=> import('./DogSubscr'));


const wrapStyle = {
  maxWidth: 960,
  width: '100%',
  margin: '40px auto',
  fontSize: 22,
  color: '#010101',
  backgroundColor: 'bisque',
};

export const App = () => {
  return (
    <div style={wrapStyle}>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageHome />} />

          <Route path="dogs" element={<Dogs />} />
          <Route path="dogs/:dogId" element={<DogDetalis/>}>
              <Route path="galary" element={<DogGalary />}/>
              <Route path="descr" element={<DogDescrip />}/>
          </Route>
          
          <Route path="page1" element={<Page1 />}>
              <Route path="mission" element={<Mission />} />
              <Route path="team" element={<Team />} />
              <Route path="reviews" element={<Revievs />} />
          </Route>
          <Route path="page2" element={<Page2 />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>



      {/* <header>
        <nav className="nav-wrap">
        <h1>This React Router</h1>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/dogs">Dogs</NavLink></li>
            <li><NavLink to="/page1">Page-1</NavLink></li>
            <li><NavLink to="/page2">Page-2</NavLink></li>
          </ul>
        </nav>
      </header> */}
       
      {/* <Routes>
        <Route>
          <Route path="/" element={<PageHome />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/dogs/:dogId" element={<DogDetalis/>}>
              <Route path="galary" element={<DogGalary />}/>
              <Route path="descr" element={<DogDescrip />}/>
          </Route>

          <Route path="/page1" element={<Page1 />}>
              <Route path="mission" element={<Mission />} />
              <Route path="team" element={<Team />} />
              <Route path="reviews" element={<Revievs />} />
          </Route>
          <Route path="/page2" element={<Page2 />} />
        </Route>
      </Routes> */}

      
    </div>
  );
};



