import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { MoviesPage } from "./pages/MoviesPage/MoviesPage";
import { HomePage } from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReviews from "./components/MovieReviews/MovieReviews";
import { Suspense } from "react";
import { TailSpin } from "react-loader-spinner";

function App() {
  return (
    <>
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
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
