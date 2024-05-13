import { HiSearch } from "react-icons/hi";
import s from "./MoviesPage.module.css";
import { getMovies } from "../../service/moviesAPI";
import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { TailSpin } from "react-loader-spinner";

export const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get("query") ?? "";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.elements.query.value.trim() === "") {
      return toast.info("Please enter your search");
    }
    const query = event.target.elements.query.value.trim();
    setSearchParams({ query });
    event.target.reset();
  };

  useEffect(() => {
    if (!movieName) {
      return;
    }
    const getData = async () => {
      setData([]);
      setLoading(true);
      setError("");
      try {
        const data = await getMovies(movieName);
        setData(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [movieName]);

  return (
    <>
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit}>
        <HiSearch className={s.icon} />
        <input
          className={s.input}
          placeholder="Enter your search..."
          type="text"
          defaultValue={movieName}
          name="query"
          required
        />
        <button type="submit">Search</button>
      </form>
      {loading && (
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
      )}
      {data.length !== 0 && <MovieList movies={data} />}
      {error && toast.error("Something went wrong")}
    </>
  );
};

export default MoviesPage;
