import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const navItems = [
  ["#home", "Beranda"],
  ["#resume", "Resume"],
  ["#certificates", "Sertifikat"],
  ["#gallery", "Galeri"],
];

const AppNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const closeMenu = () => setExpanded(false);

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={setExpanded}
      className="app-navbar"
    >
      <Container>
        <Navbar.Brand href="#home" onClick={closeMenu}>
          Mirza<span className="brand-accent">folio.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="appNavbar" />
        <Navbar.Collapse id="appNavbar">
          <Nav className="ms-auto me-lg-4 gap-lg-3">
            {navItems.map(([href, label]) => (
              <Nav.Link href={href} onClick={closeMenu} key={href}>
                {label}
              </Nav.Link>
            ))}
          </Nav>
          <a className="navbar-contact" href="#contact" onClick={closeMenu}>
            Hubungi Saya
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
