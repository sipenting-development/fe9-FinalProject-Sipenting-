import { BmiProvider } from "../context/BmiContex";
import BmiCalculator from "../components/FromBmi";
import Footer from "../components/Footer";
import HeroCekKonsul from "../components/HeroCekKonsul";
import NavbarSipenting from "../components/Navbar";

function CekImt(params) {
  return (
    <>
      <div>
        <NavbarSipenting />
        <HeroCekKonsul
          img={"https://res.cloudinary.com/damsz0xlx/image/upload/v1683201271/Assets/cekstunting_sxkcbq.png"}
          title={"Cek Status Gizi !"}
          descrip={"Pantau pertumbuhan dan perkembangan anak Anda secara berkala. Untuk mengetahui seberapa sehat anak Anda. Cek kondisi anak Anda bisa menggunakan layanan kami. "}
        />

        <BmiProvider>
          <BmiCalculator />
        </BmiProvider>
        <Footer />
      </div>
    </>
  );
}
export default CekImt;
