import { Link } from "react-router-dom";
// import getPopularMovies from "../Service/Service";

import { useEffect, useState } from "react";

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const API_KEY = "cdc3559cea174c9b75b98956c9a389b5";
    const BASE_URL = "https://api.themoviedb.org";

    const getPopularMovies = async () => {
      const fetchPopularMovies = await fetch(
        `${BASE_URL}/3/trending/all/day?api_key=${API_KEY}`
      );
      const moviesJson = fetchPopularMovies.json();
      console.log(moviesJson);
    };
    getPopularMovies();
  }, []);

  return (
    <ul>
      {movies?.map((value) => {
        return (
          value.title && (
            <li key={value.id}>
              <Link>{value.title}</Link>
            </li>
          )
        );
      })}
    </ul>
  );
};

export default Home;
