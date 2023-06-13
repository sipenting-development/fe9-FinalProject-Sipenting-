import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Container, Row, Col, Form, Button, Stack } from "react-bootstrap";

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isShowpassword, setIsShowpassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const checkForm = () => {
    if (username.length > 0) {
      alert("Please Fill Eemail");
    } else if (password.length > 0 && password >= 6) {
      alert("Please Fill Password");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("login");
    checkForm();
    try {
      if (username.length > 0) {
        alert("Please Fill Eemail");
      } else if (password.length > 0 && password >= 6) {
        alert("Please Fill Password");
      }
      // const response = await fetch("https://64539f69c18adbbdfea29dd5.mockapi.io/user");
      // if (response.ok) {
      //   const users = await response.json();
      //   const user = users.find((u) => u.username === username && u.password === password);
      //   if (user) {
      //     login(user);
      //     console.log("Login berhasil!");
      //     alert("Login berhasil!");
      //     navigate("/konsultasi"); // Redirect to the "konsultasi" page
      //   } else {
      //     console.log("Username atau password salah!");
      //     alert("Username atau password salah!");
      //   }
      // } else {
      //   console.log("Login gagal!");
      //   alert("Login gagal!");
      // }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  return (
    <div className="d-flex flex-row ">
      <div className="linear-bg w-45">
        <div className="d-flex align-items-center vh-100 justify-content-center">
          <img
            src="https://res.cloudinary.com/damsz0xlx/image/upload/v1685717659/Assets/konsultasi_h27iqj.png"
            alt=""
            style={{ width: 500, height: 500 }}
          />
        </div>
      </div>
      <div className="bg-white w-65">
        <div
          className="d-flex justify-content-center px-5"
          style={{
            marginTop: "100px",
          }}
        >
          <div className="justify-content-center">
            <h1>Selamat Datang</h1>
            <h1>Kembali di SIPENTING</h1>
            <div className="fw-500">
              Belum memiliki akun?{" "}
              <Link
                to={"/register"}
                style={{
                  color: "#54BCA4",
                  textDecoration: "none",
                }}
              >
                Daftar
              </Link>
            </div>
            <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control rounded-pill"
                  placeholder="Input your Email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="input-group mb-3 d-flex">
                <label for="exampleInputEmail1" className="form-label">
                  Password
                </label>
                <div className="input-group mb-3">
                  <input
                    type={isShowpassword ? "text" : "password"}
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Input Password"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    onClick={() => setIsShowpassword(!isShowpassword)}
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    Icon
                  </button>
                </div>
              </div>
              <button onClick={handleLogin} className="btn btn-success w-100 rounded-pill">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <Stack gap={3}>
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
      </Stack> */}
    </div>
  );
};

export default LoginForm;
