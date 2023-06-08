import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Row } from "react-bootstrap";
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
            <FontAwesomeIcon key={index} icon={faStar} className="mr-1" style={{ fontSize: "25px", color: rating === "yellow" ? "yellow" : "gray" }} />
          ))}
        </div>
        <Button className="btn btn-primary mt-3 rounded-pill px-4 py-2 border border-white df" style={{ backgroundColor: "#54BCA4" }}>
          Konsultasi
        </Button>
      </Col>
    </Row>
  );
};

export default DaftarKonselor;
