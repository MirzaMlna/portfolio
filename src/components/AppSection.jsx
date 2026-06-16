import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

const AppSection = ({
  id = "null",
  icon = "bi-question-circle-fill",
  title = "Section",
  children,
}) => {
  return (
    <section id={id} className="page-section">
      <Container>
        <div className="page-hero-heading text-center mb-5">
          <p className="section-eyebrow">
            <i className={`bi ${icon} me-2`}></i>Portfolio Mirza
          </p>
          <h1 className="section-heading">{title}</h1>
        </div>
        {children}
      </Container>
    </section>
  );
};

AppSection.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default AppSection;
