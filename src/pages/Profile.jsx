import React from "react";
import InformationField from "../components/ProfileComponents/InformationField";
import SectionFact from "../components/ProfileComponents/SectionFact";
import imageProfile from "../images/profilePicture.jpg";
import { useState, useEffect } from "react";
import EditInformation from "../components/ProfileComponents/EditInformation";
import { GET_USER } from "../graphql/users/usersQueries";
import Loading from "../components/Loading";
import { useUser } from "../context/userContext";
import { toast } from "react-toastify";
import { useQuery } from "@apollo/client";

const Profile = () => {
  const [isEditProfile, setIsEditProfile] = useState(false);
  const { userData, setUserData } = useUser();
  const {
    data: profileData,
    loading: profileLoading,
    error: profileError,
  } = useQuery(GET_USER, {
    variables: { _id: userData._id },
  });

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(
      "Falta la edicion del perfil y una vez integrado el registro y login, cambiar el contexto de usuario"
    );
  };

  useEffect(() => {
    toast.error("Error consultando tus datos 😢", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, [profileError]);

  if (profileLoading) {
    return <Loading />;
  }

  const facts = () => {
    if (profileData.findOneUser.rol.toLowerCase() === "lider") {
      return (
        <div className="flex-col bg-gray-200 rounded-md">
          <div className="flex justify-around">
            <SectionFact fact={"45"} factName="Mis estudiantes" />
            <SectionFact fact={"7"} factName="Mis proyectos" />
          </div>
          <div className="flex justify-center">
            <SectionFact fact={"196"} factName="Mis observaciones" />
          </div>
        </div>
      );
    } else if (profileData.findOneUser.rol.toLowerCase() === "estudiante") {
      return (
        <div className="flex-col bg-gray-200 rounded-md">
          <div className="flex justify-around">
            <SectionFact fact={"3"} factName="Proyectos" />
            <SectionFact fact={"57"} factName="Mis aportes" />
          </div>
        </div>
      );
    } else if (profileData.findOneUser.rol.toLowerCase() === "administrador") {
      return (
        <div className="flex-col bg-gray-200 rounded-md">
          <div className="flex w-full justify-around">
            <SectionFact fact={"200"} factName="Total Usuarios" />
            <SectionFact fact={"458"} factName="Total Proyectos" />
          </div>
          <div className="flex w-full justify-around">
            <SectionFact fact={"150"} factName="Total Estudiantes" />
            <SectionFact fact={"50"} factName="Total Lideres" />
          </div>
        </div>
      );
    }
  };

  return (
    <main className="flex flex-col bg-gray-100 py-10 px-5 h-auto md:px-10 md:h-full lg:h-screen justify-center">
      <div className="md:flex md:flex-row">
        <section className="w-full flex flex-col h-auto justify-start items-center mb-5 lg:flex-row">
          <div>
            <img
              src={imageProfile}
              alt="Your avatar"
              className="w-32 h-32 rounded-full"
            />
            <span
              className="flex justify-center items-center w-full text-color4 hover:underline hover:text-color3 cursor-pointer"
              onClick={() => {
                setIsEditProfile(true);
              }}
            >
              Editar Perfil
            </span>
          </div>
          <div className="flex-col justify-start items-center md:justify-center w-3/5">
            <h3 className="text-3xl font-bold text-color1 flex items-center justify-center">
              {profileData.findOneUser.userName}
            </h3>
            <h4 className="text-2xl text-color2 flex items-center justify-center">
              {profileData.findOneUser.rol}
            </h4>
          </div>
        </section>
        <section className="mb-5 flex justify-center items-center md:border-l-2 md:mx-5 md:px-5">
          {isEditProfile ? (
            <textarea
              cols="90"
              rows="4"
              maxLength="180"
              defaultValue={profileData.findOneUser.userDescription}
            />
          ) : (
            <p className="text-center">
              {profileData.findOneUser.userDescription}
            </p>
          )}
        </section>
      </div>
      <section className="mb-5">{facts()}</section>
      {isEditProfile ? (
        <section className="my-2 mx-2">
          <form onSubmit={submitForm}>
            <h4 className="text-xl font-bold text-color1 mb-3">
              Tu informacion
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <EditInformation
                title={"Nombres"}
                information={profileData.findOneUser.userName}
              />
              <EditInformation
                title={"Apellidos"}
                information={profileData.findOneUser.userLastName}
              />
              <EditInformation
                title={"Pais"}
                information={profileData.findOneUser.country}
              />
              <EditInformation
                title={"Email"}
                information={profileData.findOneUser.email}
              />
              <EditInformation
                title={"Identificacion"}
                information={profileData.findOneUser.identification}
              />
            </div>
            <div className="w-full flex flex-col justify-between items-center pt-2 sm:flex-row sm:px-5">
              <button
                onClick={() => {
                  setIsEditProfile(false);
                }}
                type="button"
                className="px-3 py-2 bg-gray-800 text-gray-100 rounded-sm font-bold text-xl mt-2 w-full hover:bg-gray-700 sm:w-56"
              >
                <i className="fas fa-arrow-left"></i> Regresar
              </button>
              <button
                type="submit"
                className="px-3 py-2 bg-green-800 text-gray-100 rounded-sm font-bold text-xl mt-2 w-full hover:bg-green-700 sm:w-56"
              >
                Guardar cambios
              </button>
            </div>
          </form>
        </section>
      ) : (
        <section className="my-2 mx-2">
          <h4 className="text-xl font-bold text-color1 mb-3">Tu informacion</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <InformationField
              title={"Nombres"}
              information={profileData.findOneUser.userName}
            />
            <InformationField
              title={"Apellidos"}
              information={profileData.findOneUser.userLastName}
            />
            <InformationField
              title={"Pais"}
              information={profileData.findOneUser.country}
            />
            <InformationField
              title={"Email"}
              information={profileData.findOneUser.email}
            />
            <InformationField
              title={"Identificacion"}
              information={profileData.findOneUser.identification}
            />
          </div>
        </section>
      )}
    </main>
  );
};

export default Profile;
