import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from "services/api";
import SearchForm from "../SearchForm/SearchForm";
import MovieList from "../MovieList/MovieList";
import Notiflix from 'notiflix';

const Movies = () => {
    const [movies, setMovies] = useState([]);  
    const [searchParams, setSearchParams] = useSearchParams();
    
  const text = searchParams.get('search') ?? '';
  
     const changeSearch = text => {
        setSearchParams({search: text});
    };
    

useEffect(() => {
    const fetchData = async () => {
        try {
        const result = await fetchSearchMovies(text);
        setMovies(result.results);
       if (result.results.length === 0) {
       Notiflix.Notify.failure('No matches found');
           return;
  }
        }
        catch(error) {
            console.log('error')
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