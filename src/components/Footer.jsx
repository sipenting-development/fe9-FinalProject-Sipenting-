import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

function Footer(params) {
  return (
    <>
      <footer className="footercolo px-md-0 px-3">
        <Container>
          <Row className="pt-5 pb-5 d-flex justify-content-around">
            <Col md={4} lg={4}>
              <img src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201273/Assets/white-logo_oh7nw5.png" className="flogo" width={"180"} alt="" />
              <p className="fslogan fw-medium text-white mt-4 fs-6">
                Cegah stunting itu penting <br /> bersama <span className="dev">SIPENTING</span>. <br />
                <span className="dev">#SayNoToStunting</span>
              </p>
              <div className="ficon d-flex justify-content-start">
                <img src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201270/Assets/Facebook_u6ren2.png" width={"60"} alt="" />
                <img src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201272/Assets/Twitter_n5xxvy.png" width={"60"} alt="" />
                <img src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201271/Assets/Instagram_leicpi.png" width={"60"} alt="" />
              </div>
            </Col>
            <Col md={4} lg={3} className="mt-4 mt-md-0 ffotermenu">
              <div>
                <h5 className="text-white fw-bold fs-5">Halaman Menu</h5>
                <div className="mt-3 fw-medium text-white">
                  <a className="d-block text-white mb-3 text-decoration-none fs-6" href="/">
                    Beranda
                  </a>
                  <a className="d-block text-white mb-3 text-decoration-none fs-6" href="/">
                    Cek IMT
                  </a>
                  <a className="d-block text-white mb-3 text-decoration-none fs-6" href="/">
                    Layanan Kami
                  </a>
                  <a className="d-block text-white mb-3 text-decoration-none fs-6" href="/">
                    Daftar
                  </a>
                  <a className="d-block text-white mb-3 text-decoration-none fs-6" href="/">
                    Masuk
                  </a>
                </div>
              </div>
            </Col>
            <Col md={4} lg={2} className="mt-4 mt-md-0">
              <div>
                <h5 className="text-white fw-bold fs-5">Layanan</h5>
                <div className="mt-3 fw-medium text-white">
                  <a className="d-block text-white mb-3 text-decoration-none fs-6" href="/">
                    Konsultasi
                  </a>
                  <a className="d-block text-white mb-3 text-decoration-none fs-6" href="/">
                    Cek IMT
                  </a>
                  <a className="d-block text-white mb-3 text-decoration-none fs-6" href="/">
                    Artikel
                  </a>
                </div>
              </div>
            </Col>
            <Col md={4} lg={3} className="mt-4 mt-md-0">
              <div>
                <h5 className="text-white fw-bold fs-5">Kontak Kami</h5>
                <div className="mt-3 fw-medium text-white">
                  <img src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201270/Assets/email_asuufb.png" alt="" />
                  <span>
                    <a className="d-inline-flex ps-2 text-white mb-3 text-decoration-none fs-6" href="/#email">
                      halo@sipenting.net
                    </a>
                  </span>
                  <br />
                  <img src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201273/Assets/telp_e9see9.png" alt="" />
                  <span>
                    <a className="d-inline-flex ps-2 text-white mb-3 text-decoration-none fs-6" href="/#cs">
                      +6289955000233 (cs)
                    </a>
                  </span>
                  <br />
                  <img src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201271/Assets/location_emsdtc.png" alt="" />
                  <span>
                    <a className="d-inline-flex ps-2 text-white mb-3 text-decoration-none fs-6" href="/#location">
                      Jl. Bahagia No. 20 B, Bandung, <br /> Jawa Barat 40238
                    </a>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
          <hr />
          <Row className="mt-4 pb-4 d-flex justify-content">
            <Col lg={4} className="fcopyright fs-6 fw-medium text-white">
              © 2023 <span className="dev">SIPENTING Teams</span> All rights reserved
            </Col>
            <Col lg={2} className="fsyarat fs-6 fw-medium text-white">
              Syarat & Ketentuan
            </Col>
            <Col lg={2} className="fkebijakan fs-6 fw-medium text-white">
              Kebijakan Privasi
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
