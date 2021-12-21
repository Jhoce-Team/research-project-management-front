import { useQuery } from "@apollo/client";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { GET_PROJECT } from "../../graphql/projects/projectsQueries";
import Loading from "../../components/Loading";
import image from "../../images/projectImage.jpg";
const FullProject = () => {
  const { _id } = useParams();
  const {
    data: getUserData,
    loading: getUserLoading,
    error: getUserError,
  } = useQuery(GET_PROJECT, { variables: { _id } });

  if (getUserLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  
  return (
    <main className="flex flex-col md:flex-row">
      <aside className="w-full bg-color6 flex flex-col justify-center items-center text-gray-200 md:w-96 md:h-full md:min-h-screen md:justify-start">
        <div>
          <img className="w-96" src={image} alt="Imagen del proyecto" />
        </div>
        <section className="w-96 px-2">
          <div>
            <h2 className="font-bold text-3xl py-2">
              {getUserData.findOneProject.projectName}
            </h2>
          </div>
          <div className="py-2 text-xl">
            {getUserData.findOneProject.projectDescription}
          </div>
          <div>
            <span className="font-bold">Presupuesto: </span>
            {getUserData.findOneProject.budget}
          </div>
          <div>
            <span className="font-bold">Fecha de inicio: </span>
            {`${getUserData.findOneProject.startDate.split("-")[0]}-${
              getUserData.findOneProject.startDate.split("-")[1]
            }`}
          </div>
          <div>
            <span className="font-bold">Fecha de fin: </span>
            {`${getUserData.findOneProject.endDate.split("-")[0]}-${
              getUserData.findOneProject.endDate.split("-")[1]
            }`}
          </div>
          <div>
            <span className="font-bold">Fase: </span>
            {getUserData.findOneProject.phase}
          </div>
          <div>
            <span className="font-bold">Lider: </span>
            {getUserData.findOneProject.leader.userName}{" "}
            {getUserData.findOneProject.leader.userLastName}
          </div>
          <div>
            <div className="font-bold text-xl text-center py-2 mt-1">
              Objetivos
            </div>
            {getUserData.findOneProject.objectives.map((o) => {
              return (
                <div className="w-full h-auto border-2 border-solid px-3 py-2 mb-2" key={o._id}>
                  ({o.objectiveType}) <br /> {o.objectiveDescription}
                </div>
              );
            })}
          </div>
        </section>
      </aside>
      <section className="w-full h-auto px-5">
        <h2 className="w-full text-center font-bold text-3xl py-2 mt-5">
          Avances
        </h2>
        {getUserData.findOneProject.advances.map((a) => {
          return (
            <Link to={`/projects/advance/${a._id}`} key={a._id}>
              <div className="w-full h-auto border-2 border-solid px-3 py-2 mb-2 bg-color7 hover:opacity-90">
                <div className="font-bold">{a.advanceAuthor.userName}</div>
                <div className="pl-5">{a.advanceDescription}</div>
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
};

export default FullProject;
