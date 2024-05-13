import { fetchTrendingMovies } from "../../service/moviesAPI";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { TailSpin } from "react-loader-spinner";

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchTrendingMovies().then((response) => setMovies(response));
  }, []);

  return (
    <>
      {movies.length === 0 ? (
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
          <h2>Trending today</h2>
          <MovieList movies={movies} />
        </>
      )}
    </>
  );
};
export default HomePage;
