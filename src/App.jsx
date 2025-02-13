import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppNavbar from "./components/AppNavbar";
import FooterSection from "./pages/footer/FooterSection";
import HomePage from "./pages/home/HomePage";
import ResumePage from "./pages/resume/ResumePage";
import ScrollToTop from "./components/ScrollToTop";
import CertificatesPage from "./pages/certificates/CertificatesPage";
import GalleryPage from "./pages/gallery/GalleryPage";
import NotFound from "./pages/NotFound";
import ProjectPage from "./pages/project/ProjectsPage";

function App() {
  return (
    <>
      <Router basename="/portfolio/">
        <AppNavbar />
        <ScrollToTop />
        <Routes>
          <Route path={"*"} element={<NotFound />}></Route>
          <Route path={"/"} element={<HomePage />}></Route>
          <Route path={"/resume"} element={<ResumePage />}></Route>
          <Route path={"/certificates"} element={<CertificatesPage />}></Route>
          <Route path={"/gallery"} element={<GalleryPage />}></Route>
          <Route path={"/projects"} element={<ProjectPage />}></Route>
        </Routes>
      </Router>
      <FooterSection />
    </>
  );
}

export default App;
