import React, { Component } from "react";
import { Crisp } from "crisp-sdk-web";
import { Stack, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./notfound.css";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContex";

const ChatBox = () => {
  // componentDidMount() {
  //   Crisp.configure("51b50fc1-2ed2-4f2e-9d1c-5636b8a34d9a");
  // }
  const { handleConsult } = useContext(UserContext);

  useEffect(() => {
    handleConsult(true);
  }, []);

  return (
    <div>
      <Stack gap={3}>
        <div className="text-center mt-5">
          <img src="https://res.cloudinary.com/damsz0xlx/image/upload/v1686235709/bro_eto8s3.png" alt="error" style={{ width: 350, height: 350 }} className="mb-3 mt-4" />
          <p className="fw-bold fs-4 mt-3">Silakan Melakukan Konsultasi</p>
          <Link to={"/"}>
            <Button variant="outline-success" className="btnmasuk rounded-5">
              Kembali ke Beranda
            </Button>
          </Link>
          <Button variant="outline-success" className="btnmasuk rounded-5 mt5">
            <a href="https://wa.me/+62895329165377">Lanjut Konsultasi</a>
          </Button>
        </div>
      </Stack>
    </div>
  );
};

export default ChatBox;
