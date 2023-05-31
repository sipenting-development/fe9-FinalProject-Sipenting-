import { Container, Row, Col } from "react-bootstrap";
import "./herocekonsul.css";

const HeroCekKonsul = ({ img, title, descrip }) => {
  return (
    <Container>
      <Row className="align-items-center my-5 mt-5">
        <Col lg={7} className="pt-5 text-center">
          <img className="rounded mb-4 mb-lg-0 consultation-main-image img-fluid" src={img} alt="..." />
        </Col>
        <Col lg={5} className="mt-lg-0 mt-4 text-left    titledes">
          <h2 className="fw-bold mb-3  ">
            {" "}
            Yuk Pilih <span className="singkatan ">{title}</span>{" "}
          </h2>
          <p>{descrip}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroCekKonsul;
