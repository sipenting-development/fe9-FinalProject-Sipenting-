import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Artikel.css";

function CardArtikel() {
  const [artikelList, setArtikelList] = useState([]);
  const [filteredArtikelList, setFilteredArtikelList] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(2);

  useEffect(() => {
    fetch("https://64539f69c18adbbdfea29dd5.mockapi.io/artikel")
      .then((response) => response.json())
      .then((data) => {
        setArtikelList(data);
        setFilteredArtikelList(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleFilter = (category) => {
    setActiveCategory(category);

    if (category === null) {
      setFilteredArtikelList(artikelList);
    } else {
      const filteredList = artikelList.filter((artikel) =>
        artikel.jenisArtikel.toLowerCase().includes(category.toLowerCase())
      );
      setFilteredArtikelList(filteredList);
    }
    setCurrentPage(1); 
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredArtikelList.slice(indexOfFirstCard, indexOfLastCard);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="mb-3">
        <Button variant="primary" className="me-2" onClick={() => handleFilter("gizi")}>
          Gizi
        </Button>
        <Button variant="primary" className="me-2" onClick={() => handleFilter("pencegahan")}>
          Pencegahan
        </Button>
        <Button variant="primary" className="me-2" onClick={() => handleFilter("dampak")}>
          Dampak
        </Button>
        <Button variant="primary" className="me-2" onClick={() => handleFilter("stunting")}>
          Stunting
        </Button>
        <Button variant="primary" onClick={() => handleFilter(null)}>
          All
        </Button>
      </div>

      {currentCards.length === 0 ? (
        <p>Jenis artikel yang Anda pilih tidak ada.</p>
      ) : (
        currentCards.map((artikel) => (
          <Card key={artikel.id} className="col-lg-12 mb-1 p-3">
              <div className="row">
              <div className="col-lg-5">
                <div className="card-image">
                  <img className="float-center img-fluid" src={artikel.gambar} alt="Card" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="card-body">
                  <h4 className="text-warna jenis-artikel">{artikel.jenisArtikel}</h4>
                  <h6 className="card-title">{artikel.judulArtikel}</h6>
                  <p className="card-text text-justify">
                    {artikel.rangkuman.substring(0, 250)}
                  </p>
                  <div className="text-end">
                    <Link
                      to={`/artikel/${artikel.id}`}
                      style={{ textDecoration: "none" }}
                      className="text-warna card-link fw-semibold"
                    >
                      Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))
      )}

      {/* Pagination */}
      <div className="d-flex justify-content-center">
        <nav>
          <ul className="pagination">
            {Array(Math.ceil(filteredArtikelList.length / cardsPerPage))
              .fill()
              .map((_, index) => (
                <li
                  key={index}
                  className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                >
                  <Button variant="link" className="page-link" onClick={() => paginate(index + 1)}>
                    {index + 1}
                  </Button>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default CardArtikel;
