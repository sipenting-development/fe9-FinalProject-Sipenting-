import { Stack } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import NavbarSipenting from "../components/Navbar";
import CardArtikel from "../components/CardArtikel";
import Footer from "../components/Footer";
import "../components/Artikel.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Artikel(params) {
  const [Artikel, setArtikel] = useState(null);

  useEffect(() => {
    fetchArtikel();
  }, []);
  console.log(Artikel);
  const fetchArtikel = () => {
    fetch("https://64539f69c18adbbdfea29dd5.mockapi.io/artikel/1")
      .then((response) => response.json())
      .then((data) => setArtikel(data))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div>
        <Stack gap={3}>
          <NavbarSipenting />
          {Artikel && (
            <div className="hero-artikel mt-5">
              <Container>
                <Row className="align-items-center">
                  <Col lg={4} className="py-lg-5 hero-artikel-content">
                    <div className="py-5">
                      <h5 className="text-lg-start fw-bold text-warna fs-4">
                        {Artikel.jenisArtikel}
                      </h5>
                      <h1 className="text-lg-start main-title judul-list-artikel">
                        {Artikel.judulArtikel}
                      </h1>
                      <p className="text-lg-start main-content fw-light hero-artikel-deskripsi fs-4 fw-normal">
                        {Artikel.rangkuman}
                      </p>
                      <Link
                      to={`/artikel/${Artikel.id}`}
                      style={{ textDecoration: "none" }}
                      className="text-warna fw-semibold fs-4"
                      >
                        Selengkapnya
                      </Link>
                    </div>
                  </Col>
                  <Col lg={8} className="hero-artikel-image">
                    <div className="text-center text-lg-center mt-5">
                      <img
                        src={Artikel.gambar}
                        className="hero-img img-fluid"
                        alt="Hero"
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          )}
          <Container className="artikel mt-5">
            <Row>
              <Col>
                <div className="text-center">
                  <h1 className="fw-bold">Artikel Terbaru</h1>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="artikel-list my-3">
                <CardArtikel />
              </Col>
            </Row>
          </Container>
          <Footer />
        </Stack>
      </div>
    </>
  );
}
export default Artikel;
