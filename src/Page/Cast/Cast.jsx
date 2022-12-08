import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import nextId from "react-id-generator";
import s from "../Cast/Cast.module.css";
import { getCastMoviesApi } from "../../Service/Service";

const Cast = () => {
  const { moviesId } = useParams();
  const [cast, getCast] = useState(null);

  useEffect(() => {
    const getMoviesCast = async (moviesId) => {
      const resultCast = await getCastMoviesApi(moviesId);
      getCast(resultCast.cast);
    };
    getMoviesCast(moviesId);
  }, [moviesId]);

  return (
    <>
      {cast?.map((value) => {
        return (
          <div className={s.wrapper} key={nextId()}>
            {value.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200/${value.profile_path}`}
                alt={value.name}
              />
            )}
            <p>{value.name}</p>
          </div>
        );
      })}
    </>
  );
};

export default Cast;
