import { Col, Container, Row } from "react-bootstrap";

const FooterSection = () => (
  <>
    <section id="contact" className="contact-section">
      <Container className="contact-content">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "700px" }}>
          <p className="section-eyebrow text-info">Kontak</p>
          <h2 className="section-heading">Mari membuat sesuatu yang bermanfaat.</h2>
          <p className="text-light-emphasis">
            Terbuka untuk kolaborasi, pekerjaan, proyek freelance, dan diskusi seputar teknologi serta desain.
          </p>
        </div>
        <Row className="g-4 justify-content-center">
          <Col lg={7}>
            <div className="contact-card">
              <h3 className="fw-bold mb-4">Informasi Kontak</h3>
              <a className="contact-link" href="mailto:mirzamaulana713@gmail.com">
                <i className="bi bi-envelope"></i> mirzamaulana713@gmail.com
              </a>
              <span className="contact-link"><i className="bi bi-geo-alt"></i> Banjarmasin, Indonesia</span>
              <a className="contact-link" href="https://github.com/MirzaMlna" target="_blank" rel="noreferrer">
                <i className="bi bi-github"></i> github.com/MirzaMlna
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <footer className="site-footer">
      <Container>
        <Row className="align-items-center g-3">
          <Col md={7} className="text-center text-md-start">
            &copy; 2026 Muhammad Mirza Maulana. Dibangun dengan React.
          </Col>
          <Col md={5} className="text-center text-md-end">
            <a className="social-link" href="https://www.instagram.com/mirza_mlna/" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
            <a className="social-link" href="https://www.tiktok.com/@maulana.mirza" target="_blank" rel="noreferrer" aria-label="TikTok"><i className="bi bi-tiktok"></i></a>
            <a className="social-link" href="https://github.com/MirzaMlna" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="bi bi-github"></i></a>
          </Col>
        </Row>
      </Container>
    </footer>
  </>
);

export default FooterSection;
