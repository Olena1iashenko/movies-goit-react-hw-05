import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesCredits } from "../../service/moviesAPI";
import { TailSpin } from "react-loader-spinner";
import NoPhoto from "../../img/nophoto.png";
import s from "./MovieCast.module.css";

export const MovieCast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCast = async () => {
      const { cast } = await fetchMoviesCredits(movieId);
      setCast(cast);
    };
    fetchMovieCast();
  }, [movieId]);

  return (
    <>
      {!cast ? (
        <TailSpin
          visible={true}
          wrapperStyle={{
            justifyContent: "center",
          }}
          height="80"
          width="80"
          color="#ffd700"
          ariaLabel="tail-spin-loading"
          radius="1"
        />
      ) : (
        <ul className={s.list}>
          {cast.map((actor) => (
            <li key={actor.id} className={s.actor}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    : NoPhoto
                }
                alt={actor.name}
                width={150}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default MovieCast;
