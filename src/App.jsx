import AppNavbar from "./components/AppNavbar";
import HomePage from "./pages/home/HomePage";
import ResumePage from "./pages/resume/ResumePage";
import CertificatesPage from "./pages/certificates/CertificatesPage";
import GalleryPage from "./pages/gallery/GalleryPage";
import FooterSection from "./pages/footer/FooterSection";

function App() {
  return (
    <div className="site-main">
      <AppNavbar />
      <main>
        <HomePage />
        <ResumePage />
        <CertificatesPage />
        <GalleryPage />
      </main>
      <FooterSection />
    </div>
  );
}

export default App;
