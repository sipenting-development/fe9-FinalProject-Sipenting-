import { Container, Row, Col } from "react-bootstrap";

const HeroCekKon = ({ img, title, descrip }) => {
  return (
    <Container>
      <Row className="align-items-center my-5">
        <Col lg={5} className="pt-5 text-center">
          <img className="rounded mb-4 mb-lg-0 consultation-main-image" src={img} alt="..." />
        </Col>
        <Col lg={7} className="mt-lg-0 mt-4 text-left">
          <h2 className="fw-bold mb-3 ">
            {" "}
            Yuk Pilih <span>{title}</span>{" "}
          </h2>
          <p>{descrip}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroCekKon;
