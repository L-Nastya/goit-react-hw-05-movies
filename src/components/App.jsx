import React from "react";
import {Routes, Route} from "react-router-dom";
import Menu from "./menu/Menu";
import Homepage from "./pages/Homepage/Homepage";
import Movies from "./pages/Movies/movies";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Cast from "./pages/Cast/Cast";
import Reviews from "./pages/Reviews/Reviews";



export const App = () => {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<Homepage  />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
        <Route path="cast" element={<Cast />}/>
        <Route path="reviews" element={<Reviews />}/>
        </Route>
        </Routes>
    </div>
  );
};
