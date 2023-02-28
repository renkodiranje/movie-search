import React from "react";
const noImageFound = "https://i.ytimg.com/vi/np4n2DIOKVM/maxresdefault.jpg";

const MoviesListItem = ({ movie }) => {
  const poster = movie.Poster === "N/A" ? noImageFound : movie.Poster;
  return (
    <div>
      <h2>{movie.Title}</h2>
      <img src={poster} alt={`Movie's title is: ${movie.Title}`} />
    </div>
  );
};
export default MoviesListItem;
