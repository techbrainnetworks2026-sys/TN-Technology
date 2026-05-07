import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/navbar';

import Footer from './components/Footer/footer';

import Hero from './components/Hero/Hero';

import Products from './components/Products/product';

import About from './components/About/About';

import Services from './components/Services/Services';

import Contact from './components/Contact/Contact';

import Careers from './components/Careers/Careers';

import Industries from './components/Industries/Industries';

import ProductDetail from './components/ProductDetail/ProductDetail';

import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';

const MainScrollPage = () => {
  return (
    <>
      <div id="home">
        <Hero />
        <Products />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="industries">
        <Industries />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="careers">
        <Careers />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>

      <div
        className="app-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}
      >

        <Navbar />

        <main style={{ flex: '1' }}>
          <Routes>

            <Route
              path="/"
              element={<MainScrollPage />}
            />

            <Route
              path="/product/:id"
              element={<ProductDetail />}
            />

            <Route
              path="/privacy-policy"
              element={<PrivacyPolicy />}
            />

          </Routes>
        </main>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;