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
      title: "GEMASTIK XV Certificate",
      caption:
        "GEMASTIK is a national ICT competition by Indonesia's Ministry of Research and Technology, aimed at developing students' skills in areas like application development, graphic design, and cybersecurity.",
      year: "2022",
    },
    {
      cover: "./assets/certificates/cover/kmi-expo.webp",
      certificate: "./assets/certificates/kmi-expo.webp",
      title: "KMI EXPO XIV Certificate",
      caption:
        "KMI Expo XIV 2023 at Ganesha University, Bali, is a platform for student entrepreneurs across Indonesia to compete, showcase products, and build networks. It fosters knowledge sharing, collaboration, and connections with investors, mentors, and industry experts.",
      year: "2023",
    },
    {
      cover: "./assets/certificates/cover/tambalin.webp",
      certificate: "./assets/certificates/tambalin.webp",
      title: "KMI AWARD Certificate",
      caption:
        "The KMI Award recognizes students' efforts in P2MW 2023. Participants must showcase their main products at the KMI Expo XIV 2023. Judging will take place at each booth, organized by business category.",
      year: "2023",
    },
    {
      cover: "./assets/certificates/cover/p2mw.webp",
      certificate: "./assets/certificates/p2mw.webp",
      title: "Student Entrepreneurship Development Program (P2MW) Certificate",
      caption:
        "P2MW is a business development program for students who already have a business through development funding assistance and coaching by providing mentoring and business training (coaching) to P2MW student participants.",
      year: "2023",
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
      <AppSection id="CertificateSection" icon="bi-award" title="Certificates">
        <i className={`fs-6 fw-bold `}>Scroll For More Certificates</i>
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
                &larr; Back
              </Button>
            </HoverScaleWrapper>
          </Col>

          <Col className="d-flex justify-content-end">
            <HoverScaleWrapper>
              <Button
                variant="dark"
                size="lg"
                onClick={() => navigate("/next-page")}
              >
                Next Page &rarr;
              </Button>
            </HoverScaleWrapper>
          </Col>
        </Row>
      </AppSection>
    </FadeInWrapper>
  );
};

export default CertificatesSection;
