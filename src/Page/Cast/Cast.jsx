import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import nextId from "react-id-generator";
import style from "../Cast/Cast.module.css";
import { getCastMoviesApi } from "../../Service/Service";
const URL = "https://image.tmdb.org/t/p/w200/";
const Cast = () => {
  const { moviesId } = useParams();
  const [cast, getCast] = useState(null);

  useEffect(() => {
    const getMoviesCast = async (moviesId) => {
      const resultCast = await getCastMoviesApi(moviesId);
      getCast(resultCast?.cast);
    };
    getMoviesCast(moviesId);
  }, [moviesId]);

  return (
    <>
      {cast?.map((value) => {
        return (
          <div className={style.wrapper} key={nextId()}>
            {value.profile_path && (
              <img src={`${URL}${value.profile_path}`} alt={value.name} />
            )}
            <p>{value.name}</p>
          </div>
        );
      })}
    </>
  );
};

export default Cast;
