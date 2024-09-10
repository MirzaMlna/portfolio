import AppSection from "../../../components/AppSection";
import HoverScaleWrapper from "../../../components/motionWrappers/HoverScaleWrapper";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const GallerySection = () => {
  const navigate = useNavigate();
  return (
    <AppSection id="GallerySection" icon="bi-image" title="Gallery">
      <div className="vh-100">
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
      </div>
    </AppSection>
  );
};

export default GallerySection;
