import { Link } from "react-router-dom";
import { fetchTrendingMovies } from "../../service/moviesAPI";
import { useEffect, useState } from "react";
import s from "./HomePage.module.css";

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchTrendingMovies().then((response) => setMovies(response));
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul className={s.list}>
        {movies.map((item) => {
          return (
            <li key={item.id}>
              <Link to={`${item.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
                  alt={item.title}
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
    </>
  );
};
export default HomePage;
