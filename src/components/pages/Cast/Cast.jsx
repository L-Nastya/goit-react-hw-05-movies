import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "services/api";

const Cast = () => {
    const [cast, setCast] = useState([]);

    const { movieId } = useParams();
    console.log(movieId)
   
    useEffect(() => {
    const fetchData = async () => {
        const result = await fetchMovieCast(movieId);
        console.log(result.cast)
      
      setCast(result.cast)
    }
    fetchData();

    }, [movieId])

    
    return (
        <ul>
            {cast.map(item =>
                <li key={item.id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`} alt={item.name} />
            <p>{item.name}</p>
            <p>Character: {item.character }</p>
                </li>
                )}
            
       </ul>
    )
}
export default Cast;