import { BmiProvider } from "../context/BmiContex";
import BmiCalculator from "../components/FromBmi";
import Footer from "../components/Footer";
import HeroCekKonsul from "../components/HeroCekKonsul";

function CekImt(params) {
  return (
    <>
      <div>
        <HeroCekKonsul
          img={"https://res.cloudinary.com/damsz0xlx/image/upload/v1683201271/Assets/cekstunting_sxkcbq.png"}
          title={"Cek Status Gizi !"}
          descrip={"Pantau pertumbuhan dan perkembangan anak Anda secara berkala. Untuk mengetahui seberapa sehat anak Anda. Cek kondisi anak Anda bisa menggunakan layanan kami. "}
        />
        <BmiProvider className="mt-5">
          <BmiCalculator />
        </BmiProvider>
        <Footer />
      </div>
    </>
  );
}
export default CekImt;
