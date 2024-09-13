import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import HoverScaleWrapper from "./motionWrappers/HoverScaleWrapper";

const AppNavbar = () => {
  const navigate = useNavigate();
  const homePage = () => navigate("/");
  const resumePage = () => navigate("/resume");
  const certificatesPage = () => navigate("/certificates");
  const galleryPage = () => navigate("/gallery");
  // const projectsPage = () => navigate("/projects");

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
                Beranda
              </Nav.Link>
            </HoverScaleWrapper>
            <HoverScaleWrapper>
              <Nav.Link active onClick={resumePage}>
                Resume
              </Nav.Link>
            </HoverScaleWrapper>
            <HoverScaleWrapper>
              <Nav.Link active onClick={certificatesPage}>
                Sertifikat
              </Nav.Link>
            </HoverScaleWrapper>
            <HoverScaleWrapper>
              <Nav.Link active onClick={galleryPage}>
                Galeri
              </Nav.Link>
            </HoverScaleWrapper>
            {/* <HoverScaleWrapper>
              <Nav.Link active onClick={projectsPage}>
                Projek Saya
              </Nav.Link>
            </HoverScaleWrapper> */}
          </Nav>
          <Nav className="ms-auto">
            <NavDropdown active title="Media Sosial" id="appNavSocialDropdown">
              <NavDropdown.Item
                onClick={() =>
                  window.open("https://www.instagram.com/mirza_mlna", "_blank")
                }
              >
                <i className="bi bi-instagram"></i> Instagram
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() =>
                  window.open("https://www.tiktok.com/@maulana.mirza", "_blank")
                }
              >
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
