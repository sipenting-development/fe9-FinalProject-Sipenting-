import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function DataSection() {
  return (
    <section className="data">
      <div className="data-content py-5">
        <h4 className="text-center sub-title">Data Stunting</h4>
        <h2 className="text-center fw-bold main-title">Balita di Indonesia</h2>
      </div>
      <Container>
        <Row className="justify-content-center gap-5">
          <Col sm={4} className="text-center mb-3">
            <Card style={{ width: "16rem" }}>
              <Card.Body>
                <Card.Img
                  src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201270/Assets/data1_cl2jy3.png"
                  alt=""
                  width="64px"
                />
                <Card.Title className="fw-bold">24.4 %</Card.Title>
                <Card.Text>Stunting Balita</Card.Text>
                <Card.Text>(SSGI, 2021)</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4} className="text-center mb-3">
            <Card style={{ width: "16rem" }}>
              <Card.Body>
                <Card.Img
                  src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201270/Assets/data2_ficqic.png"
                  alt=""
                  width="64px"
                />
                <Card.Title className="fw-bold">7.1 %</Card.Title>
                <Card.Text>Wasting Balita</Card.Text>
                <Card.Text>(SSGI, 2021)</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4} className="text-center mb-3">
            <Card style={{ width: "16rem" }}>
              <Card.Body>
                <Card.Img
                  src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201270/Assets/data3_kjhtnn.png"
                  alt=""
                  width="64px"
                />
                <Card.Title className="fw-bold">17.7 %</Card.Title>
                <Card.Text>Underweight</Card.Text>
                <Card.Text>(SSGI, 2021)</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default DataSection;
