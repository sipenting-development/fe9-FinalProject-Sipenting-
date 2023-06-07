import React from "react";
import { Container, Card } from "react-bootstrap";
import "./datastunting.css";

function DataSection() {
  return (
    <section className="data">
      <Container>
        <div className="data-content py-5">
          <h4 className="text-center sub-title">Data Stunting</h4>
          <h2 className="text-center fw-bold main-title">Balita di Indonesia</h2>
        </div>
        <div className="d-flex justify-content-center gap-5">
          <Card className="text-center mb-3" style={{ width: '14rem' }}>
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Img
                src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201270/Assets/data1_cl2jy3.png"
                alt=""
                style={{ maxWidth: '100px', maxHeight: '100px' }}
                className="mb-3"
              />
              <Card.Title className="card-title fw-bold fs-4">24,4 %</Card.Title>
              <Card.Text className="card-text">Stunting Balita</Card.Text>
              <Card.Text className="card-text">(SSGI, 2021)</Card.Text>
            </Card.Body>
          </Card>
          <Card className="text-center mb-3" style={{ width: '14rem' }}>
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Img
                src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201270/Assets/data2_ficqic.png"
                alt=""
                style={{ maxWidth: '100px', maxHeight: '100px' }}
                className="mb-3"
              />
              <Card.Title className="card-title fw-bold fs-4">7,1 %</Card.Title>
              <Card.Text className="card-text">Wasting Balita</Card.Text>
              <Card.Text className="card-text">(SSGI, 2021)</Card.Text>
            </Card.Body>
          </Card>
          <Card className="text-center mb-3" style={{ width: '14rem' }}>
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Img
                src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201270/Assets/data3_kjhtnn.png"
                alt=""
                style={{ maxWidth: '100px', maxHeight: '100px' }}
                className="mb-3"
              />
              <Card.Title className="card-title fw-bold fs-4">17,7 %</Card.Title>
              <Card.Text className="card-text">Underweight</Card.Text>
              <Card.Text className="card-text">(SSGI, 2021)</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </section>
  );
}

export default DataSection;

