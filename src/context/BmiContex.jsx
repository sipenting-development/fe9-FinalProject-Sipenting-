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
    if (bmi < 18.5) {
      kategori = "Berat badan kurang";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      kategori = "Berat badan normal";
    } else if (bmi >= 25 && bmi < 29.9) {
      kategori = "Berat badan berlebih";
    } else {
      kategori = "Obesitas";
    }

    // Menyimpan hasil BMI
    setHasil(`BMI: ${bmi.toFixed(2)}, Kategori: ${kategori}`);
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
        setBb,
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
