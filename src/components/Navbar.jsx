
import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink, useLocation, Link } from "react-router-dom";
import "./NavbarSipenting.css";

function NavbarSipenting ()
{
  const location = useLocation();
  const isLogin = localStorage.getItem( "user" );
  const getNavLinkStyle = ( path ) =>
  {
    if ( path === location.pathname )
    {
      return { color: "#54BCA4", fontWeight: "bold" };
    }
    return {};
  };

  return (
    <Navbar bg="white" expand="lg" fixed="top" className="nav shadow-sm">
      <Container>
        <Navbar.Brand href="#logo">
          <img src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201272/Assets/navbar_bfjxem.png" alt="" width="150" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav ms-auto justify-content-end flex-grow-1 pe-3">
            <Nav.Link as={ NavLink } exact={ true.toString() } to="/" className="nav-link active pe-5" style={ getNavLinkStyle( "/" ) }>
              Beranda
            </Nav.Link>
            <Nav.Link as={ NavLink } exact={ true.toString() } to="/konsultasi" className="nav-link pe-5" style={ getNavLinkStyle( "/konsultasi" ) }>
              Konsultasi
            </Nav.Link>
            <Nav.Link as={ NavLink } exact={ true.toString() } to="/cekgizi" className="nav-link pe-5" style={ getNavLinkStyle( "/cekgizi" ) }>
              Cek Gizi
            </Nav.Link>
            <Nav.Link as={ NavLink } exact={ true.toString() } to="/artikel" className="nav-link pe-5" style={ getNavLinkStyle( "/artikel" ) }>
              Artikel
            </Nav.Link>
          </Nav>
          {
            isLogin ? (
              <>
                <Button
                  onClick={
                    () =>
                    {
                      localStorage.removeItem( "user" );
                      window.location.reload();
                    }
                  }
                  variant="outline-success" className="btnmasuk">
                  Log Out
                </Button>
              </> ) : (
              <>
                <Link to={ "/register" }>
                  <Button variant="outline-success me-4" className="btndaftar" style={ getNavLinkStyle( "/artikel" ) }>
                    Daftar
                  </Button>
                </Link>
                <Link to={ "/login" }>
                  <Button variant="outline-success" className="btnmasuk">
                    Masuk
                  </Button>
                </Link>
              </> )
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSipenting;