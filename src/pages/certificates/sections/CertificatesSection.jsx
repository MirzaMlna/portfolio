import { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import AppSection from "../../../components/AppSection";
import FadeInWrapper from "../../../components/motionWrappers/FadeInWrapper";

const certificates = [
  {
    cover: "assets/certificates/cover/gemastik-xv.webp",
    certificate: "assets/certificates/gemastik-xv.webp",
    title: "Sertifikat GEMASTIK XV",
    caption: "Kompetisi TIK tingkat nasional yang mengembangkan keterampilan mahasiswa dalam pengembangan aplikasi dan teknologi.",
    year: "2022",
  },
  {
    cover: "assets/certificates/cover/kmi-expo.webp",
    certificate: "assets/certificates/kmi-expo.webp",
    title: "Sertifikat KMI EXPO XIV",
    caption: "Ajang nasional bagi wirausahawan mahasiswa untuk berkompetisi, memamerkan produk, dan membangun jaringan.",
    year: "2023",
  },
  {
    cover: "assets/certificates/cover/tambalin.webp",
    certificate: "assets/certificates/tambalin.webp",
    title: "Juara 5 KMI AWARD XIV",
    caption: "Penghargaan nasional kategori Bisnis Digital melalui produk utama Tambalin pada KMI Expo XIV.",
    year: "2023",
  },
  {
    cover: "assets/certificates/cover/p2mw.webp",
    certificate: "assets/certificates/p2mw.webp",
    title: "Program Pembinaan Mahasiswa Wirausaha",
    caption: "Program pengembangan usaha mahasiswa melalui bantuan dana, pendampingan, dan pelatihan bisnis.",
    year: "2023",
  },
  {
    cover: "assets/certificates/cover/bpsdmp.webp",
    certificate: "assets/certificates/bpsdmp.webp",
    title: "Junior Graphic Design",
    caption: "Sertifikasi kompetensi Junior Graphic Design dari Badan Nasional Sertifikasi Profesi.",
    year: "2024",
  },
];

const CertificatesSection = () => {
  const [selected, setSelected] = useState(null);

  return (
    <FadeInWrapper>
      <AppSection id="certificates" icon="bi-award" title="Sertifikat & Penghargaan">
        <p className="section-copy text-center mx-auto mb-5" style={{ maxWidth: "680px" }}>
          Dokumentasi kompetensi, program nasional, dan pencapaian yang mendukung perjalanan profesional saya.
        </p>
        <Row className="g-4">
          {certificates.map((certificate) => (
            <Col lg={4} md={6} key={certificate.title}>
              <article className="portfolio-card" onClick={() => setSelected(certificate)}>
                <img className="portfolio-image" src={certificate.cover} alt={certificate.title} />
                <div className="portfolio-body">
                  <span className="portfolio-year">{certificate.year}</span>
                  <h3 className="mt-2">{certificate.title}</h3>
                  <p>Klik untuk melihat detail sertifikat.</p>
                </div>
              </article>
            </Col>
          ))}
        </Row>

        <Modal show={Boolean(selected)} onHide={() => setSelected(null)} centered size="lg">
          <Modal.Header closeButton><Modal.Title>{selected?.title}</Modal.Title></Modal.Header>
          <Modal.Body className="p-4 text-center">
            <img src={selected?.certificate} alt={selected?.title} className="img-fluid rounded-4 mb-4" />
            <p className="section-copy mb-0">{selected?.caption}</p>
          </Modal.Body>
        </Modal>
      </AppSection>
    </FadeInWrapper>
  );
};

export default CertificatesSection;
