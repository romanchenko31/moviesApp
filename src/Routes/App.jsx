import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../Page/Home/Home";
import Movies from "../Page/Movies/Movies";
import NotFound from "../Page/NotFound";
import MovieDetails from "../Page/MovieDetails/MovieDetails";
import Cast from "../Page/Cast/Cast";
import Reviews from "../Page/Reviews/Reviews";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:moviesId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
