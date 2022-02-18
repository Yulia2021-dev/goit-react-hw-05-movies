import React from "react";
import { NavLink } from "react-router-dom";
import { Gallery, GalleryItem, MoviePoster } from "./MovieGallery.styled";

const MovieGallery = ({ movies }) => {
  return (
    <Gallery>
      {movies.map((movie) => (
        <GalleryItem key={movie.id}>
          <MoviePoster
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w342/${movie.poster_path}`
                : // ? `${URL.IMAGE}${profile_path}`
                  "https://via.placeholder.com/250x378.png?text=No+Photo"
            }
            alt="movie"
          />
          <h3>
            <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
          </h3>
        </GalleryItem>
      ))}
    </Gallery>
  );
};

export default MovieGallery;
