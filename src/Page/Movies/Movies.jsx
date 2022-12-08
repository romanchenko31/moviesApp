import { useEffect, useState } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import { DebounceInput } from "react-debounce-input";
import nextId from "react-id-generator";
import { getSearchQueryApi } from "../../Service/Service";
import s from "../Movies/Movies.module.css";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState("");
  const [valueQuery, setValueQuery] = useState(null);
  let location = useLocation();
  const { pathname, search } = location;
  const name = searchParams.get("query");

  const getSearchQuery = async (name) => {
    const resultSearchQuery = await getSearchQueryApi(name);
    setValueQuery(resultSearchQuery.results);
  };

  useEffect(() => {
    if (search === "") {
      return;
    }
    getSearchQuery(name);
  }, [name, search]);

  const onHandleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ query: searchInput });
    getSearchQuery(searchInput);
    setSearchInput("");
  };

  return (
    <>
      <h2>Movies</h2>
      <form onSubmit={onSubmit}>
        <label>
          <DebounceInput
            debounceTimeout={500}
            onChange={onHandleChange}
            type="text"
            value={searchInput}
          />
        </label>
        <button type="submit">Искать</button>
      </form>
      <ul>
        {valueQuery?.map((value) => {
          return (
            <li key={nextId()}>
              <Link
                className={s.link}
                to={`${value.id}`}
                state={{ from: { pathname, search } }}
              >
                {value.original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Movies;
