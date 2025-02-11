import React from "react";
import "../MovieDetails.css";
import { useParams } from "react-router-dom";
import { div } from "framer-motion/client";

function MovieInfo({ movie }) {
  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    
    <div className="movie-info-column">
      <div className="main">
      <img src={movie.Poster} alt={movie.Title} />
      <div className="poster-overlay">
        <h2>{movie.Title}</h2>
        <button className="play-trailer-btn">Play Trailer</button>
      </div>
      </div>
      <div className="info">
      <p>Release Date: {movie.Released}</p>
      <p>Language: {movie.Language}</p>
      <p>Genre: {movie.Genre}</p>
      <p>Director: {movie.Director}</p>
      <p>Writers: {movie.Writer}</p>
      <p>Rated: {movie.Rated}</p>
      <p>Awards: {movie.Awards}</p>
      </div>
    
      {/* ... other movie details */}
    </div>
  );
}

export default MovieInfo;
