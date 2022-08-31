import React from "react";
import { lazy, Suspense } from "react";
import {Routes, Route} from "react-router-dom";

import Menu from "./menu/Menu";
const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const Movies = lazy(() => import("./pages/Movies/movies"));
const MovieDetails = lazy(() => import("./pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./pages/Cast/Cast"));
const Reviews = lazy(() => import("./pages/Reviews/Reviews"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));


export const App = () => {
  return (
    <div>
      <Menu />
      <Suspense>
        <Routes>
        <Route path="/" element={<Homepage  />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
           <Route path="cast" element={<Cast />}/>
           <Route path="reviews" element={<Reviews />}/>
        </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </Suspense>
    </div>
  );
};
