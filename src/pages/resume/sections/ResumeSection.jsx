import { Button, Row, Col } from "react-bootstrap"; // Import React Bootstrap
import { useNavigate } from "react-router-dom";

import AppSection from "../../../components/AppSection";
import HoverScaleWrapper from "../../../components/motionWrappers/HoverScaleWrapper";
import FadeInWrapper from "../../../components/motionWrappers/FadeInWrapper";

const ResumeSection = () => {
  const navigate = useNavigate();

  return (
    <FadeInWrapper>
      <AppSection id="ResumeSection" icon="bi-caret-right" title="Resume">
        <Row className="mb-4">
          <Col md={5} className="mb-4">
            <h3>
              <i className="bi bi-caret-right text-mirza-primary"> </i>Team &
              Organization Experience
            </h3>
            <ul>
              <li className="fw-bold">
                Head of the Opinion and Media Division (2023 - 2024)
              </li>
              <p>Kajian Dakwah Kampus Al-Karomah UNISKA.</p>
              <li className="fw-bold">
                Chief Executive of the Graphic Design Workshop (2024)
              </li>
              <p>Kajian Dakwah Kampus Al-Karomah UNISKA.</p>
              <li className="fw-bold">
                GEMASTIK XV Competition, Software Programming Division (2022)
              </li>
              <p>
                Indonesian Talent Development Center (BPTI), National
                Achievement Center (PUSPRESNAS), Secretariat General, Ministry
                of Education, Culture, Research and Technology.
              </p>
              <li className="fw-bold">
                Mobile Front End Developer At KMI EXPO XIV, Technology used:
                Flutter (2023)
              </li>
              <p>Directorate General of Higher Education.</p>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h3>
              <i className="bi bi-caret-right text-mirza-primary"> </i>Work
              Experience
            </h3>
            <ul>
              <li className="fw-bold">
                Partai Amanat Nasional (2023 - Present)
              </li>
              <p>
                As A Team of IT experts, Create A Quick Count Application Using
                Laravel
              </p>
            </ul>
          </Col>

          <Col md={3} className="mb-4">
            <h3>
              <i className="bi bi-caret-right text-mirza-primary"> </i>Personal
              Experience
            </h3>
            <ul>
              <li className="fw-bold">
                Stand Up Comedy in Front of 4000 Eyes When Being a New Student
                In an Introduction to Campus Life for New Students (2022)
              </li>
              <p>Introduction to Campus Life for New Students (PKKMB)</p>
              <li className="fw-bold">
                Project Jockey Freelancer (2022 - Present)
              </li>
              <p>Mirza Project And Assignment</p>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col md={4} className="mb-4">
            <h3>
              <i className="bi bi-caret-right text-mirza-primary"> </i>Skills
            </h3>
            <ul>
              <li>Public Speaking</li>
              <li>HTML/CSS</li>
              <li>PHP, JavaScript, Dart</li>
              <li>Bootstrap, Tailwind</li>
              <li>Laravel, Flutter</li>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h3>
              <i className="bi bi-caret-right text-mirza-primary"> </i>
              Achievement
            </h3>
            <ul>
              <li className="fw-bold">Top 20 Stand Up Competition (2023)</li>
              <p>KMI EXPO XIV - Bali.</p>
              <li className="fw-bold">
                Won 5th place out of 273 Indonesian campuses in the national
                &raquo;KMI AWARD&laquo; Digital Business category, making campus
                history as the first to win this event. (2023)
              </li>
              <p>KMI EXPO XIV - Bali.</p>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h3>
              <i className="bi bi-caret-right text-mirza-primary"> </i>Education
            </h3>
            <ul>
              <li className="fw-bold">Senior High School (2019 - 2022)</li>
              <p>SMAN 11 Banjarmasin (Mathematics and Natural Sciences)</p>
              <li className="fw-bold">University (2022 - Present)</li>
              <p>
                Universitas Islam Kalimantan Muhammad Arsyad Al-Banjari
                (Bachelor&lsquo;s Degree (S1) Informatics Engineering)
              </p>
            </ul>
          </Col>
        </Row>

        <Row className="my-3">
          <Col className="d-flex justify-content-start">
            <HoverScaleWrapper>
              <Button variant="dark" size="lg" onClick={() => navigate("/")}>
                &larr; Back
              </Button>
            </HoverScaleWrapper>
          </Col>

          <Col className="d-flex justify-content-end">
            <HoverScaleWrapper>
              <Button
                variant="dark"
                size="lg"
                onClick={() => navigate("/certificates")}
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

export default ResumeSection;
