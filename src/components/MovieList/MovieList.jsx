import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";
import NotFoundImage from "../../img/imagenotfound.png";

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={s.list}>
      {movies?.map((item) => {
        return (
          <li key={item.id}>
            <Link to={`${item.id}`} state={location}>
              <img
                src={
                  item.poster_path
                    ? `https://image.tmdb.org/t/p/w185${item.poster_path}`
                    : NotFoundImage
                }
                alt={item.title}
                className={item.poster_path ? s.moviePoster : s.notFoundImage}
              />
              <h3>{item.title}</h3>
              <p className={s.rate}>
                Rating: {item.vote_average.toFixed(1)}/10
              </p>
              <p>Release date: {item.release_date}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
