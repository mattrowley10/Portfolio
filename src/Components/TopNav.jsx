/* eslint-disable react/no-unescaped-entities */
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export default function TopNav() {
  const nav = useNavigate();
  useEffect(() => {
    function resetTop() {
      if (nav) {
        window.scrollTo(0, 0);
      }
    }
    return resetTop();
  }, [nav]);
  return (
    <Navbar expand="lg" className="navbar" data-bs-theme="dark" fixed="top">
      <Container fluid>
        <Navbar.Brand className="navbar-header" onClick={() => nav("/")}>
          Matthew William Rowley
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" onClick={() => nav("/")}>
              Home
            </Nav.Link>
            <Nav.Link href="#projects" onClick={() => nav("/projects")}>
              Projects
            </Nav.Link>
            <Nav.Link href="#resume" onClick={() => nav("/resume")}>
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
