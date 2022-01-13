import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/movie-api";

export default function Cast() {
  const [credits, setCredits] = useState([]);
  let params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    const api = new ApiService();
    api.getMovieCast(movieId).then((data) => setCredits(data));
  }, [movieId]);

  credits && console.log(credits);

  return (
    <div>
      {credits.map((item) => (
        <CreditItem key={item.id} actor={item} />
      ))}
    </div>
  );
}

function CreditItem({ actor }) {
  let imageUrl =
    actor.profile_path === null
      ? "https://via.placeholder.com/185x278.png?text=No+Photo"
      : `https://image.tmdb.org/t/p/w185/${actor.profile_path}`;
  return (
    <div>
      <img width={185} src={imageUrl} alt="actor" />
      <p>{actor.name}</p>
      <p>Character: {actor.character}</p>
    </div>
  );
}
