import React, { createContext, useState } from "react";

export const BmiContext = createContext();

export const BmiProvider = ({ children }) => {
  const [nama, setNama] = useState("");
  const [jk, setJk] = useState("");
  const [bb, setBb] = useState("");
  const [tl, setTl] = useState("");
  const [umur, setUmur] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [hasil, setHasil] = useState("");

  const calculateBmi = () => {
    // Menghitung nilai BMI
    const tinggiMeter = tinggi / 100;
    const bmi = bb / (tinggiMeter * tinggiMeter);

    // Menentukan kategori BMI
    let kategori = "";
    if (umur < 24) {
      if (bmi < 11) {
        kategori = "Kurus";
      } else if (bmi >= 11 && bmi < 18) {
        kategori = "Normal";
      } else {
        kategori = "Gemuk";
      }
    } else {
      if (bmi < 13) {
        kategori = "Kurus";
      } else if (bmi >= 13 && bmi < 20) {
        kategori = "Normal";
      } else {
        kategori = "Gemuk";
      }
    }

    // Menyimpan hasil BMI
    setHasil(`BMI: ${bmi.toFixed(2)}, Kategori: ${kategori}`);
  };

  const setBbHandler = (value) => {
    const bbValue = value.length <= 3 ? value : value.slice(0, 3);
    setBb(bbValue);
  };

  const clearData = () => {
    setNama("");
    setJk("");
    setBb("");
    setTl("");
    setUmur("");
    setTinggi("");
    setHasil("");
  };

  return (
    <BmiContext.Provider
      value={{
        nama,
        setNama,
        jk,
        setJk,
        bb,
        setBb: setBbHandler,
        tl,
        setTl,
        umur,
        setUmur,
        tinggi,
        setTinggi,
        hasil,
        calculateBmi,
        clearData,
      }}
    >
      {children}
    </BmiContext.Provider>
  );
};
