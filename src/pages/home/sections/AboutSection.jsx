import { Col, Row, Image, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import AppSection from "../../../components/AppSection";
import FadeInWrapper from "../../../components/motionWrappers/FadeInWrapper";
import HoverScaleWrapper from "../../../components/motionWrappers/HoverScaleWrapper";

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <AppSection
      id="AboutSection"
      icon="bi-person-lines-fill"
      title="Tentang Saya"
    >
      <Row>
        <Col md={3} className="mb-4 mb-lg-0">
          <FadeInWrapper>
            <Image
              src="mirza.webp"
              alt="Mirza's Photo"
              className="shadow"
              fluid
              rounded
            />
          </FadeInWrapper>
        </Col>
        <Col md={9}>
          <Row>
            <Col md={6}>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li className="mb-4 fs-5">
                  <i className="bi bi-caret-right text-mirza-primary"></i>
                  <span className="fw-bold"> Kota: </span>
                  Banjarmasin, Indonesia
                </li>
                <li className="mb-4 fs-5">
                  <i className="bi bi-caret-right text-mirza-primary"></i>
                  <span className="fw-bold"> Usia: </span>
                  20
                </li>
              </ul>
            </Col>
            <Col md={6}>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li className="mb-4 fs-5">
                  <i className="bi bi-caret-right text-mirza-primary"></i>
                  <span className="fw-bold"> Degree: </span>
                  Beginner
                </li>
                <li className="fs-5">
                  <i className="bi bi-caret-right text-mirza-primary"></i>
                  <span className="fw-bold"> Email: </span>
                  mirzamaulana713@gmail.com
                </li>
              </ul>
            </Col>
          </Row>
          <hr className="text-mirza-primary" />
          <p className="fs-5">
            Halo👋 Nama saya <b>Muhammad Mirza Maulana</b>, dan saya adalah
            seorang <b className="fst-italic">front-end developer</b> yang
            antusias. Saya telah mendapatkan pengalaman dalam beberapa
            teknologi, termasuk <b>Laravel dan React Vite</b> untuk pengembangan
            web, serta <b>Flutter</b> untuk pengembangan aplikasi mobile.
            Menjadi seorang developer front-end memberikan saya kepuasan yang
            besar karena memungkinkan saya untuk menggabungkan kreativitas
            dengan teknologi, menciptakan antarmuka yang menarik secara visual
            dan ramah pengguna. Saya bangga dengan pekerjaan freelance saya dan
            pencapaian yang telah saya raih di tingkat lokal dan nasional. Saya
            sangat bersemangat untuk berkolaborasi dengan tim yang berbagi
            semangat yang sama dalam menghadirkan pengalaman digital yang luar
            biasa.
          </p>
        </Col>
      </Row>
      <HoverScaleWrapper>
        <Button
          variant="dark"
          size="lg"
          className="my-3 mx-auto justify-content-end align-items-end d-flex"
          onClick={() => navigate("/resume")}
        >
          Selanjutnya &rarr;
        </Button>
      </HoverScaleWrapper>
    </AppSection>
  );
};

export default AboutSection;
