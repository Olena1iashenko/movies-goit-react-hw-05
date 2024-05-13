import { useEffect, useState } from "react";
import { fetchMoviesReviews } from "../../service/moviesAPI";
import { TailSpin } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import s from "./MovieReviews.module.css";

export const MovieReviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewsData = await fetchMoviesReviews(movieId);

      setReviews(reviewsData);
    };

    fetchReviews();
  }, [movieId]);
  return (
    <>
      {!reviews ? (
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
          {reviews.length === 0 && <p>No reviews found</p>}
          {reviews.length > 0 && (
            <ul>
              {reviews.map((review) => (
                <li key={review.id} className={s.review}>
                  <h4>{`Author: ${review.author}`}</h4>
                  <p>{review.content}</p>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </>
  );
};

export default MovieReviews;
