import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

const texts = ["Front End Developer", "Freelancer", "Graphic Designer"];
const typingSpeed = 150;
const deletingSpeed = 100;
const pauseBetweenWords = 1000;

const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[currentTextIndex];

      if (!isDeleting && currentCharIndex < currentText.length) {
        // Typing characters
        setCurrentCharIndex((prev) => prev + 1);
        timeoutRef.current = setTimeout(handleTyping, typingSpeed);
      } else if (isDeleting && currentCharIndex > 0) {
        // Deleting characters
        setCurrentCharIndex((prev) => prev - 1);
        timeoutRef.current = setTimeout(handleTyping, deletingSpeed);
      } else if (!isDeleting && currentCharIndex === currentText.length) {
        // Finished typing, pause before deleting
        timeoutRef.current = setTimeout(
          () => setIsDeleting(true),
          pauseBetweenWords
        );
      } else if (isDeleting && currentCharIndex === 0) {
        // Finished deleting, move to the next text
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    // Start the typing effect
    timeoutRef.current = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    // Cleanup the timeout on unmount to avoid memory leaks
    return () => clearTimeout(timeoutRef.current);
  }, [currentCharIndex, isDeleting, currentTextIndex]);

  return (
    <section
      id="HeroSection"
      className="vh-100 hero-bg d-flex align-items-center justify-content-center shadow mb-5 home-section"
    >
      <Container>
        <Row className="w-100">
          <Col
            md={6}
            className="d-flex flex-column align-items-center justify-content-center text-center"
          >
            <div className="display-6 text-light fw-bold">
              Muhammad Mirza Maulana
            </div>
            <br />
            <div className="text-light fs-3 fw-light">
              <span id="typewriter" className="font-monospace">
                {texts[currentTextIndex].substring(0, currentCharIndex)}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
