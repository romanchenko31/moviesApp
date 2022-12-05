import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../Page/Home";
import Movies from "../Page/Movies";
import NotFound from "../Page/NotFound";

const App = () => {
  console.log("app");
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
