import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ScrollToTop from '../../common/ScrollToTop/ScrollToTop';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [pathname]);

  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}