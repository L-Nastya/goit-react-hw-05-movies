import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "services/api";
import styled from "styled-components";

const Cast = () => {
    const [cast, setCast] = useState([]);

    const { movieId } = useParams();
    console.log(movieId)
   
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchMovieCast(movieId);
                setCast(result.cast);      
                }
            catch(error) {
            console.log('error')
  }
        }
        if(movieId){
          fetchData()  
    }

    }, [movieId])

    
    return (
        <CastList>
            {cast.map(item =>
                <CastItem key={item.id}>
                    <CastImg src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`} alt={item.name} />
            <CastText><b>{item.name}</b></CastText>
            <CastText>{item.character }</CastText>
                </CastItem>
                )}
            
       </CastList>
    )
}
export default Cast;

const CastList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
flex-wrap: wrap;

`;
const CastItem = styled.li`
    width: 15%;
margin-bottom: 2%;
border: 1px solid black;
border-radius: 5px;
margin-right: 2%;
padding-bottom: 2%; 
margin-right: 10px;
:nth-child(6n + 6){
margin-right: 0;
} 
`;
const CastImg = styled.img`
    width: 100%;
    
`;
const CastText = styled.p`
    font-size: 20px;
   text-align: center;
`