/* eslint-disable react/no-unescaped-entities */
import Nav from "react-bootstrap/Nav";
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
    <Navbar expand="lg" className="navbar " data-bs-theme="dark" fixed="top">
      <Navbar.Brand className="navbar-header">
        Matthew William Rowley
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="navbarScroll"
        className="justify-content-end"
      />
      <Navbar.Collapse id="navbarScroll" className="justify-content-end">
        <Nav className="nav-links">
          <Nav.Link href="#home" onClick={() => nav("/")}>
            Home
          </Nav.Link>
          <Nav.Link
            id="basic-nav-dropdown"
            href="#projects"
            onClick={() => nav("/projects")}
          >
            Projects
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav style={{ color: "#fff" }}></Nav>
    </Navbar>
  );
}
