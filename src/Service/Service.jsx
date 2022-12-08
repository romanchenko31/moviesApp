const API_KEY = "cdc3559cea174c9b75b98956c9a389b5";
const BASE_URL = "https://api.themoviedb.org";

const getPopularMoviesApi = async () => {
  const fetchPopularMovies = await fetch(
    `${BASE_URL}/3/trending/all/day?api_key=${API_KEY}`
  );
  const moviesJson = fetchPopularMovies.json();
  return moviesJson;
};

const getMoviesDetailsApi = async (movieId) => {
  const fetchMoviesDeteilsById = await fetch(
    `${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  const moviesJson = await fetchMoviesDeteilsById.json();
  return moviesJson;
};

const getCastMoviesApi = async (castId) => {
  const fetchMoviesCastById = await fetch(
    `${BASE_URL}/3/movie/${castId}/credits?api_key=${API_KEY}&language=en-US`
  );
  const moviesCastJson = await fetchMoviesCastById.json();
  return moviesCastJson;
};

const getReviewsMoviesApi = async (reviewsId) => {
  const fetchMoviesReviewsById = await fetch(
    `${BASE_URL}/3/movie/${reviewsId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  const moviesReviewsJson = await fetchMoviesReviewsById.json();
  return moviesReviewsJson;
};

const getSearchQueryApi = async (query) => {
  const fetchSearchQueryApi = await fetch(
    `${BASE_URL}/3/search/movie/?api_key=${API_KEY}&language=en-US&page=1&query=${query}&include_adult=false`
  );
  const moviesSearchQuery = await fetchSearchQueryApi.json();
  return moviesSearchQuery;
};

export {
  getPopularMoviesApi,
  getMoviesDetailsApi,
  getCastMoviesApi,
  getReviewsMoviesApi,
  getSearchQueryApi,
};
