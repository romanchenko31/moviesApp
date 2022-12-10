import { useState, useEffect } from "react";
import nextId from "react-id-generator";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import s from "../MovieDetails/MovieDetails.module.css";
import { getMoviesDetailsApi } from "../../Service/Service";

const MovieDetails = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movies";
  const { moviesId } = useParams();
  const [movieDetails, getMovieDetails] = useState(null);

  useEffect(() => {
    const getMoviesDetails = async (moviesId) => {
      getMovieDetails(await getMoviesDetailsApi(moviesId));
    };
    getMoviesDetails(moviesId);
  }, [moviesId]);

  return (
    movieDetails && (
      <>
        <div className={s.wrapper}>
          <button className={s.button}>
            <Link to={backLinkHref}>Назад</Link>
          </button>
          <img
            className={s.img}
            alt={movieDetails.title}
            src={`https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`}
          />
          <h1>{movieDetails.original_title}</h1>
          <p>{movieDetails.release_date}</p>
          <p>{movieDetails.overview}</p>
          <h2>Genres</h2>
          {movieDetails.genres?.map((value) => {
            return <p key={nextId()}>{value.name}</p>;
          })}
        </div>
        <ul>
          <li className={s.item}>
            <Link className={s.link} to="cast" state={{ from: backLinkHref }}>
              cast
            </Link>
          </li>
          <li>
            <Link
              className={s.link}
              to="reviews"
              state={{ from: backLinkHref }}
            >
              reviews
            </Link>
          </li>
        </ul>
        <div>
          <Outlet />
        </div>
      </>
    )
  );
};

export default MovieDetails;
