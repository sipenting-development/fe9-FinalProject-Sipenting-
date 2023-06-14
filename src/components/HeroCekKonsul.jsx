import { Container, Row, Col } from "react-bootstrap";
// import "./herocekonsul.css";

const HeroCekKonsul = ({ img, title, descrip, coba }) => {
  return (
    <div className="hero hero-view" id="hero">
      <Container>
        <Row className="mb-md-0 mb-5 text-center">
          <Col lg={6}>
            <div className="text-center text-lg-start mt-3">
              {/* <img
                src="https://res.cloudinary.com/damsz0xlx/image/upload/v1685717659/Assets/konsultasi_h27iqj.png"
                className="hero-img img-fluid float-start mx-5"
                style={{ width: "75%" }}
                alt="Hero"
              /> */}
              <img className="hero-img img-fluid float-start mx-5" src={img} alt="..." style={{ width: "75%" }} />
            </div>
          </Col>
          <Col lg={6} py-lg-5>
            <div className="hero-content py-5">
              {/* <h1 className="text-lg-start fw-bold main-title">
                Yuk Pilih <br />
                <span className="singkatan">Teman Konsultasi !</span>
              </h1> */}
              <h1 className="text-lg-start fw-bold main-title">
                {" "}
                {coba} <br /> <span className="singkatan ">{title}</span>{" "}
              </h1>
              {/* <p className="text-lg-start mt-lg-2 main-content fs-5">
                Dapatkan konsultasi medis anak yang cepat dan mudah dari dokter kami yang berpengalaman. Konsultasi
                medis anak yang nyaman dan aman dari rumah Anda sendiri.
              </p> */}
              <p className="text-lg-start mt-lg-2 main-content fs-5">{descrip}</p>
            </div>
          </Col>
        </Row>
        <hr />
      </Container>
    </div>
  );
};

export default HeroCekKonsul;

// const HeroCekKonsul = ({ img, title, descrip }) => {
//   return (
//     <Container className="mt-5 text-center text-lg-start">
//       <Row className="align-items-center my-5 mt-5">
//         <Col lg={6} className="pt-5 text-center">
//           <img className="rounded mb-4 mb-lg-0 consultation-main-image img-fluid" src={img} alt="..." />
//         </Col>
//         <Col lg={6} className="mt-lg-0 mt-4 text-left titledes">
//           <h2 className="fw-bold mb-3  ">
//             {" "}
//             Yuk Pilih <span className="singkatan ">{title}</span>{" "}
//           </h2>
//           <p>{descrip}</p>
//         </Col>
//       </Row>
//       <hr className="herohr" />
//     </Container>
//   );
// };

// export default HeroCekKonsul;
