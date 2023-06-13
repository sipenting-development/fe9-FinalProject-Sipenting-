import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Container, Row, Col, Form, Button, Stack } from "react-bootstrap";

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("https://64539f69c18adbbdfea29dd5.mockapi.io/user");

      if (response.ok) {
        const users = await response.json();
        const user = users.find((u) => u.username === username && u.password === password);

        if (user) {
          login(user);
          console.log("Login berhasil!");
          alert("Login berhasil!");
          navigate("/konsultasi"); // Redirect to the "konsultasi" page
        } else {
          console.log("Username atau password salah!");
          alert("Username atau password salah!");
        }
      } else {
        console.log("Login gagal!");
        alert("Login gagal!");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  return (
    <div>
      <Stack gap={3}>
        <section className="login d-flex flex-column flex-lg-row mt-5 pt-5">
          <Col lg={5} className="login-right h-100 bg-color">
            <div className="d-flex justify-content-center py-5">
              <img src="https://res.cloudinary.com/damsz0xlx/image/upload/v1685717659/Assets/konsultasi_h27iqj.png" alt="" style={{ width: 100, height: 100 }} />
            </div>
          </Col>
          <Col lg={7} className="login-left h-100">
            <Container className="h-100">
              <Row className="justify-content-center align-items-center h-100">
                <Col>
                  <div className="header">
                    <h1>Halo, Carefriends</h1>
                    <p>Login dulu yuk sebelum kamu mengakses Carevul</p>
                  </div>
                  <div className="login-form">
                    <Form>
                      <Form.Group className="mb-3" controlId="username">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                      </Form.Group>
                      <Button variant="primary" onClick={handleLogin}>
                        Login
                      </Button>
                    </Form>
                    <p className="fsize-15 d-block text-center">
                      Kamu belum punya akun?
                      <Link to="/register" style={{ textDecoration: "none" }}>
                        <span className="regis">Daftar Disini</span>
                      </Link>
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </section>
      </Stack>
    </div>
  );
};

export default LoginForm;