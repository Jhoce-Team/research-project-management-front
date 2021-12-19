import { useMutation } from "@apollo/client";
import React from "react";
import "../../src/styles/loginStyles.css";
import { LOGIN } from "../graphql/ingress/ingressMutations";
import useFormData from "../hooks/useFormData";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useLoggedContext } from "../context/loggedContext";

const Login = () => {
  const { form, formData, updateFormData } = useFormData();
  const { setToken } = useLoggedContext();
  const navigate = useNavigate();
  const [login, { data: loginData, loading: loginLoading, error: loginError }] =
    useMutation(LOGIN);

  const submitForm = (e) => {
    e.preventDefault();
    login({
      variables: formData,
    });
  };

  useEffect(() => {
    if (loginData) {
      if (loginData.login.token) {
        setToken(loginData.login.token);
        navigate("/profile");
      }
    }
  }, [loginData, navigate, setToken]);

  useEffect(() => {
    if (loginError) {
      toast.error("Problemas iniciando sesion", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [loginError]);

  return (
    <div className="wrapper loginBody">
      <div className="container">
        <h1>Bienvenid@</h1>
        <form
          className="form"
          onSubmit={submitForm}
          onChange={updateFormData}
          ref={form}
        >
          <input
            type="email"
            placeholder="Correo"
            required={true}
            name="email"
          />
          <input
            type="password"
            placeholder="Contraseña"
            required={true}
            name="password"
          />
          <button type="submit" id="login-button">
            Ingresar
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
