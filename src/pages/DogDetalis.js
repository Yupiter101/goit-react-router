import { Link, Outlet, useParams } from "react-router-dom";


const DogDetalis = () => {
  const params = useParams();
  // console.log(params); // {dogId: 'dog-4'}

  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])


  return (
    <div>
      <h3>Here DogDetalis: {params.dogId}</h3>
      <ul>
        <li><Link to="galary">Galary</Link></li>
        <li><Link to="descr">Description</Link></li>
      </ul>
      <Outlet />
    </div>
  );
}

export default DogDetalis;