import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import StickyMenu from "./components/StickyMenu/StickyMenu";
import Footer from "./components/footer/Footer";
import Chatbot from "./components/Chatbot/Chatbot";

// Route-based code splitting: each page is its own chunk, loaded on demand.
// Cuts the initial bundle significantly for visitors who only see the Home page.
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage/about/About"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage/ProjectsPage"));
const NotFound = lazy(() => import("./components/NotFound"));

// Minimal loading state — keeps the layout stable while a route's chunk loads
const PageLoader = () => (
  <div
    className="flex items-center justify-center min-h-[50vh]"
    role="status"
    aria-live="polite"
  >
    <span className="sr-only">Loading...</span>
  </div>
);

function App() {
  return (
    <div className="App">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <div className="custom-bg">
        <Navbar />
        <StickyMenu />
        <Chatbot />
        <div id="main-content">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
