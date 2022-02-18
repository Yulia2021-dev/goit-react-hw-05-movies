import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import { ApiService } from "../service/movie-api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export default function MovieDetails() {
  const [movie, setMovie] = useState({
    id: 1,
    title: "",
    poster_path: "",
    vote_average: 0,
    overview: "",
    genres: [{ name: "" }],
  });

  let { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    const apiService = new ApiService();
    apiService.getMovieDetails(movieId).then((movie) => setMovie(movie));
  }, [movieId]);

  movie && console.log(movie);

  return (
    <div>
      <Link to="/">
        <FontAwesomeIcon icon={faArrowLeft} />
        <span style={{ "margin-left": "8px" }}>Go back</span>
      </Link>
      <div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
            alt="movie"
          />
        </div>
        <div className="movieDescription">
          <h2>{movie.title}</h2>
          <p>User score: {movie.vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <div>
            <h4>Additional information</h4>
            <ul>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
              <li>
                <Link to="cast">Cast</Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

MovieDetails.propTypes = {
  title: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.array,
};
