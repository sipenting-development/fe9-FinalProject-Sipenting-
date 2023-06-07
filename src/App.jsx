import CekImt from "./pages/CekImt";
import LandingPage from "./pages/LandingPage";
import Konsultasi from "./pages/Konsultasi";
import { Route, Routes } from "react-router-dom";
import Artikel from "./pages/Artikel";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/konsultasi" element={<Konsultasi />} />
        <Route path="/cekgizi" element={<CekImt />} />
        <Route path="/artikel" element={<Artikel />} />
        {/* <Route path="/chat" element={<ChatBox />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
