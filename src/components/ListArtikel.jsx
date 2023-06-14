import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://64539f69c18adbbdfea29dd5.mockapi.io/artikel")
      .then((response) => {
        // Sort articles by ID in descending order
        const sortedArticles = response.data.sort((a, b) => b.id - a.id);
        // Take the first three articles
        const latestArticles = sortedArticles.slice(0, 3);
        setArticles(latestArticles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="row">
    {articles.map((article) => (
      <div className="col-md-4 mb-4 p-3" key={article.id}>
        <Card className="h-100">
          <Card.Img variant="top" src={article.gambar} alt={article.judul} />
          <Card.Body className="d-flex flex-column p-0 pt-3">
            <Card.Title className="jenis-artikel fs-4 fw-semibold" style={{ color: "#54BCA4" }}>
              {article.jenisArtikel}
            </Card.Title>
            <Card.Title>{article.judulArtikel.substring(0, 35)}</Card.Title>
            <Card.Text className="flex-grow-1 fs-5">{article.rangkuman.substring(0, 150)}....</Card.Text>
            <div className="d-flex justify-content-end">
              <Button
                href={`/artikel/${article.id}`}
                className="btn fs-5 selengkapnya fw-semibold"
                style={{ backgroundColor: "#54BCA4", color: "#ffffff" }}
              >
                Selengkapnya
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    ))}
  </div>
  );
}

export default ArticleList;
