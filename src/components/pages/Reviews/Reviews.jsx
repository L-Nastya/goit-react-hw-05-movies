import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import { fetchMovieReviews } from "services/api";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    const { movieId } = useParams();
    console.log(movieId)
   
    useEffect(() => {
        const fetchData = async () => {
            try {
              const result = await fetchMovieReviews(movieId);
              setReviews(result.results);
            }
            catch(error) {
                console.log('error');
            }
        }
         if(movieId){
            fetchData(); 
    }

    }, [movieId])

    console.log(reviews.length)
    return (
        <ul>
            {reviews.length === 0 ?
                        "We don't have any reviews for this movie" :
            reviews.map(item =>
                <li key={item.id}>
                        <p>Author: {item.author}</p>
                        <p>{item.content }</p> 
                </li>
                )}
            
       </ul>
    )
}
export default Reviews;