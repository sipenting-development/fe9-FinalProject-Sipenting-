import React, { useContext } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { BmiContext } from "../context/BmiContex";
import "./form.css";

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
      <h3 className="fw-bold mt-7 mb-4 fs-1 text-center ">Masukkan Data Index IMT Anda</h3>
      <Form onSubmit={handleSubmit} className="text-start fw-bold">
        <Row className="mt-4">
          <Col md={6}>
            <Form.Group>
              <Form.Label className="p-2 fs-5 fw-1">Nama Lengkap</Form.Label>
              <Form.Control className="rounded-5" type="text" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Masukkan Nama" required />
            </Form.Group>
            <Form.Group>
              <Form.Label className="p-2 fs-5">Pilih Jenis Kelamin</Form.Label>
              <Form.Select className="rounded-5" value={jk} onChange={(e) => setJk(e.target.value)} required>
                <option value="">Jenis Kelamin :</option>
                <option value="male">Laki-laki</option>
                <option value="female">Perempuan</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label className="p-2 fs-5">Berat Badan (kg)</Form.Label>
              <Form.Control className="rounded-5" type="number" value={bb} onChange={(e) => setBb(e.target.value)} placeholder="Masukkan Berat Badan" required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="p-2 fs-5">Tanggal Lahir</Form.Label>
              <Form.Control className="rounded-5" type="date" value={tl} onChange={(e) => setTl(e.target.value)} required />
            </Form.Group>
            <Form.Group>
              <Form.Label className="p-2 fs-5">Umur (tahun)</Form.Label>
              <Form.Control className="rounded-5" type="number" value={umur} onChange={(e) => setUmur(e.target.value)} placeholder="Masukkan Umur" required />
            </Form.Group>
            <Form.Group>
              <Form.Label className="p-2 fs-5">Tinggi Badan (cm)</Form.Label>
              <Form.Control className="rounded-5" type="number" value={tinggi} onChange={(e) => setTinggi(e.target.value)} placeholder="Masukkan Tinggi" required />
            </Form.Group>
          </Col>
        </Row>
        <div className="mt-4 text-sm-center mb-5 mt-5">
          <Button type="submit" className="btn-custom btclor py-2 px-5 rounded-5 fs-6" id="cekstunting1" style={{ backgroundColor: "#54bca4" }}>
            Mulai Cek
          </Button>
        </div>
      </Form>

      {hasil && (
        <Alert variant="success" className="mt-4">
          <p>Nama: {nama}</p>
          <p>Umur: {umur}</p>
          <p>Berat Badan: {bb}</p>
          <p>Tinggi Badan: {tinggi}</p>
          <p>Hasil: {hasil}</p>
          <Button variant="danger" className="mt-3" onClick={handleReset}>
            Reset
          </Button>
        </Alert>
      )}
    </Container>
  );
};

export default BmiCalculator;
