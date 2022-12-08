import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPopularMoviesApi } from "../../Service/Service";
import s from "../Home/Home.module.css";

const Home = () => {
  const [movies, setMovies] = useState(null);
  let location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    const getPopularMovies = async () => {
      const arrayPopularMovies = await getPopularMoviesApi();
      setMovies(arrayPopularMovies.results);
    };
    getPopularMovies();
  }, []);

  return (
    <>
      <h2>Popular movies</h2>
      <ul>
        {movies?.map((value) => {
          return (
            value.title && (
              <li key={value.id}>
                <NavLink
                  className={s.link}
                  to={`movies/${value.id}`}
                  state={{ from: pathname }}
                >
                  {value.title}
                </NavLink>
              </li>
            )
          );
        })}
      </ul>
    </>
  );
};

export default Home;
