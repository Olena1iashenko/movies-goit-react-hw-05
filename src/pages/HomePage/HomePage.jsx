import { Link } from "react-router-dom";
import { fetchTrendingMovies } from "../../service/moviesAPI";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchTrendingMovies().then((response) => setMovies(response));
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {movies.map((item) => {
          return (
            <li key={item.id}>
              <Link to={`${item.id}`}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default HomePage;
