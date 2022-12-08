import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import s from "../Layout/Layout.module.css";

const Layout = () => {
  return (
    <>
      <Header />
      <div className={s.wrapper}>
        <Outlet />
      </div>

      <footer className={s.footer}>2022</footer>
    </>
  );
};

export default Layout;
