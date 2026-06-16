import { Col, Row } from "react-bootstrap";
import AppSection from "../../../components/AppSection";
import FadeInWrapper from "../../../components/motionWrappers/FadeInWrapper";

const projects = [
  {
    icon: "bi-window",
    title: "MH Landing Page",
    category: "Web Development",
    text: "Landing page profesional dengan fokus pada visual, informasi, dan pengalaman pengguna.",
    href: "assets/peojects/pdf/mh-landingpage.pdf",
  },
  {
    icon: "bi-bar-chart",
    title: "Aplikasi Quick Count PAN",
    category: "Laravel",
    text: "Antarmuka aplikasi quick count yang dikembangkan sebagai bagian dari tim ahli bidang IT.",
  },
  {
    icon: "bi-phone",
    title: "Tambalin",
    category: "Bisnis Digital",
    text: "Proyek bisnis digital yang berhasil meraih peringkat 5 nasional pada KMI Award XIV.",
  },
  {
    icon: "bi-palette",
    title: "Media & Desain Grafis",
    category: "Figma, Canva & Adobe Illustrator",
    text: "Produksi identitas visual, materi publikasi, dan konten desain untuk organisasi serta kebutuhan profesional.",
  },
  {
    icon: "bi-camera-reels",
    title: "Fotografi & Videografi",
    category: "Produksi Visual",
    text: "Dokumentasi foto dan video untuk kegiatan, organisasi, serta kebutuhan konten kreatif.",
  },
  {
    icon: "bi-film",
    title: "Video Editing",
    category: "CapCut",
    text: "Penyuntingan video menggunakan CapCut untuk konten media sosial, dokumentasi, dan publikasi.",
  },
];

const ProjectsSection = () => (
  <FadeInWrapper>
    <AppSection id="projects" icon="bi-grid" title="Proyek Pilihan">
      <p className="section-copy text-center mx-auto mb-5" style={{ maxWidth: "680px" }}>
        Beberapa karya yang mewakili pengalaman saya dalam pengembangan web,
        aplikasi mobile, bisnis digital, dan desain.
      </p>
      <Row className="g-4">
        {projects.map((project) => (
          <Col md={6} key={project.title}>
            <article className="portfolio-card">
              <div className="project-visual"><i className={`bi ${project.icon}`}></i></div>
              <div className="portfolio-body">
                <span className="portfolio-year">{project.category}</span>
                <h3 className="mt-2">{project.title}</h3>
                <p>{project.text}</p>
                {project.href && (
                  <a className="text-primary-custom fw-bold d-inline-block mt-3" href={project.href} target="_blank" rel="noreferrer">
                    Lihat proyek <i className="bi bi-arrow-up-right"></i>
                  </a>
                )}
              </div>
            </article>
          </Col>
        ))}
      </Row>
    </AppSection>
  </FadeInWrapper>
);

export default ProjectsSection;
