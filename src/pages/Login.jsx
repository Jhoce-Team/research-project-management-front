import React from "react";
import "../../src/styles/loginStyles.css";

const Login = () => {
  const submitForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="wrapper loginBody">
      <div className="container">
        <h1>Bienvenid@</h1>
        <form className="form" onSubmit={submitForm}>
          <input type="text" placeholder="Usuario" required={true} />
          <input type="password" placeholder="Contraseña" required={true} />
          <button type="submit" id="login-button">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
