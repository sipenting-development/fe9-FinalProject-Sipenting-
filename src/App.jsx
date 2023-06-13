import CekImt from "./pages/CekImt";
import LandingPage from "./pages/LandingPage";
import Konsultasi from "./pages/Konsultasi";
import { Route, Routes } from "react-router-dom";
import Artikel from "./pages/Artikel";
import NotFound from "./pages/Notound";

import ChatBox from "./pages/ChatBox";

import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/konsultasi" element={<Konsultasi />} />
        <Route path="/cekgizi" element={<CekImt />} />
        <Route path="/chat" element={<ChatBox />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
