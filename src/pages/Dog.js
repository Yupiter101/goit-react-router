import { Link, useSearchParams, useLocation } from "react-router-dom";


const Dogs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get('a')); //http://localhost:3000/goit-react-router/dogs/a=5
  const dogId = searchParams.get('dogId') ?? '';
  
  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])

  const dogs =['dog-1', 'dog-2', 'dog-3','dog-4','dog-5'];
  //http://localhost:3000/goit-react-router/dogs

  const visibleDog = dogs.filter(dog => dog.includes(dogId));
  const location = useLocation();
  // console.log(location);

  const updateQueryStryng = (e) => {
    if(e.target.value === "") {
      setSearchParams({});
      return
    }
    setSearchParams({dogId: e.target.value})
  }

  return (
    <div>
      <h3>These are Dogs</h3>
      <input type="text" 
          value={dogId}
          onChange={updateQueryStryng}/>
      <button type="button" onClick={()=> setSearchParams({dogId: '1'})}>Change</button>
      {/* <button type="button" onClick={()=> console.log('Hell')}>Change</button> */}
      <ul>
        {visibleDog.map((dog)=> {
          return <li 
              key={dog}><Link 
              state={{from: location}}
              to={`${dog}`}>This is a {dog}</Link></li>
        })}
      </ul> 
    </div> 
  );
}

export default Dogs;