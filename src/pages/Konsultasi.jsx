import DaftarKonselor from "../components/DaftarKonselor";
import { Container, Row, Col, Alert } from "react-bootstrap";
import HeroCekKon from "../components/HeroCekKonsul";
import Stack from "react-bootstrap/Stack";
import NavbarSipenting from "../components/Navbar";
import Footer from "../components/Footer";
import { UserContext } from "../context/UserContex";
import { useContext } from "react";

function Konsultasi() {
  const { isConsulted, handleConsult } = useContext(UserContext);
  return (
    <>
      <div>
        <Stack gap={3}>
          <NavbarSipenting />
          <HeroCekKon
            img={"https://res.cloudinary.com/damsz0xlx/image/upload/v1685717659/Assets/konsultasi_h27iqj.png"}
            coba={"Yuk Pilih"}
            title={"Teman Konsultasi !"}
            descrip={"Dapatkan konsultasi medis anak yang cepat dan mudah dari dokter kami yang berpengalaman. Konsultasi medis anak yang nyaman dan aman dari rumah Anda sendiri. "}
          />
          
          
          <div className="container">
          <Alert className="py-1 text-center konsul" variant="danger" style={{marginBottom:"50px"}}>
            Karena masih dalam tahap pengembangan, maka fitur konseling masih digratiskan.
          </Alert>
          </div>
          

          <div className="container mb-5">
            <div className="d-flex justify-content-between mb-5 conselor-sections">
              <div className="mx-auto">
                <h2 className="fw-bold ms-3 mb-4 pt-2 text-center" style={{color:"#3a3c3b"}}>Daftar Konselor Kami</h2>
              </div>
            </div>

            <Container>
              <Row className="ms-5">
                <Col lg={6} className="mb-5">
                  <DaftarKonselor
                    img={"https://res.cloudinary.com/damsz0xlx/image/upload/v1685717664/Assets/ka_vt5udy.png"}
                    nama={"Endang Susiana, Sp.A."}
                    pengalaman={"5+ tahun pengalaman"}
                    ratings={["yellow", "yellow", "yellow", "#F0F0F0", "#F0F0F0"]}
                    consultState={isConsulted}
                  />
                </Col>
                <Col lg={6} className="mb-5">
                  <DaftarKonselor
                    img={"https://res.cloudinary.com/damsz0xlx/image/upload/v1685717663/Assets/kb_o0r2j8.png"}
                    nama={"Hotman Aruan, Sp.A."}
                    pengalaman={"2+ tahun pengalaman"}
                    ratings={["yellow", "yellow", "yellow", "yellow", "#F0F0F0"]}
                    consultState={isConsulted}
                  />
                </Col>
                <Col lg={6} className="mb-5">
                  <DaftarKonselor
                    img={"https://res.cloudinary.com/damsz0xlx/image/upload/v1685717660/Assets/kc_mcgein.png"}
                    nama={"Takasiani Antika, Sp.A."}
                    pengalaman={"3+ tahun pengalaman"}
                    ratings={["yellow", "yellow", "yellow", "yellow", "#F0F0F0"]}
                    consultState={isConsulted}
                  />
                </Col>
                <Col lg={6} className="mb-5">
                  <DaftarKonselor
                    img={"https://res.cloudinary.com/damsz0xlx/image/upload/v1685717662/Assets/kd_ezb491.png"}
                    nama={"Devit Gurinda, Sp.A."}
                    pengalaman={"4+ tahun pengalaman"}
                    ratings={["yellow", "yellow", "yellow", "yellow", "#F0F0F0"]}
                    consultState={isConsulted}
                  />
                </Col>
              </Row>
            </Container>
          </div>
          <Footer />
        </Stack>
      </div>
    </>
  );
}

export default Konsultasi;
