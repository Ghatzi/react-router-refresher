import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';

const Layout = () => {
  return (
    <div className="App">
      <Header title="React JS Blog" />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
