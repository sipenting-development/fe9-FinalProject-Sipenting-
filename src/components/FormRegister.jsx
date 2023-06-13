import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Container, Form, Button, Row, Col, Stack } from "react-bootstrap";

const RegisterForm = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await fetch("https://64539f69c18adbbdfea29dd5.mockapi.io/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      if (response.ok) {
        const newUser = await response.json();
        login(newUser);
        console.log("Registrasi berhasil!");
        alert("Registrasi berhasil!");
      } else {
        console.log("Registrasi gagal!");
        alert("Registrasi gagal!");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  return (
    <Container>
      <Stack gap={3}>
        <Row className=" d-flex flex-column flex-lg-row mt-5 pt-5">
          <Col lg={5} className="d-flex justify-content-center align-items-center">
            <img src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201273/Assets/hero_e6ssza.png" alt="Register" style={{ width: "100%", maxWidth: 400 }} />
          </Col>
          <Col lg={7}>
            <h2>Register</h2>
            <Form>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>
              <Button variant="primary" type="button" onClick={handleRegister}>
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </Stack>
    </Container>
  );
};

export default RegisterForm;