import React from "react";
import useFormData from "../hooks/useFormData";
import { useMutation } from "@apollo/client";
import { REGISTER } from "../graphql/ingress/ingressMutations";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useLoggedContext } from "../context/loggedContext";
import "../styles/registrationStyles.css";

const Registration = () => {
  const { form, formData, updateFormData } = useFormData(null);
  const navigate = useNavigate();
  const { setToken } = useLoggedContext();

  const [
    register,
    {
      data: registerUserData,
      loading: registerUserLoading,
      error: registerUserError,
    },
  ] = useMutation(REGISTER);

  const submitForm = (e) => {
    e.preventDefault();
    register({
      variables: formData,
    });
  };

  useEffect(() => {
    if (registerUserData) {
      toast.success("Registro exitoso 😀", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      if (registerUserData.register.token) {
        setToken(registerUserData.register.token);
        navigate("/profile");
      }
    }
  }, [registerUserData, navigate, setToken]);

  useEffect(() => {
    if (registerUserError) {
      toast.error("Error registrando los datos 😭", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [registerUserError]);

  return (
    <div className="wrapper registrationBody">
      <div className="container">
        <h1>Bienvenid@</h1>
        <form
          className="form"
          onSubmit={submitForm}
          onChange={updateFormData}
          ref={form}
        >
          <input
            type="text"
            placeholder="Nombre"
            name={"userName"}
            required={true}
          />

          <input
            type="text"
            placeholder="Apellido"
            name={"userLastName"}
            required={true}
          />

          <input
            type="text"
            placeholder="Identificacion"
            name={"identification"}
            required={true}
          />

          <input
            type="password"
            placeholder="Contraseña"
            name={"password"}
            required={true}
          />

          <input
            type="email"
            placeholder="Correo"
            name={"email"}
            required={true}
          />

          <input
            type="text"
            placeholder="Pais"
            name={"country"}
            required={true}
          />

          <select name="rol">
            <option value="ESTUDIANTE">Estudiante</option>
            <option value="LIDER">Lider</option>
            <option value="ADMINISTRADOR">Administrador</option>
          </select>

          <button type="submit" id="login-button">
            Registrarse
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Registration;
