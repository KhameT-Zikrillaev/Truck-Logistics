
import './index.css';
import HeaderLayout from './layout/HeaderLayout';
import MainLayout from './layout/MainLayout';
import FooterLayout from './layout/FooterLayout';
import CallButton from './components/CallButton';
import ScrollToTop from './components/ScrollToTop'; 
import SiteLoading from './components/SiteLoading/SiteLoading';
import { useEffect, useState } from 'react';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
     {loading ? (
        <SiteLoading />
      ) : (
       <div className="min-h-screen bg-gray-50">
      <HeaderLayout />
      <MainLayout />
      <FooterLayout />
      <CallButton />
      <ScrollToTop />
      
    </div>
     )}
    </>
 
  );
}

export default App;
