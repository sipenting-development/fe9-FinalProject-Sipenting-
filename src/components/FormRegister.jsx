import { useContext, useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import axios from "axios";


const RegisterForm = () => {
  const navigate = useNavigate();
  const [isShowPassword, setIsShowPassword] = useState(false);
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
    } else if (name === "password" && value.length > 6) {
      setError({ ...error, password: "Password maksimal 6 karakter!" });
    } else {
      setError({ username: "", email: "", password: "" }); // Clear error messages if the fields are not empty or the password is within the limit
    }
  };

  const togglePasswordVisibility = () => {
    setIsShowPassword(!isShowPassword);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("register", form);

    try {
      // Check if the email or username already exist in the API
      const response = await axios.get("https://64539f69c18adbbdfea29dd5.mockapi.io/user");
      const users = response.data;

      const emailExists = users.some((user) => user.email === form.email);
      const usernameExists = users.some((user) => user.username === form.username);

      if (emailExists) {
        alert("Email sudah terdaftar. Silakan gunakan email lain.");
        return;
      }

      if (usernameExists) {
        alert("Username sudah terdaftar. Silakan gunakan username lain.");
        return;
      }

      // If the email and username are available, proceed with the registration
      await axios.post("https://64539f69c18adbbdfea29dd5.mockapi.io/user", form);
      alert("Register berhasil!");
      navigate("/login"); // Redirect to the "login" page
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="d-flex flex-md-row flex-column">
      <div className="linear-bg w-100 xl-w-45">
        <div className="d-flex align-items-center vh-100 justify-content-center">
          <img src="https://res.cloudinary.com/damsz0xlx/image/upload/v1685717659/Assets/konsultasi_h27iqj.png" alt="" style={{ width: "100%", height: "auto", maxWidth: 500, maxHeight: 500 }} />
        </div>
      </div>
      <div className="bg-white w-100 xl-w-55">
        <div
          className="d-flex justify-content-center px-5"
          style={{
            marginTop: "100px",
          }}
        >
          <div className="justify-content-center">
            <h1>Daftar</h1>
            <h1>Akun di SIPENTING</h1>
            <div className="fw-500">
              Sudah memiliki akun?{" "}
              <Link
                to={"/login"}
                style={{
                  color: "#54BCA4",
                  textDecoration: "none",
                }}
              >
                Masuk
              </Link>
            </div>
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputUsername" className="form-label">
                  Username
                </label>
                <input type="text" value={form.username} name="username" onChange={handleChange} className="form-control rounded-pill" placeholder="Input your Username" id="exampleInputUsername" aria-describedby="usernameHelp" />
                {error.username && <div className="text-danger mt-2">{error.username}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input type="email" value={form.email} name="email" onChange={handleChange} className="form-control rounded-pill" placeholder="Input your Email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                {error.email && <div className="text-danger mt-2">{error.email}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <div className="input-group">
                  <input type={isShowPassword ? "text" : "password"} className="form-control rounded-pill" value={form.password} name="password" onChange={handleChange} placeholder="Input Password" id="exampleInputPassword1" />
                 
                </div>
                {error.password && <div className="text-danger mt-2">{error.password}</div>}
              </div>
              <button disabled={!form.username || !form.email || !form.password} className="btn btn-success w-100 rounded-pill">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;