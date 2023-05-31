import { BmiProvider } from "../context/BmiContex";
import BmiCalculator from "../components/FromBmi";
import Footer from "../components/Footer";

function CekImt(params) {
  return (
    <>
      <BmiProvider>
        <BmiCalculator />
      </BmiProvider>

      <Footer />
    </>
  );
}
export default CekImt;
