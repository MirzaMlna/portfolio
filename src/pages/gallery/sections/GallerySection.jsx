import AppSection from "../../../components/AppSection";
import FadeInWrapper from "../../../components/motionWrappers/FadeInWrapper";
import HoverScaleMinWrapper from "../../../components/motionWrappers/HoverScaleMinWrapper";
import HoverScaleWrapper from "../../../components/motionWrappers/HoverScaleWrapper";
import { Row, Col, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const GallerySection = () => {
  const navigate = useNavigate();
  const gallery = [
    {
      image: "./assets/gallery/nilai99.webp",
      title: "Mengetuai Kelompok Dengan Nilai Tertinggi Satu Angkatan",
      caption:
        "Kelompok untuk tugas akhir salah satu Mata Kuliah. Dosen Pengampu : Zaenuddin, S.Kom., M.Kom.",
    },
    {
      image: "./assets/gallery/standUpPKKMB.webp",
      title: "Stand Up PKKMB 2022",
      caption:
        "Mencoba memberanikan diri untuk naik ke panggung, dan berakhir memuaskan.",
    },
    {
      image: "./assets/gallery/standUpBali.webp",
      title: "20 Besar Stand Up KMI EXPO di Bali",
      caption: "NT Besar Besaran !",
    },
    {
      image: "./assets/gallery/kmiAward.webp",
      title: "Meraih Juara Harapan 2 pada ajang nasional KMI AWARD XIV.",
      caption: "Wehehehehe",
    },
    {
      image: "./assets/gallery/kadivOpidia.webp",
      title: "Ketua Divisi Opidi & Media (UKM KDK AL-KAROMAH UNISKA)",
      caption: "Bergerak di bidang konten, editing, dan media dakwah.",
    },
    {
      image: "./assets/gallery/ketuplak.webp",
      title: "Ketua Pelaksana Graphic Design Workshop",
      caption:
        "Bertujuan untuk meningkatkan pengetahuan dan skill Anggota KDK-AL KAROMAH di bidang Desain Grafis.",
    },
  ];
  return (
    <FadeInWrapper>
      <AppSection id="GallerySection" icon="bi-image" title="Galeri">
        <i className={`fs-6 fw-bold `}>Geser Untuk Melihat Galeri Saya</i>
        <Row className="px-lg-0 px-2 mt-2 overflow-x-scroll flex-nowrap">
          {gallery.map((gallery, index) => (
            <Col key={index} lg={4} md={6} sm={12} className="px-1">
              <HoverScaleMinWrapper>
                <Card data-bs-theme="light" className="mb-3 cursor-pointer">
                  <Card.Img
                    variant="top"
                    src={gallery.image ? gallery.image : "./null-image.webp"}
                  />
                  <Card.Body>
                    <Card.Title>{gallery.title}</Card.Title>
                    <Card.Subtitle className="mt-3 text-secondary">
                      {gallery.caption}
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </HoverScaleMinWrapper>
            </Col>
          ))}
        </Row>
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

export default GallerySection;
