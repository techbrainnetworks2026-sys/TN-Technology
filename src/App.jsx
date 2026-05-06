import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Industries from './pages/Industries';
import ProductDetail from './pages/ProductDetail';
import PrivacyPolicy from './pages/PrivacyPolicy';


const MainScrollPage = () => {
  return (
    <>
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="industries"><Industries /></div>
      <div id="services"><Services /></div>
      <div id="careers"><Careers /></div>
      <div id="contact"><Contact /></div>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navigation />
        <main style={{ flex: '1' }}>
          <Routes>
            <Route path="/" element={<MainScrollPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
