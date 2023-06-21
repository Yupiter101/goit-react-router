
import { useParams } from "react-router-dom";
// import { useParams } = require ("react-router-dom");

const DogGalary = () => {

  const params = useParams();

  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])

  return (
    <div>
      <h3>Galary off {params.dogId}</h3>
      <p>This is Galary </p>
    </div>
  );
}

export default DogGalary;