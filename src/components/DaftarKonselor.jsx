import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../pages/konsultasi.css";
const DaftarKonselor = ({ img, nama, pengalaman, ratings }) => {
  return (
    <Row className="conselor-box">
      <Col xs={4}>
        <img className="conselor-photo" src={img} alt="konselor1" style={{ width: "100%", maxWidth: "200px" }} />
      </Col>
      <Col xs={8}>
        <h4 className="font-weight-bold  df">{nama}</h4>
        <p className="df">{pengalaman}</p>
        <div className="rating-group">
          {ratings.map((rating, index) => (
            <FontAwesomeIcon key={index} icon={faStar} className="mr-1" style={{ fontSize: "23px", color: rating === "yellow" ? "#EBBB14" : "#F0F0F0" }} />
          ))}
        </div>
        <Button
          className="btn mt-3 rounded-pill px-4 py-2"
          style={{
            backgroundColor: "#54BCA4",
            borderColor: "#54BCA4", // Menambahkan properti borderColor dengan nilai "white"
          }}
        >
          <Link to="/chat" style={{ textDecoration: "none", color: "white" }}>
            Konsultasi
          </Link>
        </Button>
      </Col>
    </Row>
  );
};

export default DaftarKonselor;
