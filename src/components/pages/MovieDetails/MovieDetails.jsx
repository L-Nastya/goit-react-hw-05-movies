import { useState, useEffect } from "react";
import { useParams, Link, Outlet, useNavigate, useLocation} from "react-router-dom";
import { fetchMovieDetails } from "services/api";
import styled from "styled-components";
import { BsArrowLeft } from 'react-icons/bs';


const MovieDetails = () => {
  const [details, setDetails] = useState({});

  const navigate = useNavigate();
  const location = useLocation();
  const { movieId } = useParams();
  

  const {from} = location.state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchMovieDetails(movieId);
        setDetails(result);
      }
      catch (error){
        console.log('error')
      }
    }
    fetchData();
    
  }, [movieId])
   
  let genresArray = [];
  const allGenres=()=> {
    const { genres } = details;
    if (genres) {
       const allgenres = genres.flatMap(genre => genre.name).slice(0, 3).join(", ");
      genresArray.push(allgenres)
      return;
    }
  }
  allGenres()

  const goBack = () => navigate(from);

  const { original_title, overview, poster_path, vote_average  } = details;
  const percent = Math.round(vote_average * 10);
    return ( 
      <div>
        <BackButton onClick={goBack}><BsArrowLeft/></BackButton>
      <MovieInfoContainer>
        <Image src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title}/>
        <MovieInfo >
          <h1 >{original_title}</h1>
          <h2>User score: {percent}% </h2>
          <h2>Overview </h2>
            <p>{overview}</p>
            <h2>Genres </h2>
           <p >{genresArray}</p> 
        </MovieInfo>
        </MovieInfoContainer>
        <MoreInfoTitle>Additional information</MoreInfoTitle>
        <MoreInfoList>
          <li><Link state={{from}} to={`/movies/${movieId}/cast`}>Cast</Link></li>
          <li><Link state={{from}} to={`/movies/${movieId}/reviews`}>Reviews</Link></li>
          </MoreInfoList>
        <Outlet/>
      </div>
)}
export default MovieDetails;

const BackButton = styled.button`
  border: none;
  margin-left: 8px;
  margin-bottom: 10px;
  color: black;
  background-color:  transparent;
  font-size: 20px;
  cursor: pointer;
  :hover{
    color: #51bbe1;
  }
`;
const MovieInfoContainer = styled.div`
  display: flex;
  margin-left: 30px;
`;
const Image = styled.img`
  width: 20%;
  margin-bottom: 10px;
`;

const MovieInfo = styled.div`
  margin-left: 20px;
`;

const MoreInfoTitle = styled.p`
 margin-left: 30px;
`
const MoreInfoList = styled.ul`
   margin-left: 30px;
`;