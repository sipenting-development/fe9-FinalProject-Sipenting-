import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./navbarsipenting.css";

function NavbarSipenting() {
  return (
    <Navbar bg="white" expand="lg" fixed="top" className="nav shadow-sm">
      <Container>
        <Navbar.Brand href="#logo">
          <img
            src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201272/Assets/navbar_bfjxem.png"
            alt=""
            width="150"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="reponsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav-item navbar-nav ms-auto justify-content-end flex-grow-1 pe-3">
            <Nav.Link
              to="/"
              className="nav-link active pe-5"
              aria-current="page"
              style={{ color: "#54BCA4", fontWeight: "bold" }}
            >
              Beranda
            </Nav.Link>
            <Nav.Link to="/" className="nav-link pe-5">
              Layanan Kami
            </Nav.Link>
            <Nav.Link to="/" className="nav-link pe-5">
              Cek IMT
            </Nav.Link>
            <Nav.Link to="/" className="nav-link pe-5">
              Artikel
            </Nav.Link>
          </Nav>
          <Button variant="outline-success me-4" className="btndaftar">Daftar</Button>
          <Button variant="outline-success" className="btnmasuk">Masuk</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSipenting;
