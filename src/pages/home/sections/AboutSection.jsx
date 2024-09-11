import { Col, Row, Image, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import AppSection from "../../../components/AppSection";
import FadeInWrapper from "../../../components/motionWrappers/FadeInWrapper";
import HoverScaleWrapper from "../../../components/motionWrappers/HoverScaleWrapper";

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <AppSection id="AboutSection" icon="bi-person-lines-fill" title="About">
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
                  <span className="fw-bold"> City: </span>
                  Banjarmasin, Indonesia
                </li>
                <li className="mb-4 fs-5">
                  <i className="bi bi-caret-right text-mirza-primary"></i>
                  <span className="fw-bold"> Age: </span>
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
            Hello👋 My name is <b>Muhammad Mirza Maulana</b>, and I am an{" "}
            <b>enthusiastic front-end developer</b>. I have gained experience in
            various technologies, including <b>Laravel and React Vite</b> for
            web development, and <b>Flutter</b> for mobile app development.
            Being a front-end developer brings me great satisfaction as it
            allows me to blend creativity with technology, crafting visually
            appealing and user-friendly interfaces. I take pride in my freelance
            work and in the achievements I`ve earned at both local and national
            levels. I am eager to collaborate with a team that shares my passion
            for delivering exceptional digital experiences.
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
          Next Page &rarr;
        </Button>
      </HoverScaleWrapper>
    </AppSection>
  );
};

export default AboutSection;
