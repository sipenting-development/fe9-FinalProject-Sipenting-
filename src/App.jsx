import CekImt from "./pages/CekImt";
import LandingPage from "./pages/LandingPage";
import Konsultasi from "./pages/Konsultasi";
import { Route, Routes } from "react-router-dom";
import Artikel from "./pages/Artikel";
import NotFound from "./pages/Notound";
import LoginRegister from "./pages/LoginRegister";
import "./App.css"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" index element={<LandingPage />} />
        <Route path="/konsultasi" element={<Konsultasi />} />
        <Route path="/cekgizi" element={<CekImt />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<LoginRegister/>} />
        <Route path="/register" element={<LoginRegister/>} />
      </Routes>
    </>
  );
}

export default App;
