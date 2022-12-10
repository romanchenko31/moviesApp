import { NavLink } from "react-router-dom";
import s from "../Header/Header.module.css";
import "../Header/Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className={s.nav}>
          <li className={s.item}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
