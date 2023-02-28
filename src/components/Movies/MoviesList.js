import React from "react";
import MoviesListItem from "./MoviesListItem";

const MoviesList = ({ movies }) => {
  return (
    <div>
      Movies List
      {movies.map((movie) => {
        return <MoviesListItem key={movie.imdbID} movie={movies} />;
      })}
    </div>
  );
};
export default MoviesList;
