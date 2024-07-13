import CustomButton from "../components/CustomButton";
import Logo from "/list-vector.png";
import "./Login.scss";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login-container">
      <img src={Logo} alt="list" width={200} />
      <div className="button-container mt-5">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <CustomButton>Entrar</CustomButton>
        </Link>
      </div>
    </div>
  );
}
