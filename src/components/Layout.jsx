import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Outlet />
      </div>

      <footer>2022</footer>
    </>
  );
};

export default Layout;
