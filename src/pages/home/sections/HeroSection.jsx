import { Col, Container, Row } from "react-bootstrap";
import FadeInWrapper from "../../../components/motionWrappers/FadeInWrapper";

const HeroSection = () => (
  <section id="home" className="hero-section">
    <Container className="hero-content">
      <Row className="align-items-center g-5">
        <Col lg={7}>
          <FadeInWrapper>
            <div className="availability-badge">
              <span className="availability-dot"></span>
              Terbuka untuk kolaborasi dan proyek baru
            </div>
            <h1 className="hero-title">
              Halo, saya <span className="gradient-text">Muhammad Mirza Maulana</span>.
              <br />
              Saya membangun pengalaman digital yang bermakna.
            </h1>
            <p className="hero-copy">
              Mahasiswa Teknik Informatika, front-end developer, fotografer,
              videografer, video editor, dan desainer grafis dari Banjarmasin
              yang memadukan teknologi, visual, dan pengalaman organisasi.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="primary-button">
                Lihat Proyek <i className="bi bi-arrow-right"></i>
              </a>
              <a href="#contact" className="secondary-button">
                Kontak Saya
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat"><strong>3+</strong><span>Bidang keahlian</span></div>
              <div className="hero-stat"><strong>5+</strong><span>Sertifikat</span></div>
              <div className="hero-stat"><strong>3+</strong><span>Tahun pengalaman</span></div>
            </div>
          </FadeInWrapper>
        </Col>
        <Col lg={5}>
          <FadeInWrapper>
            <div className="profile-wrap">
              <div className="profile-card">
                <img className="profile-image" src="mirza.webp" alt="Muhammad Mirza Maulana" />
                <div className="profile-meta">
                  <div><small>Jurusan</small><strong>Teknik Informatika</strong></div>
                  <div><small>Lokasi</small><strong>Banjarmasin</strong></div>
                </div>
              </div>
            </div>
          </FadeInWrapper>
        </Col>
      </Row>
    </Container>
  </section>
);

export default HeroSection;
