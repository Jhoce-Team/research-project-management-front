import React from "react";
import InformationField from "../components/ProfileComponents/InformationField";
import SectionFact from "../components/ProfileComponents/SectionFact";
import imageProfile from "../images/profilePicture.jpg";
import { useState } from "react";
import EditInformation from "../components/ProfileComponents/EditInformation";

const Profile = () => {
  const user = "admin";
  const [editProfile, setEditProfile] = useState(false);

  const facts = () => {
    if (user === "leader") {
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
    } else if (user === "student") {
      return (
        <div className="flex-col bg-gray-200 rounded-md">
          <div className="flex justify-around">
            <SectionFact fact={"3"} factName="Proyectos" />
            <SectionFact fact={"57"} factName="Mis aportes" />
          </div>
        </div>
      );
    } else if (user === "admin") {
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
            <button
              className="flex justify-center items-center w-full text-color4 hover:underline hover:text-color3"
              onClick={() => {
                setEditProfile(true);
              }}
            >
              Editar Perfil
            </button>
          </div>
          <div className="flex-col justify-start items-center md:justify-center w-3/5">
            <h3 className="text-3xl font-bold text-color1 flex items-center justify-center">
              Jofay-zs
            </h3>
            <h4 className="text-2xl text-color2 flex items-center justify-center">
              Student
            </h4>
          </div>
        </section>
        <section className="mb-5 flex justify-center items-center md:border-l-2 md:mx-5 md:px-5">
          {editProfile ? (
            <textarea
              name=""
              id=""
              cols="90"
              rows="4"
              maxlength="180"
              placeholder="Escribe tu nueva descripcion"
            ></textarea>
          ) : (
            <p className="text-center">
              ea nostrum dolorum, nam exercitationem enim facilis. Amet numquam
              ut quasi dignissimos temporibus voluptate sdadasdsa sdada asdas
              ghjkf
            </p>
          )}
        </section>
      </div>
      <section className="mb-5">{facts()}</section>
      {editProfile ? (
        <section className="my-2 mx-2">
          <h4 className="text-xl font-bold text-color1 mb-3">Tu informacion</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <EditInformation title={"Nombres"} information={"Jofay"} />
            <EditInformation title={"Apellidos"} information={"Zhan Segura "} />
            <EditInformation title={"Pais"} information={"Colombia"} />
            <EditInformation
              title={"Email"}
              information={"jofay99@gmail.com"}
            />
            <EditInformation title={"Rol"} information={"Student"} />
            <EditInformation
              title={"Identificacion"}
              information={"12344571245"}
            />
          </div>
          <div className="w-full flex justify-end pt-2 pr-5">
            <button
              onClick={() => {
                setEditProfile(false);
              }}
              className="bg-color5 rounded-md px-2 py-1 text-xl font-bold hover:bg-color4"
            >
              Guardar cambios
            </button>
          </div>
        </section>
      ) : (
        <section className="my-2 mx-2">
          <h4 className="text-xl font-bold text-color1 mb-3">Tu informacion</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <InformationField title={"Nombres"} information={"Jofay"} />
            <InformationField
              title={"Apellidos"}
              information={"Zhan Segura "}
            />
            <InformationField title={"Pais"} information={"Colombia"} />
            <InformationField
              title={"Email"}
              information={"jofay99@gmail.com"}
            />
            <InformationField title={"Rol"} information={"Student"} />
            <InformationField
              title={"Identificacion"}
              information={"12344571245"}
            />
          </div>
        </section>
      )}
    </main>
  );
};

export default Profile;
