import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import nextId from "react-id-generator";
import s from "../Reviews/Reviews.module.css";
import { getReviewsMoviesApi } from "../../Service/Service";

const Reviews = () => {
  const { moviesId } = useParams();
  const [reviews, getReviews] = useState(null);
  useEffect(() => {
    const getMoviesReviews = async (moviesId) => {
      const resultReviews = await getReviewsMoviesApi(moviesId);
      getReviews(resultReviews.results);
    };
    getMoviesReviews(moviesId);
  }, [moviesId]);

  return reviews?.length > 0 ? (
    <div>
      {reviews.map((value) => {
        return (
          <div key={nextId()}>
            <p className={s.author}>{value.author}</p>
            <p>{value.content}</p>
          </div>
        );
      })}
    </div>
  ) : (
    <h2>Пусто</h2>
  );
};

export default Reviews;
