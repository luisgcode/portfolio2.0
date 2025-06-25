import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/about/About";
import ResourcesPage from "./pages/Resources/Resources";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import Footer from "./components/footer/Footer";
import NotFound from "./components/NotFound";

import { useTranslation } from "react-i18next";
import Chatbot from "./components/Chatbot/Chatbot";
import StickyMenu from "./components/StickyMenu/StickyMenu";

function App() {
  const { t } = useTranslation("global");
  return (
    <div className="App">
      <div className="custom-bg">
        <Navbar />
        {/* <StickyMenu /> */}
        <Chatbot />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
