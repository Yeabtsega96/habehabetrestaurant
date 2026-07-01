import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Helmet } from "react-helmet-async";

import Footer from "./Footer";
import NavBar from "./NavBar";

import "./MainLayout.css";

// Loader only for page content
const PageLoader = () => (
  <div style={{ textAlign: "center", padding: "2rem" }}>
    Loading...
  </div>
);

const MainLayout = () => {
  return (
    <div className="app">
      
      {/* SEO fallback */}
      <Helmet>
        <meta
          name="description"
          content="HabeshaBet Restaurant in Addis Ababa — authentic Ethiopian cuisine, traditional dishes, coffee ceremony, delivery, and catering services."
        />
      </Helmet>

      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      {/* Always visible */}
      <NavBar />

      {/* Only page content is lazy-loaded */}
      <main id="main-content">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>

      {/* Always visible */}
      <Footer />
    </div>
  );
};

export default MainLayout;