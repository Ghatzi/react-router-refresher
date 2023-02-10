import { Outlet } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';

const Layout = () => {
  return (
    <div className="App">
      <Header title="React JS Blog" />
      <DataProvider>
        <Nav />
        <Outlet />
      </DataProvider>
      <Footer />
    </div>
  );
};

export default Layout;
