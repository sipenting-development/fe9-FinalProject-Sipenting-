import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroLanding from "../components/HeroLanding";
import DataStunting from "../components/DataStunting";
import CarouselLayanan from "../components/CarouselLayanan";
import { Container, Col, Row } from "react-bootstrap";
import ArticleList from "../components/ListArtikel";
import DataSection from "../components/DataStunting";

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroLanding />
      <section className="data">
        <Container>
          <div className="data-content py-5">
            <h4 className="text-center sub-title">Data Stunting</h4>
            <h2 className="text-center fw-bold main-title">Balita di Indonesia</h2>
          </div>
          <div className="d-flex justify-content-center gap-5">
            <DataSection img={"https://res.cloudinary.com/damsz0xlx/image/upload/v1683201270/Assets/data1_cl2jy3.png"} title={"24,4 %"} cardText1={"Stunting Balita"} cardText2={"(SSGI, 2021)"} />
            <DataSection img={"https://res.cloudinary.com/damsz0xlx/image/upload/v1683201270/Assets/data2_ficqic.png"} title={"17,7 %"} cardText1={"Stunting Balita"} cardText2={"(SSGI, 2021)"} />
            <DataSection img={"https://res.cloudinary.com/damsz0xlx/image/upload/v1683201270/Assets/data3_kjhtnn.png"} title={"24,4 %"} cardText1={"Stunting Balita"} cardText2={"(SSGI, 2021)"} />
          </div>
        </Container>
      </section>
      <CarouselLayanan />
      <section className="artikel">
        <Container className="text-start">
          <h3 className="fw-bold ms-3 mb-4 pt-2 fs-3">Artikel Terkait</h3>
          <Container>
            <Row>
              <ArticleList />
            </Row>
          </Container>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default LandingPage;
