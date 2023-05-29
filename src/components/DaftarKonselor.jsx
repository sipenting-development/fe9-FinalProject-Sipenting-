import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Row } from "react-bootstrap";

const DaftarKonselor = ({ img, nama, pengalaman }) => {
  return (
    <Row className="conselor-box">
      <Col xs={4}>
        <img className="conselor-photo" src={img} alt="konseler1" />
      </Col>
      <Col xs={8}>
        <h4 className="font-weight-bold">{nama}</h4>
        <p>{pengalaman}</p>
        <div className="rating-group">
          <FontAwesomeIcon icon={faStar} className="mr-1" style={{ fontSize: "25px" }} />
          <FontAwesomeIcon icon={faStar} className="mr-1" style={{ fontSize: "25px" }} />
          <FontAwesomeIcon icon={faStar} className="mr-1" style={{ fontSize: "25px" }} />
          <FontAwesomeIcon icon={faStar} className="mr-1" style={{ fontSize: "25px" }} />
          <FontAwesomeIcon icon={faStar} className="mr-1" style={{ fontSize: "25px" }} />
        </div>
        <Button className="btn btn-primary mt-3 rounded-pill px-4 py-2">Konsultasi</Button>
      </Col>
    </Row>
  );
};

export default DaftarKonselor;
