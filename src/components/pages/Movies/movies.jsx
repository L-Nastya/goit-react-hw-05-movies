import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from "services/api";
import SearchForm from "../SearchForm/SearchForm";
import MovieList from "../MovieList/MovieList";


const Movies = () => {
    const [movies, setMovies] = useState([]);  
    const [searchParams, setSearchParams] = useSearchParams();
    
  const text = searchParams.get('search') ?? '';
  
     const changeSearch = text => {
        setSearchParams({search: text});
    };
    

useEffect(() => {
    const fetchData = async () => {
        const result = await fetchSearchMovies(text);
        console.log(result.results)
      
      setMovies(result.results)
       if (result.results.length === 0) {
    alert("Matches not find")
    return
  }
  }
  if (text) {
     fetchData();
  }
 
}, [text])
    

    return (
        <>
            <SearchForm onSubmit={changeSearch}/>
            <MovieList items={movies}/>
        </>
    );  
}
export default Movies;