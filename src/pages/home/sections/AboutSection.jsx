import { Col, Container, Row } from "react-bootstrap";
import FadeInWrapper from "../../../components/motionWrappers/FadeInWrapper";

const highlights = [
  {
    icon: "bi-code-slash",
    title: "Teknologi",
    text: "Mengembangkan antarmuka web dengan React, Laravel, dan teknologi modern.",
  },
  {
    icon: "bi-people",
    title: "Kepemimpinan",
    text: "Berpengalaman memimpin organisasi, tim proyek, dan kegiatan mahasiswa.",
  },
  {
    icon: "bi-camera-reels",
    title: "Kreatif Visual",
    text: "Menghasilkan karya fotografi, videografi, video editing, dan desain grafis untuk berbagai kebutuhan.",
  },
];

const skills = [
  "Fotografi",
  "Videografi",
  "Video Editing",
  "CapCut",
  "Desain Grafis",
  "Figma",
  "Canva",
  "Adobe Illustrator",
  "React Vite",
  "Laravel",
  "JavaScript",
  "PHP",
  "Bootstrap",
  "Tailwind CSS",
];

const AboutSection = () => (
  <>
    <section id="about" className="content-section white">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <FadeInWrapper>
              <p className="section-eyebrow">Tentang Saya</p>
              <h2 className="section-heading">Developer muda yang tumbuh melalui proyek dan pengalaman nyata.</h2>
              <p className="section-copy">
                Saya menikmati proses mengubah ide menjadi antarmuka yang menarik,
                ramah pengguna, dan bermanfaat. Pengalaman freelance, kompetisi
                nasional, organisasi, dan pekerjaan profesional membentuk cara saya
                bekerja secara kreatif sekaligus terstruktur.
              </p>
              <a href="#resume" className="primary-button mt-3">
                Lihat Resume <i className="bi bi-arrow-right"></i>
              </a>
            </FadeInWrapper>
          </Col>
          <Col lg={6}>
            <Row className="g-4">
              {highlights.map((item) => (
                <Col md={item.title === "Kreatif Visual" ? 12 : 6} key={item.title}>
                  <FadeInWrapper>
                    <article className="info-card">
                      <div className="info-icon"><i className={`bi ${item.icon}`}></i></div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </article>
                  </FadeInWrapper>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>

    <section id="skills" className="content-section">
      <Container>
        <div className="text-center mx-auto" style={{ maxWidth: "720px" }}>
          <p className="section-eyebrow">Kemampuan</p>
          <h2 className="section-heading">Keahlian dan perangkat yang saya gunakan</h2>
          <p className="section-copy">
            Kemampuan teknologi dan kreatif visual yang terus saya kembangkan
            melalui proyek akademik, organisasi, dan profesional.
          </p>
        </div>
        <div className="skill-list justify-content-center mt-4">
          {skills.map((skill) => <span className="skill-pill" key={skill}>{skill}</span>)}
        </div>
      </Container>
    </section>
  </>
);

export default AboutSection;
