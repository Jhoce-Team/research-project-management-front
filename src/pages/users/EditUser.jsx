import React from "react";
import { useParams, Link } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { GET_USER } from "../../graphql/users/usersQueries";
import { useEffect } from "react";
import GeneralInput from "../../components/GeneralInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { NativeSelect } from "@mui/material";
import useFormData from "../../hooks/useFormData";
import { EDIT_USER, DELETE_USER } from "../../graphql/users/usersMutations";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditUser = () => {
  const { _id } = useParams();
  const {
    data: queryData,
    error: queryError,
    loading: queryLoading,
  } = useQuery(GET_USER, {
    variables: {
      _id,
    },
  });
  const [
    editUser,
    { data: mutationData, loading: mutationLoading, error: mutationError },
  ] = useMutation(EDIT_USER);
  const { form, formData, updateFormData } = useFormData(null);
  const submitForm = (e) => {
    e.preventDefault();
    editUser({
      variables: { _id, ...formData },
    });
  };

  const [
    deleteUser,
    {
      data: deleteUserData,
      loading: deleteUserLoading,
      error: deleteUserError,
    },
  ] = useMutation(DELETE_USER);

  const eliminarUsuario = (e) => {
    deleteUser({
      variables: { _id:_id },
    });
  };

  useEffect(() => {
    if (queryError) {
      toast.error("Error consultando la BD 😟", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [queryError]);

  useEffect(() => {
    if (mutationData) {
      toast.success("Cambios guardados con exito 😉", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [mutationData]);

  useEffect(() => {
    if (mutationError) {
      toast.error("No se puediron guardar los cambios", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [mutationError]);

  useEffect(() => {
    if (deleteUserData) {
      toast.success("Usuario eliminado con exito 😀", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [deleteUserData]);

  useEffect(() => {
    if (deleteUserError) {
      toast.error("Error eliminando usuario 😢", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [deleteUserError]);

  if (queryLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex flex-col w-full h-auto justify-center items-center py-10">
      <header className="text-center font-bold text-3xl mb-10">
        Editando Usuario
      </header>
      <section className="w-4/5 flex pb-7 flex-col justify-center items-center sm:flex-row">
        <div className="flex w-full sm:w-1/2 sm:justify-start">
          <button className="px-3 py-2 bg-gray-800 text-gray-100 rounded-sm font-bold text-xl mt-2 w-full hover:bg-gray-700 sm:w-56">
            <Link to="/users">
              <i className="fas fa-arrow-left"></i> Regresar
            </Link>
          </button>
        </div>
        <div className="flex w-full sm:w-1/2 sm:justify-end">
          <button
            onClick={eliminarUsuario}
            className="px-3 py-2 bg-red-800 text-gray-100 rounded-sm font-bold text-xl mt-2 w-full sm:w-56 hover:bg-red-700"
          >
            {deleteUserLoading ? (
              <i className="fas fa-spinner"></i>
            ) : (
              <i className="fas fa-trash"></i>
            )}
            Eliminar usuario
          </button>
        </div>
      </section>
      <section className="border-2 border-color1 w-4/5 py-3 px-5">
        <form
          className="grid grid-cols-1 md:grid-cols-2 md:gap-5"
          onSubmit={submitForm}
          onChange={updateFormData}
          ref={form}
        >
          <GeneralInput
            label="Nombre"
            defaultValue={queryData.findOneUser.userName}
            name="userName"
            required={true}
            type="text"
          />
          <GeneralInput
            label="Apellido"
            defaultValue={queryData.findOneUser.userLastName}
            name="userLastName"
            required={true}
            type="text"
          />
          <GeneralInput
            label="Identificacion"
            defaultValue={queryData.findOneUser.identification}
            name="identification"
            required={true}
            type="text"
          />
          <FormControl variant="standard" sx={{ m: 1, width: "100%" }}>
            <InputLabel variant="standard" htmlFor="rol">
              Rol
            </InputLabel>
            <NativeSelect defaultValue={queryData.findOneUser.rol} name="rol">
              <option value="ESTUDIANTE">Estudiante</option>
              <option value="LIDER">Lider</option>
              <option value="ADMINISTRADOR">Administrador</option>
              <option hidden value={queryData.findOneUser.rol}>
                {queryData.findOneUser.rol}
              </option>
            </NativeSelect>
          </FormControl>
          <GeneralInput
            label="Correo"
            defaultValue={queryData.findOneUser.email}
            name="email"
            required={true}
            type="email"
          />
          <GeneralInput
            label="Pais"
            defaultValue={queryData.findOneUser.country}
            name="country"
            required={true}
            type="text"
          />
          <FormControl variant="standard" sx={{ m: 1, width: "100%" }}>
            <InputLabel variant="standard" htmlFor="status">
              Estado
            </InputLabel>
            <NativeSelect
              defaultValue={queryData.findOneUser.status}
              name="status"
            >
              <option value="PENDIENTE">Pendiente</option>
              <option value="RECHAZADO">Rechazado</option>
              <option value="AUTORIZADO">Autorizado</option>
              <option hidden value={queryData.findOneUser.status}>
                {queryData.findOneUser.status}
              </option>
            </NativeSelect>
          </FormControl>
          <div className="flex flex-col justify-around items-center xl:flex-row">
            <button
              type="submit"
              disabled={Object.keys(formData).length === 0}
              className="px-3 py-2 bg-green-800 text-gray-100 rounded-sm font-bold text-xl mt-2 w-56 disabled:opacity-30 disabled:cursor-default hover:bg-green-700"
            >
              {mutationLoading ? (
                <i className="fas fa-spinner"></i>
              ) : (
                <i className="fas fa-save"></i>
              )}{" "}
              Guardar cambios
            </button>
          </div>
        </form>
      </section>
      <ToastContainer />
    </main>
  );
};

export default EditUser;
