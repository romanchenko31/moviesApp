import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import style from "../Layout/Layout.module.css";

const Layout = () => {
  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <Outlet />
      </div>

      <footer className={style.footer}>2022</footer>
    </>
  );
};

export default Layout;
