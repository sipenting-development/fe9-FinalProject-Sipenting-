import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./navbarsipenting.css";

// function Navbar(params) {
//   return (
//     <>

function NavbarSipenting() {
  return (
    <Navbar bg="light" variant="light" expand="lg" fixed="top" className="nav shadow-sm">
      <Container>
        <Navbar.Brand href="#logo">
          <img src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201272/Assets/navbar_bfjxem.png" alt="" width="150" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="reponsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav-item navbar-nav ms-auto justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#" className="nav-link active pe-5" aria-current="page" style={{ color: "#54BCA4", fontWeight: "bold" }}>
              Beranda
            </Nav.Link>
            <Nav.Link href="#" className="nav-link pe-5">
              Layanan Kami
            </Nav.Link>
            <Nav.Link href="#" className="nav-link pe-5">
              Cek IMT
            </Nav.Link>
            <Nav.Link href="#" className="nav-link pe-5">
              Artikel
            </Nav.Link>
          </Nav>
          <Button variant="outline-success me-4" className="btndaftar">
            Daftar
          </Button>
          <Button variant="outline-success" className="btnmasuk">
            Masuk
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSipenting;

{
  /* <section className="nav0">
      <nav className="navbar-expand-lg bg-white fixed-top shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201272/Assets/navbar_bfjxem.png" alt="" width="150" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <img src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201272/Assets/navbar_bfjxem.png" alt="" width="150" />
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" style={{ color: '#54BCA4', fontWeight: 'bold' }} href="#">Beranda</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Layanan Kami</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Cek IMT</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Artikel</a>
                </li>
              </ul>
              <a href="#" className="btn btndaftar me-3">Daftar</a>
              <a href="#" className="btn btnmasuk">Masuk</a>
            </div>
          </div>
        </div>
      </nav>
    </section> */
}
{
  /* </>
  );
}

export default Navbar; */
}
