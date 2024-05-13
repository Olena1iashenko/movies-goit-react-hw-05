import { Suspense, useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { fetchMoviesDetails } from "../../service/moviesAPI";
import { TailSpin } from "react-loader-spinner";
import { FaArrowLeftLong } from "react-icons/fa6";
import s from "./MovieDetailsPage.module.css";

export const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state ?? "/movies";

  useEffect(() => {
    const fetchMovie = async () => {
      const movieData = await fetchMoviesDetails(movieId);

      setMovie(movieData);
    };

    fetchMovie();
  }, [movieId]);

  return (
    <>
      {!movie ? (
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
        <>
          <Link to={backLinkHref} className={s.Link}>
            <FaArrowLeftLong /> Go back
          </Link>
          <div className={s.details}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.original_title}
                width={250}
              />
            </div>
            <div className={s.contentBox}>
              <h2>{`${movie.original_title} (${
                movie.release_date.split("-")[0]
              })`}</h2>
              <p>{`User score: ${Math.round(movie.vote_average * 10)}%`}</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <ul className={s.listGenres}>
                {movie.genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <h3>Additional information</h3>
          <ul className={s.listInfo}>
            <NavLink
              className={s.link}
              to={`cast`}
              state={backLinkHref.current}
            >
              Cast
            </NavLink>
            <NavLink
              className={s.link}
              to={`reviews`}
              state={backLinkHref.current}
            >
              Reviews
            </NavLink>
          </ul>
          <Suspense
            fallback={
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
            }
          >
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};
export default MovieDetailsPage;
