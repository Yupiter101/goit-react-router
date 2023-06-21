import { Link } from "react-router-dom";
const Dogs = () => {


  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])

  const dogs =['dog-1', 'dog-2', 'dog-3','dog-4'];
  //http://localhost:3000/goit-react-router/dogs

  return (
    <div>
      <h3>These are Dogs</h3>
      <ul>
        {dogs.map((dog)=> {
          return <li key={dog}><Link to={`${dog}`}>This is a {dog}</Link></li>
        })}
      </ul> 
      {/* <Outlet /> */}
    </div> 
  );
}

export default Dogs;