import { Stack, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div>
        <Stack gap={3}>
          <div className="text-center mt-5 ">
            <img src="https://res.cloudinary.com/damsz0xlx/image/upload/v1685933152/Assets/amico_zk16g5.png" alt="erorr" style={{ width: 400, height: 400 }} className="mb-3" />
            <h2>Sepertinya halaman yang Anda minta sudah hilang</h2>
            <Button className="btn mt-3 rounded-pill px-4 py-2" style={{ backgroundColor: "#54BCA4" }}>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Kembali ke Beranda
              </Link>
            </Button>
          </div>
        </Stack>
      </div>
    </>
  );
}
export default NotFound;
