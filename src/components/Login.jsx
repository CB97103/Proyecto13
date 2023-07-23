import "../style/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  localStorage.removeItem("ingreso");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (usuario === "Rick" && contraseña === "137") {
      setError(false);
      localStorage.setItem("ingreso", true);
      console.log(localStorage.getItem("ingreso"));
      navigate("/Principal");
    }
    setError(true);
  };

  return (
    <div className="fondo-login">
      <div className="contenedor-login">
        <div className="container">
          <form className="login-" onSubmit={handleSubmit}>
            <h1>Iniciar sesión</h1>
            <label>Usuario</label>
            <input
              type="text"
              value={usuario}
              onChange={(event) => setUsuario(event.target.value)}
            />
            <label>Contraseña</label>
            <input
              type="password"
              value={contraseña}
              onChange={(event) => setContraseña(event.target.value)}
            />
            <button>Ingresar</button>
          </form>
          {error && <p>Todos los campos son requeridos</p>}
        </div>
      </div>
    </div>
  );
}
