import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/movie-api";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  let params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    const api = new ApiService();
    api.getMovieReviews(movieId).then((reviews) => setReviews(reviews));
  }, [movieId]);

  reviews && console.log(reviews);

  return (
    <>
      {!reviews.length && <h4>We don't have any reviews for this movie</h4>}
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h4>Author: {review.author}</h4>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
