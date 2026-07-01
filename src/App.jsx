import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

import MainLayout from "./components/layout/MainLayout";
import ScrollToTop from "./components/common/ScrollToTop";

// Lazy-loaded pages (code splitting)
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const MenuPage = lazy(() => import("./pages/MenuPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));



// 404 Page (simple version)
const NotFound = () => (
  <div style={{ textAlign: "center", padding: "4rem" }}>
    <h1>404</h1>
    <p>Page not found</p>
  </div>
);

const App = () => {
  return (
    <>
      <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            
            {/* Main Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
    </>
  );
};

export default App;