import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroLanding from "../components/HeroLanding";
import DataStunting from "../components/DataStunting";
import CarouselLayanan from "../components/CarouselLayanan";
import { Container, Col, Row } from "react-bootstrap";
import ArticleList from "../components/ListArtikel";

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroLanding />
      <DataStunting />
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
