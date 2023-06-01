import { BmiProvider } from "../context/BmiContex";
import BmiCalculator from "../components/FromBmi";
import Footer from "../components/Footer";
import HeroCekKonsul from "../components/HeroCekKonsul";
import NavbarSipenting from "../components/Navbar";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

function CekImt(params) {
  return (
    <>
      <div>
        <Stack gap={3}>
          <NavbarSipenting />
          <HeroCekKonsul
            img={"https://res.cloudinary.com/damsz0xlx/image/upload/v1683201271/Assets/cekstunting_sxkcbq.png"}
            title={"Cek Status Gizi !"}
            descrip={"Pantau pertumbuhan dan perkembangan anak Anda secara berkala. Untuk mengetahui seberapa sehat anak Anda. Cek kondisi anak Anda bisa menggunakan layanan kami. "}
          />

          <BmiProvider>
            <BmiCalculator />
          </BmiProvider>

          <Container className="text-center text-lg-start mt-3 mt-md-5 ">
            <h3 className="fw-bold ms-3 mt-7 mb-4 pt-5 fs-3">Layanan Konsultasi</h3>
            <Row className="mt-2 ps-2 mb-5 d-lg-flex justify-content-between d-flex align-items-center">
              <Col sm={8}>
                <p className="ms-2 fs-6">Dapatkan konsultasi medis anak yang cepat dan mudah dari konselor kami yang berpengalaman. Konsultasi medis anak yang nyaman dan aman dari rumah Anda sendiri</p>
              </Col>
              <Col lg={3} className="p-4">
                <a href="#" className="btn rounded-5 px-4 py-2 text-sm-center fs-6 text-white fw-semibold" style={{ backgroundColor: "#54bca4" }}>
                  Konseling Sekarang
                </a>
              </Col>
            </Row>
          </Container>

          <Footer />
        </Stack>
      </div>
    </>
  );
}
export default CekImt;
