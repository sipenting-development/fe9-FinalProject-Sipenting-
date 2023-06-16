import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginForm = () => {
  const navigate = useNavigate();
  const [isShowpassword, setIsShowpassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    message: "",
    status: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "email" && value.trim() === "") {
      setError({ ...error, message: "Email tidak boleh kosong!", status: true });
    } else if (name === "password" && value.trim() === "") {
      setError({ ...error, message: "Password tidak boleh kosong!", status: true });
    } else if (name === "password" && value.length <= 6) {
      setError({ ...error, message: "Password minimal  6 karakter!", status: true });
    } else {
      setError({ message: "", status: false }); // Clear error messages if the fields are not empty or the password is within the limit
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(error);
    console.log("login", form);

    if (error.status === true) {
      alert(error.message);
    } else {
      try {
        const response = await axios.get("https://64539f69c18adbbdfea29dd5.mockapi.io/user");
        if (response.status === 200) {
          const users = await response.data;
          const user = users.find((u) => u.email === form.email && u.password === form.password);
          if (user) {
            console.log("Login berhasil!");
            localStorage.setItem("user", JSON.stringify(user));
            alert("Login berhasil!");
            navigate("/konsultasi"); // Redirect to the "konsultasi" page
          } else {
            console.log("email atau password salah!");
            alert("email atau password salah!");
          }
        }
      } catch (error) {
        console.error("An error occurred:", error);
        alert("An error occurred. Please try again.");
      }
    }
  };

  const isFormValid = form.email.trim() === "" || form.password.trim() === "";

  return (
    <div className="d-flex flex-column flex-md-row">
      <div className="linear-bg w-100 xl-w-45">
        <div className="d-flex align-items-center vh-100 justify-content-center">
          <img
            src="https://res.cloudinary.com/damsz0xlx/image/upload/v1685717659/Assets/konsultasi_h27iqj.png"
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: 500, maxHeight: 500 }}
          />
        </div>
      </div>
      <div className="bg-white w-100 xl-w-55">
        <div
          className="d-flex justify-content-center px-5"
          style={{
            marginTop: "100px",
          }}
        >
          <div className="justify-content-center" style={{ marginBottom: "100px" }}>
            <h1 style={{ fontWeight: "700", marginTop: "40px", color: "#3a3c3b" }}>Selamat Datang</h1>
            <h1 style={{ fontWeight: "700", color: "#3a3c3b" }}>Kembali di SIPENTING</h1>
            <div className="fw-500" style={{ marginTop: "10px", color: "#3a3c3b", fontSize: "20px" }}>
              Belum memiliki akun?{" "}
              <Link
                to={"/register"}
                style={{
                  color: "#54BCA4",
                  textDecoration: "underline",
                }}
              >
                Daftar
              </Link>
            </div>
            <form onSubmit={onSubmit}>
              <div className="mb-3" style={{ marginTop: "20px" }}>
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label fw-500"
                  style={{ color: "#3a3c3b", fontSize: "16px" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  name="email"
                  onChange={(e) => handleChange(e)}
                  className="form-control rounded-pill"
                  placeholder="Masukkan email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                {error.email && <div className="text-danger mt-2">{error.email}</div>}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label fw-500"
                  style={{ color: "#3a3c3b", fontSize: "16px" }}
                >
                  Password
                </label>
                <div className="input-group">
                  <input
                    type={isShowpassword ? "text" : "password"}
                    className="form-control rounded-pill"
                    value={form.password}
                    name="password"
                    onChange={(e) => handleChange(e)}
                    placeholder="Masukkan password"
                    id="exampleInputPassword1"
                  />
                </div>
                {error.password && <div className="text-danger mt-2">{error.password}</div>}
              </div>
              <button
                style={{
                  marginTop: "20px",
                  fontWeight: "600",
                  backgroundColor: "#54bca4",
                  border: "1px solid #54bca4",
                }}
                disabled={isFormValid}
                className="btn btn-success w-100 rounded-pill"
              >
                Masuk
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
