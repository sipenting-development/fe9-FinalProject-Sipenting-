import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const LoginForm = () =>
{
  // const { login } = useContext( AuthContext );
  const navigate = useNavigate();
  const [ isShowpassword, setIsShowpassword ] = useState( false );
  const [ form, setForm ] = useState( {
    email: "",
    password: "",
  } );
  const [ error, setError ] = useState( {
    email: "",
    password: "",
  } );

  const handleChange = ( e ) =>
  {
    const { name, value } = e.target;
    setForm( { ...form, [ name ]: value } );
    if ( name === "email" && value.trim() === "" )
    {
      setError( { ...error, email: "Email tidak boleh kosong!" } );
    } else if ( name === "password" && value.trim() === "" )
    {
      setError( { ...error, password: "Password tidak boleh kosong!" } );
    }
  };

  const onSubmit = async ( e ) =>
  {
    e.preventDefault();
    console.log( "login", form );
    try
    {
      const response = await axios.get(
        "https://64539f69c18adbbdfea29dd5.mockapi.io/user"
      );
      if ( response.status === 200 )
      {
        const users = await response.data;
        const user = users.find(
          ( u ) => u.email === form.email && u.password === form.password
        );
        if ( user )
        {
          console.log( "Login berhasil!" );
          localStorage.setItem( "user", JSON.stringify( user ) );
          alert( "Login berhasil!" );
          navigate( "/konsultasi" ); // Redirect to the "konsultasi" page
        } else
        {
          console.log( "email atau password salah!" );
          alert( "email atau password salah!" );
        }
      }
    } catch ( error )
    {
      console.error( "An error occurred:", error );
      alert( "An error occurred. Please try again." );
    }
  };

  return (
    <div className="d-flex flex-row ">
      <div className="linear-bg w-45">
        <div className="d-flex align-items-center vh-100 justify-content-center">
          <img
            src="https://res.cloudinary.com/damsz0xlx/image/upload/v1685717659/Assets/konsultasi_h27iqj.png"
            alt=""
            style={ { width: 500, height: 500 } }
          />
        </div>
      </div>
      <div className="bg-white w-65">
        <div
          className="d-flex justify-content-center px-5"
          style={ {
            marginTop: "100px",
          } }
        >
          <div className="justify-content-center">
            <h1>Selamat Datang</h1>
            <h1>Kembali di SIPENTING</h1>
            <div className="fw-500">
              Belum memiliki akun?{ " " }
              <Link
                to={ "/register" }
                style={ {
                  color: "#54BCA4",
                  textDecoration: "none",
                } }
              >
                Daftar
              </Link>
            </div>
            <form onSubmit={ onSubmit }>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  value={ form.email }
                  name="email"
                  onChange={ ( e ) => handleChange( e ) }
                  className="form-control rounded-pill"
                  placeholder="Input your Email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                {
                  error.email && (
                    <div className="text-danger mt-2">
                      { error.email }
                    </div>
                  )
                }
              </div>
              <div className="input-group mb-3 d-flex">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Password
                </label>
                <div className="input-group mb-3">
                  <input
                    type={ isShowpassword ? "text" : "password" }
                    className="form-control rounded"
                    value={ form.password }
                    name="password"
                    onChange={ ( e ) => handleChange( e ) }
                    placeholder="Input Password"
                    aria-label="Recipient's email"
                    aria-describedby="button-addon2"
                  />
                  <button
                    onClick={ () => setIsShowpassword( !isShowpassword ) }
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    Icon
                  </button>
                </div>
                {
                  error.password && (
                    <div className="text-danger mt-2">
                      { error.password }
                    </div>
                  )
                }
              </div>
              <button className="btn btn-success w-100 rounded-pill">
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

