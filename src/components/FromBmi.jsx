import React, { useContext } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { BmiContext } from "../context/BmiContex";
import "./Form.css";

const BmiCalculator = () => {
  const { nama, setNama, jk, setJk, bb, setBb, tl, setTl, umur, setUmur, tinggi, setTinggi, hasil, calculateBmi, clearData } = useContext(BmiContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBmi();
  };

  const handleReset = () => {
    clearData();
  };

  return (
    <Container className="mt-5  form">
      <h2 className="fw-bold mb-4 fs-3 text-center " style={{color:"#3a3c3b"}}>Masukkan Data Index Cek Gizi</h2>
      <Form onSubmit={handleSubmit} className="text-start fw-bold">
        <Row className="mt-5">
          <Col md={6}>
            <Form.Group>
              <Form.Label className="p-2 fs-6 fw-semibold fw-1">Nama Lengkap</Form.Label>
              <Form.Control className="rounded-5" type="text" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Masukkan Nama" required />
            </Form.Group>
            <Form.Group>
              <Form.Label className="p-2 fs-6 fw-semibold">Pilih Jenis Kelamin</Form.Label>
              <Form.Select className="rounded-5" value={jk} onChange={(e) => setJk(e.target.value)} required>
                <option value="">Jenis Kelamin :</option>
                <option value="laki-laki">Laki-laki</option>
                <option value="perempuan">Perempuan</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label className="p-2 fs-6 fw-semibold">Berat Badan (kg)</Form.Label>
              <Form.Control className="rounded-5" type="number" value={bb} onChange={(e) => setBb(e.target.value)} placeholder="Masukkan Berat Badan" required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="p-2 fs-6 fw-semibold">Tanggal Lahir</Form.Label>
              <Form.Control className="rounded-5" type="date" value={tl} onChange={(e) => setTl(e.target.value)} required />
            </Form.Group>
            <Form.Group>
              <Form.Label className="p-2 fs-6 fw-semibold">Umur (bulan)</Form.Label>
              <Form.Control className="rounded-5" type="number" value={umur} onChange={(e) => setUmur(e.target.value)} placeholder="Masukkan Umur" required />
            </Form.Group>
            <Form.Group>
              <Form.Label className="p-2 fs-6 fw-semibold">Tinggi Badan (cm)</Form.Label>
              <Form.Control className="rounded-5" type="number" value={tinggi} onChange={(e) => setTinggi(e.target.value)} placeholder="Masukkan Tinggi" required />
            </Form.Group>
          </Col>
        </Row>
        <div className="mt-4 text-center text-lg-center mb-5 mt-5">
          <Button type="submit" className="btn-custom btclor py-2 px-5 rounded-5 fs-6 fw-semibold" id="cekstunting1" style={{ backgroundColor: "#54bca4", borderColor: "white" }}>
            Mulai Cek
          </Button>
        </div>
      </Form>

      {hasil && (
        <Alert variant="success" className="mt-4  ">
          <div className="row ">
            <div className="col-lg-8 offset-lg-2 d-flex align-items-center justify-content-center" style={{color:"#3a3c3b"}}>
              <div className="fw-semibold fs-5 float-start">
                <div className="row">
                  <div className="col-md-7">Nama</div>
                  <div className="col-md-5"> : {nama}</div>
                </div>
                <div className="row">
                  <div className="col-md-7">Umur</div>
                  <div className="col-md-5"> : {umur}</div>
                </div>
                <div className="row">
                  <div className="col-md-7">Berat Badan</div>
                  <div className="col-md-5"> : {bb}</div>
                </div>
                <div className="row">
                  <div className="col-md-7">Tinggi Badan</div>
                  <div className="col-md-5"> : {tinggi}</div>
                </div>
                <div className="row">
                  <div className="col-md-7">jenis kelamin</div>
                  <div className="col-md-5"> : {jk}</div>
                </div>
                <div className="row">
                  <div className="col-md-7">Hasil </div>
                  <div className="col-md-5"> : {hasil}</div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 offset-lg-2 text-center">
              <Button variant="danger" className="btn-custom btclor mt-3 py-2 px-5 rounded-5 fs-6 fw-semibold" onClick={handleReset}>
                Mulai Lagi
              </Button>
            </div>
          </div>
        </Alert>
      )}
    </Container>
  );
};

export default BmiCalculator;
