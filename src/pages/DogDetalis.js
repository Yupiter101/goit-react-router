
// import { Suspense } from "react";
import { useRef, Suspense } from "react";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";


const DogDetalis = () => {
  const params = useParams();
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/dogs');
  // console.log(params); // {dogId: 'dog-4'}

  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])
  // console.log(location.state);

  return (
    <div>
      <h3>Here DogDetalis: {params.dogId}</h3>
      {/* <button type="button"><Link to="/dogs">Go back</Link></button> */}
      {/* <button type="button"><Link to={location.state?.from ?? '/dogs'}>Go back</Link></button> */}
      <button type="button"><Link to={backLinkLocation.current}>Go back</Link></button>
      <ul>
        <li><Link to="galary">Galary</Link></li>
        <li><Link to="descr">Description</Link></li>
      </ul>
        <Suspense fallback={<div>Loading2...</div>}>
          <Outlet />
        </Suspense>
        
    </div>
  );
}

export default DogDetalis;