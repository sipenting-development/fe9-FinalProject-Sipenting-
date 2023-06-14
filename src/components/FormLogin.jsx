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
    } else if (name === "password" && value.length > 6) {
      setError({ ...error, password: "Password maksimal 6 karakter!" });
    } else {
      setError({ email: "", password: "" }); // Clear error messages if the fields are not empty or the password is within the limit
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("login", form);
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
  };

  const isFormValid = form.email.trim() === "" || form.password.trim() === "";

  return (
    <div className="d-flex flex-column flex-md-row">
      <div className="linear-bg d-flex align-items-center justify-content-center vh-100 w-100 w-md-50">
        <img src="https://res.cloudinary.com/damsz0xlx/image/upload/v1685717659/Assets/konsultasi_h27iqj.png" alt="" style={{ width: "100%", maxWidth: 500, height: "auto" }} />
      </div>
      <div className="bg-white w-100 w-md-50">
        <div className="d-flex justify-content-center px-5 py-4">
          <div className="w-100">
            <h1 className="text-center mb-4">Selamat Datang</h1>
            <h1 className="text-center mb-4">Kembali di SIPENTING</h1>
            <div className="text-center mb-4">
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
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input type="email" value={form.email} name="email" onChange={(e) => handleChange(e)} className="form-control rounded-pill" placeholder="Input your Email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                {error.email && <div className="text-danger mt-2">{error.email}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <div className="input-group">
                  <input
                    type={isShowpassword ? "text" : "password"}
                    className="form-control rounded-pill"
                    value={form.password}
                    name="password"
                    onChange={(e) => handleChange(e)}
                    placeholder="Input Password"
                    id="exampleInputPassword1"
                  />
                  
                </div>
                {error.password && <div className="text-danger mt-2">{error.password}</div>}
              </div>
              <button disabled={isFormValid} className="btn btn-success w-100 rounded-pill">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;