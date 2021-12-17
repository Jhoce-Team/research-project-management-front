import React from "react";
import GeneralInput from "../components/GeneralInput";
import useFormData from "../hooks/useFormData";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { NativeSelect } from "@mui/material";
import { useMutation } from "@apollo/client";
import { REGISTER } from "../graphql/ingress/ingressMutations";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const { form, formData, updateFormData } = useFormData(null);
  const navigate = useNavigate();

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
        localStorage.setItem("token", registerUserData.register.token);
        navigate("/profile");
      }
    }
  }, [registerUserData]);

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
    <main className="w-full h-full flex justify-center items-center">
      <div className="h-4/5 w-96 bg-red-300 px-5 py-2">
        <h3>Bienvenido</h3>
        <div>Llena los siguientes campos para quedar registrado</div>
        <form
          ref={form}
          onSubmit={submitForm}
          onChange={updateFormData}
          className="w-2/3"
        >
          <div>
            <GeneralInput
              label={"Nombre"}
              name={"userName"}
              type={"text"}
              required={true}
            />
            <GeneralInput
              label={"Apellido"}
              name={"userLastName"}
              type={"text"}
              required={true}
            />
            <GeneralInput
              label={"Identificacion"}
              name={"identification"}
              type={"text"}
              required={true}
            />
            <GeneralInput
              label={"Correo"}
              name={"email"}
              type={"email"}
              required={true}
            />
            <GeneralInput
              label={"Pais"}
              name={"country"}
              type={"text"}
              required={false}
            />
            <GeneralInput
              label={"Contraseña"}
              name={"password"}
              type={"password"}
              required={true}
            />
            <FormControl variant="standard" sx={{ m: 1, width: "100%" }}>
              <InputLabel variant="standard" htmlFor="rol">
                Rol
              </InputLabel>
              <NativeSelect name="rol">
                <option value="ESTUDIANTE">Estudiante</option>
                <option value="LIDER">Lider</option>
                <option value="ADMINISTRADOR">Administrador</option>
              </NativeSelect>
            </FormControl>
          </div>
          <button
            type="submit"
            // disabled={Object.keys(formData).length === 0}
            className="px-3 py-2 bg-green-800 text-gray-100 rounded-sm font-bold text-xl mt-2 w-56 disabled:opacity-30 disabled:cursor-default hover:bg-green-700"
          >
            {registerUserLoading ? (
              <i className="fas fa-spinner"></i>
            ) : (
              <i className="fas fa-save"></i>
            )}{" "}
            Guardar cambios
          </button>
        </form>
      </div>
      <ToastContainer />
    </main>
  );
};

export default Registration;
