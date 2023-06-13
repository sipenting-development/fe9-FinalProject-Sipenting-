import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [isShowpassword, setIsShowpassword] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (name === "email" && value.trim() === "") {
      setError({ ...error, email: "Email tidak boleh kosong!" });
    } else if (name === "password" && value.trim() === "") {
      setError({ ...error, password: "Password tidak boleh kosong!" });
    } else if (name === "username" && value.trim() === "") {
      setError({ ...error, username: "Username tidak boleh kosong!" });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("login", form);
    try {
      const response = await axios.post("https://64539f69c18adbbdfea29dd5.mockapi.io/user");
      alert("Register berhasil!");
      navigate("/login"); // Redirect to the "konsultasi" page
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="d-flex flex-md-row flex-column">
      <div className="linear-bg w-0 xl-w-45">
        <div className="d-flex align-items-center vh-100 justify-content-center">
          <img
            src="https://res.cloudinary.com/damsz0xlx/image/upload/v1685717659/Assets/konsultasi_h27iqj.png"
            alt=""
            style={{ width: 500, height: 500 }}
          />
        </div>
      </div>
      <div className="bg-white w-0 xl-w-65">
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
            <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputUsename" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  value={form.username}
                  name="username"
                  onChange={(e) => handleChange(e)}
                  className="form-control rounded-pill"
                  placeholder="Input your Username"
                  id="exampleInputUsername"
                  aria-describedby="emailHelp"
                />
                {error.username && <div className="text-danger mt-2">{error.username}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  name="email"
                  onChange={(e) => handleChange(e)}
                  className="form-control rounded-pill"
                  placeholder="Input your Email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                {error.email && <div className="text-danger mt-2">{error.email}</div>}
              </div>
              <div className="input-group mb-3 d-flex">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Password
                </label>
                <div className="input-group mb-3">
                  <input
                    type={isShowpassword ? "text" : "password"}
                    className="form-control rounded"
                    value={form.password}
                    name="password"
                    onChange={(e) => handleChange(e)}
                    placeholder="Input Password"
                    aria-label="Recipient's email"
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
                {error.password && <div className="text-danger mt-2">{error.password}</div>}
              </div>
              <button disabled = {form.username.length < 0} className="btn btn-success w-100 rounded-pill">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

//   const { login } = useContext(AuthContext);
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleRegister = async () => {
//     try {
//       const response = await fetch("https://64539f69c18adbbdfea29dd5.mockapi.io/user", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           username,
//           email,
//           password,
//         }),
//       });

//       if (response.ok) {
//         const newUser = await response.json();
//         login(newUser);
//         console.log("Registrasi berhasil!");
//         alert("Registrasi berhasil!");
//       } else {
//         console.log("Registrasi gagal!");
//         alert("Registrasi gagal!");
//       }
//     } catch (error) {
//       console.error("Terjadi kesalahan:", error);
//       alert("Terjadi kesalahan. Silakan coba lagi.");
//     }
//   };

//   return (
//     <Container>
//       <Stack gap={3}>
//         <Row className=" d-flex flex-column flex-lg-row mt-5 pt-5">
//           <Col lg={5} className="d-flex justify-content-center align-items-center">
//             <img src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201273/Assets/hero_e6ssza.png" alt="Register" style={{ width: "100%", maxWidth: 400 }} />
//           </Col>
//           <Col lg={7}>
//             <h2>Register</h2>
//             <Form>
//               <Form.Group className="mb-3" controlId="username">
//                 <Form.Label>Username:</Form.Label>
//                 <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//               </Form.Group>
//               <Form.Group className="mb-3" controlId="email">
//                 <Form.Label>Email:</Form.Label>
//                 <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//               </Form.Group>
//               <Form.Group className="mb-3" controlId="password">
//                 <Form.Label>Password:</Form.Label>
//                 <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//               </Form.Group>
//               <Button variant="primary" type="button" onClick={handleRegister}>
//                 Register
//               </Button>
//             </Form>
//           </Col>
//         </Row>
//       </Stack>
//     </Container>
//   );
// };

export default RegisterForm;
