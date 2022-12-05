const API_KEY = "cdc3559cea174c9b75b98956c9a389b5";
const BASE_URL = "https://api.themoviedb.org";

const getPopularMovies = async () => {
  const fetchPopularMovies = await fetch(
    `${BASE_URL}/3/trending/all/day?api_key=${API_KEY}`
  );
  const moviesJson = fetchPopularMovies.json();
  console.log(moviesJson);
  return moviesJson;
};

export default getPopularMovies;
