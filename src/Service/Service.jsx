const API_KEY = "cdc3559cea174c9b75b98956c9a389b5";
const BASE_URL = "https://api.themoviedb.org";

const getPopularMoviesApi = async () => {
  try {
    const fetchPopularMovies = await fetch(
      `${BASE_URL}/3/trending/all/day?api_key=${API_KEY}`
    );
    if (!fetchPopularMovies.ok) {
      throw new SyntaxError("Данные некорректны");
    }
    const moviesJson = fetchPopularMovies.json();
    return moviesJson;
  } catch (e) {
    alert("Извините, в данных ошибка");
  }
};

const getMoviesDetailsApi = async (movieId) => {
  try {
    const fetchMoviesDeteilsById = await fetch(
      `${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    if (!fetchMoviesDeteilsById.ok) {
      throw new SyntaxError("Данные некорректны");
    }
    const moviesJson = await fetchMoviesDeteilsById.json();
    return moviesJson;
  } catch (e) {
    alert("Извините, в данных ошибка");
  }
};

const getCastMoviesApi = async (castId) => {
  try {
    const fetchMoviesCastById = await fetch(
      `${BASE_URL}/3/movie/${castId}/credits?api_key=${API_KEY}&language=en-US`
    );
    if (!fetchMoviesCastById.ok) {
      throw new SyntaxError("Данные некорректны");
    }
    const moviesCastJson = await fetchMoviesCastById.json();
    return moviesCastJson;
  } catch (e) {
    alert("Извините, в данных ошибка");
  }
};

const getReviewsMoviesApi = async (reviewsId) => {
  try {
    const fetchMoviesReviewsById = await fetch(
      `${BASE_URL}/3/movie/${reviewsId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    if (!fetchMoviesReviewsById.ok) {
      throw new SyntaxError("Данные некорректны");
    }
    const moviesReviewsJson = await fetchMoviesReviewsById.json();
    return moviesReviewsJson;
  } catch (e) {
    alert("Извините, в данных ошибка");
  }
};

const getSearchQueryApi = async (query) => {
  try {
    const fetchSearchQueryApi = await fetch(
      `${BASE_URL}/3/search/movie/?api_key=${API_KEY}&language=en-US&page=1&query=${query}&include_adult=false`
    );
    if (!fetchSearchQueryApi.ok) {
      throw new SyntaxError("Данные некорректны");
    }
    const moviesSearchQuery = await fetchSearchQueryApi.json();
    return moviesSearchQuery;
  } catch (e) {
    alert("Извините, в данных ошибка");
  }
};

export {
  getPopularMoviesApi,
  getMoviesDetailsApi,
  getCastMoviesApi,
  getReviewsMoviesApi,
  getSearchQueryApi,
};
