
import { useParams } from "react-router-dom";
// import { useParams } = require ("react-router-dom");

const DogDescrip = () => {

  const params = useParams();

  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])

  return (
    <div>
      <h3>Description off {params.dogId}</h3>
      <p>This is description </p>
  </div>
  );
  
}

export default DogDescrip;