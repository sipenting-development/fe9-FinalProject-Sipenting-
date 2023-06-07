import { Container, Row, Col } from "react-bootstrap";
import "./herocekonsul.css";

const HeroCekKonsul = ({ img, title, descrip }) => {
  return (
    <Container className="mt-5 text-center text-lg-start">
      <Row className="align-items-center my-5 mt-5">
        <Col lg={6} className="pt-5 text-center">
          <img className="rounded mb-4 mb-lg-0 consultation-main-image img-fluid" src={img} alt="..." />
        </Col>
        <Col lg={6} className="mt-lg-0 mt-4 text-left titledes">
          <h2 className="fw-bold mb-3  ">
            {" "}
            Yuk Pilih <span className="singkatan ">{title}</span>{" "}
          </h2>
          <p>{descrip}</p>
        </Col>
      </Row>
      <hr className="bg-white mt-sm-5 pt-sm-5" />
    </Container>
  );
};

export default HeroCekKonsul;
