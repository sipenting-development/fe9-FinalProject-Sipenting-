import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./Artikel.css";

function CardArtikel() {
  const [artikelList, setArtikelList] = useState([]);

  useEffect(() => {
    fetch("https://64539f69c18adbbdfea29dd5.mockapi.io/artikel")
      .then((response) => response.json())
      .then((data) => setArtikelList(data))
      .catch((error) => console.log(error));
  }, []);

  if (artikelList.length === 0) {
    return null; // Return null or a loading spinner while data is being fetched
  }

  return (
    <>
      {artikelList.map((artikel) => (
        <Card key={artikel.id} className="col-lg-12 mb-5">
          <div className="row">
            <div className="col-lg-5">
              <div className="card-image">
                <img className="float-center img-fluid" src={artikel.gambar} alt="Card" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="card-body">
                <h4 className="text-warna jenis-artikel"> {artikel.jenisArtikel}</h4>
                <h6 className="card-title">{artikel.judulArtikel}</h6>
                <p className="card-text text-justify">{artikel.rangkuman}</p>
                <div className="text-end">
                  <a href={artikel.link} style={{ textDecoration: "none" }} className="text-warna card-link fw-semibold">
                    Selengkapnya
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
}

export default CardArtikel;
