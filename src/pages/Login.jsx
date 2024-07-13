import CustomButton from "../components/CustomButton";
import "./Login.scss";
import Logo from "/list-vector.png";

export default function Login() {
  return (
    <div className="login-container">
      <img src={Logo} alt="list" />
      <div className="button-container mt-5">
        <CustomButton>Entrar</CustomButton>
      </div>
    </div>
  );
}
