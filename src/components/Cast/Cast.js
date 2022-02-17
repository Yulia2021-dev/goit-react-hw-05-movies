import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/movie-api";
import s from "./cast.module.css";

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
    <>
      <div className={s.cast}>
        <ul className={s.castList}>
          {credits.map(({ id, name, character, profile_path }) => (
            <li className={s.castItem} key={id}>
              <img
                className={s.image}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w185/${profile_path}`
                    : // ? `${URL.IMAGE}${profile_path}`
                      "https://via.placeholder.com/185x278.png?text=No+Photo"
                }
                alt={name}
              />
              <div className={s.description}>
                <h5>{name}</h5>
                <p className={s.character}>Character: {character}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <p>We don't have any cast information for this movie.</p>
    </>
  );
}
