import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppNavbar from "./components/AppNavbar";
import FooterSection from "./pages/footer/FooterSection";
import HomePage from "./pages/home/HomePage";
import ResumePage from "./pages/resume/ResumePage";
import ScrollToTop from "./components/ScrollToTop";
import CertificatesSection from "./pages/certificates/sections/CertificatesSection";
import GallerySection from "./pages/gallery/sections/GallerySection";

function App() {
  return (
    <>
      <Router>
        <AppNavbar />
        <ScrollToTop />
        <Routes>
          <Route path={"/portfolio"} element={<HomePage />}></Route>
          <Route path={"/resume"} element={<ResumePage />}></Route>
          <Route
            path={"/certificates"}
            element={<CertificatesSection />}
          ></Route>
          <Route path={"/gallery"} element={<GallerySection />}></Route>
        </Routes>
      </Router>
      <FooterSection />
    </>
  );
}

export default App;
