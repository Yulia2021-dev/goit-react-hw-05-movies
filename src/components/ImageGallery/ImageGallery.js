import React from "react";
import { Link } from "react-router-dom";
import { Gallery, GalleryItem, MoviePoster } from "./ImageGallery.styled";

export default function ImageGallery({ data }) {
  return (
    <Gallery>
      {data.map((movie) => (
        <GalleryItem key={movie.id}>
          <MoviePoster
            src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
            alt="movie"
          />
          <h3>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </h3>
        </GalleryItem>
      ))}
    </Gallery>
  );
}
