import React from "react";
import GeneralInput from "../components/GeneralInput";
import useFormData from "../hooks/useFormData";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { NativeSelect } from "@mui/material";

const Registration = () => {
  const { form, formData, updateFormData } = useFormData();

  const submitForm = () => {
    console.log("hi");
  };

  return (
    <main class="w-full h-full flex justify-center items-center">
      <div className="h-4/5 w-96 bg-red-300">
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
            Guardar cambios
          </button>
        </form>
      </div>
    </main>
  );
};

export default Registration;
