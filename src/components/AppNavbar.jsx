import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import HoverScaleWrapper from "./motionWrappers/HoverScaleWrapper";

const AppNavbar = () => {
  const navigate = useNavigate();
  const homePage = () => navigate("/");
  const resumePage = () => navigate("/resume");
  const certificatesPage = () => navigate("/certificates");
  const galleryPage = () => navigate("/gallery");
  const projectsPage = () => navigate("/projects");

  return (
    <Navbar
      expand="lg"
      className="sticky-top bg-mirza-primary"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand className="fw-bold">Muhammad Mirza Maulana</Navbar.Brand>
        <Navbar.Toggle aria-controls="appNavbar" />
        <Navbar.Collapse id="appNavbar">
          <Nav className="mx-auto">
            <HoverScaleWrapper>
              <Nav.Link active onClick={homePage}>
                Home
              </Nav.Link>
            </HoverScaleWrapper>
            <HoverScaleWrapper>
              <Nav.Link active onClick={resumePage}>
                Resume
              </Nav.Link>
            </HoverScaleWrapper>
            <HoverScaleWrapper>
              <Nav.Link active onClick={certificatesPage}>
                Certificates
              </Nav.Link>
            </HoverScaleWrapper>
            <HoverScaleWrapper>
              <Nav.Link active onClick={galleryPage}>
                Gallery
              </Nav.Link>
            </HoverScaleWrapper>
            <HoverScaleWrapper>
              <Nav.Link active onClick={projectsPage}>
                My Projects
              </Nav.Link>
            </HoverScaleWrapper>
          </Nav>
          <Nav className="ms-auto">
            <NavDropdown active title="Social Media" id="appNavSocialDropdown">
              <NavDropdown.Item>
                <i className="bi bi-instagram"></i> Instagram
              </NavDropdown.Item>
              <NavDropdown.Item>
                <i className="bi bi-tiktok"></i> Tiktok
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
