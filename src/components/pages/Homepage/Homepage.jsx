import React from "react";
import { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";
import fetchPopularMovies from "services/api";
import styled from "styled-components";

const Homepage = () => {
    const [movies, setMovies] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchPopularMovies();
        setMovies([...result.results]);
      }
      catch(error) {
        console.log('error')
    }
    }
  
       fetchData();  

  },[])

    return (
        <>
        <HomeTitle>Trending today 😉 </HomeTitle>
        <MovieList items={movies}/>
        </>
    );  
}
export default Homepage;

const HomeTitle = styled.h1`
  margin-left: 30px;

`