import AppSection from "../../../components/AppSection";
import HoverScaleMinWrapper from "../../../components/motionWrappers/HoverScaleMinWrapper";
import HoverScaleWrapper from "../../../components/motionWrappers/HoverScaleWrapper";
import { Row, Col, Button, Card, Modal } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FadeInWrapper from "../../../components/motionWrappers/FadeInWrapper";

const CertificatesSection = () => {
  const navigate = useNavigate();

  const certificates = [
    {
      cover: "./assets/certificates/cover/gemastik-xv.webp",
      certificate: "./assets/certificates/gemastik-xv.webp",
      title: "Sertifikat GEMASTIK XV",
      caption:
        "GEMASTIK merupakan kompetisi TIK tingkat nasional yang diselenggarakan oleh Kementerian Riset dan Teknologi Indonesia untuk mengembangkan keterampilan mahasiswa di berbagai bidang seperti pengembangan aplikasi, desain grafis, dan keamanan siber.",
      year: "2022",
    },
    {
      cover: "./assets/certificates/cover/kmi-expo.webp",
      certificate: "./assets/certificates/kmi-expo.webp",
      title: "Sertifikat KMI EXPO XIV",
      caption:
        "KMI Expo XIV 2023 di Universitas Ganesha, Bali, merupakan wadah bagi para wirausahawan mahasiswa di seluruh Indonesia untuk berkompetisi, memamerkan produk, dan membangun jaringan. Ajang ini mendorong berbagi pengetahuan, kolaborasi, dan koneksi dengan investor, mentor, dan pakar industri.",
      year: "2023",
    },
    {
      cover: "./assets/certificates/cover/tambalin.webp",
      certificate: "./assets/certificates/tambalin.webp",
      title: "Sertifikat Juara 5 KMI AWARD XIV",
      caption:
        "Penghargaan KMI merupakan bentuk pengakuan atas usaha mahasiswa dalam P2MW 2023. Peserta harus memamerkan produk utama mereka di KMI Expo XIV 2023. Penjurian akan dilakukan di setiap stan, yang disusun berdasarkan kategori bisnis.",
      year: "2023",
    },
    {
      cover: "./assets/certificates/cover/p2mw.webp",
      certificate: "./assets/certificates/p2mw.webp",
      title: "Sertifikat Program Pembinaan Mahasiswa Wirausaha (P2MW) 2023",
      caption:
        "P2MW merupakan program pengembangan usaha bagi mahasiswa yang telah memiliki usaha melalui bantuan dana pengembangan dan pembinaan dengan memberikan pendampingan dan pelatihan usaha (coaching) kepada mahasiswa peserta P2MW.",
      year: "2023",
    },
    {
      cover: "./assets/certificates/cover/bpsdmp.webp",
      certificate: "./assets/certificates/bpsdmp.webp",
      title:
        "Sertifikat Junior Graphic Design dari Badan Nasional Sertifikasi Profesi",
      caption:
        "BNSP merupakan kepanjangan dari Badan Nasional Sertifikasi Kompetensi. (BNSP) merupakan badan nasional independen yang memiliki tanggung jawab langsung pada Kepala Negara.",
      year: "2024",
    },
  ];

  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (certificate) => {
    setSelectedCertificate(certificate);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <FadeInWrapper>
      <AppSection id="CertificateSection" icon="bi-award" title="Sertifikat">
        <i className={`fs-6 fw-bold `}>
          Geser Untuk Sertifikat Lainnya atau Klik Untuk Menampilkan
          Selengkapnya
        </i>
        <Row className="px-lg-0 px-2 mt-2 overflow-x-scroll flex-nowrap">
          {certificates.map((certificate, index) => (
            <Col key={index} lg={4} md={6} sm={12} className="px-1">
              <HoverScaleMinWrapper>
                <Card
                  data-bs-theme="light"
                  className="mb-3 cursor-pointer"
                  onClick={() => handleCardClick(certificate)}
                >
                  <Card.Img
                    variant="top"
                    src={
                      certificate.cover
                        ? certificate.cover
                        : "./null-image.webp"
                    }
                  />
                  <Card.Body>
                    <Card.Title>{certificate.title}</Card.Title>
                    <Card.Subtitle className="mt-3 text-secondary">
                      {certificate.year}
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </HoverScaleMinWrapper>
            </Col>
          ))}
        </Row>

        {/* Modal for displaying certificate details */}
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedCertificate?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <img
              src={selectedCertificate?.certificate}
              alt={selectedCertificate?.title}
              className="img-fluid mb-3"
            />
            <p>{selectedCertificate?.caption}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Row className="my-3">
          <Col className="d-flex justify-content-start">
            <HoverScaleWrapper>
              <Button
                variant="dark"
                size="lg"
                onClick={() => navigate("/resume")}
              >
                &larr; Kembali
              </Button>
            </HoverScaleWrapper>
          </Col>

          <Col className="d-flex justify-content-end">
            <HoverScaleWrapper>
              <Button
                variant="dark"
                size="lg"
                onClick={() => navigate("/gallery")}
              >
                Lanjut &rarr;
              </Button>
            </HoverScaleWrapper>
          </Col>
        </Row>
      </AppSection>
    </FadeInWrapper>
  );
};

export default CertificatesSection;
