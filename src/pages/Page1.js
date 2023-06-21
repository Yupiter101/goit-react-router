import { Link, Outlet } from "react-router-dom";


const Page1 = () => {
  return (
    <div>
      <h3>This is About Page 1</h3>
      <ul>
        <li>
          <Link to="mission">Read about our mission</Link>
        </li>
        <li>
          <Link to="team">Get to know the team</Link>
        </li>
        <li>
          <Link to="reviews">Go through the reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
    
  );
}

export default Page1;