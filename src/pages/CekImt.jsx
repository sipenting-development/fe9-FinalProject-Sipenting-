import { BmiProvider } from "../context/BmiContex";
import BmiCalculator from "../components/FromBmi";

function CekImt(params) {
  return (
    <BmiProvider>
      <BmiCalculator />
    </BmiProvider>
  );
}
export default CekImt;
