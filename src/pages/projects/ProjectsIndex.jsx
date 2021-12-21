import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { GET_PROJECTS } from "../../graphql/projects/projectsQueries";
import { Link } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard";
import { useState, useEffect } from "react";
import PrivateRoute from "../../components/PrivateRoute";
import { useUser } from "../../context/userContext";
import PrivateComponent from "../../components/PrivateComponent";

const ProjectsIndex = () => {
  const {
    data: getProjectsData,
    loading: getProjectsLoading,
    error: getProjectsError,
  } = useQuery(GET_PROJECTS);
  const [search, setSearch] = useState("");
  const [filteredProjects, setfilteredProjects] = useState();
  const { userData, setUserData } = useUser();

  useEffect(() => {
    if (getProjectsData && getProjectsData.findAllProjects) {
      if (userData.rol === "LIDER") {
        setfilteredProjects(
          getProjectsData.findAllProjects.filter((e) => {
            if (e.leader._id === userData._id) {
              return JSON.stringify(e)
                .toLowerCase()
                .includes(search.toLowerCase());
            }
          })
        );
      } else {
        setfilteredProjects(
          getProjectsData.findAllProjects.filter((e) => {
            return JSON.stringify(e)
              .toLowerCase()
              .includes(search.toLowerCase());
          })
        );
      }
    } else setfilteredProjects(null);
  }, [search, getProjectsData]);

  return (
    <PrivateRoute roleList={["LIDER", "ADMINISTRADOR", "ESTUDIANTE"]}>
      <main>
        <div className="pt-10">
          <section className="flex flex-col justify-center items-center px-10 mb-2 w-full">
            <section className="w-full flex justify-center items-center">
              <PrivateComponent roleList={("ADMINISTRADOR", "ESTUDIANTE")}>
                <h2 className="font-bold text-3xl">Proyectos</h2>
              </PrivateComponent>
              <PrivateComponent roleList={("LIDER")}>
                <h2 className="font-bold text-3xl">Mis proyectos</h2>
              </PrivateComponent>
            </section>
            <div className="border-gray-900 h-auto w-full sm:col-span-1 md:grid md:grid-cols-3">
              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                type="text"
                placeholder={"🔎"}
                className="col-span-2 w-full my-2 bg-gray-100 border border-gray-400 rounded-md outline-none focus:border-color1 py-2 px-1"
              />
              <div className="w-full flex justify-center items-center">
                <Link to='/projects/newProject' className="bg-green-800 text-gray-100 rounded-sm font-bold text-xl hover:bg-green-700 px-4 py-2"><i className="fas fa-plus"></i>{" "}Nuevo Proyecto</Link>
              </div>
            </div>
          </section>
          <hr />
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects &&
              filteredProjects.map((p) => {
                return (
                  <ProjectCard
                    key={p._id}
                    projectName={p.projectName}
                    projectShortDescription={p.projectShortDescription}
                    projectLink={`/projects/fullProject/${p._id}`}
                    startDate={`${p.startDate.split("-")[0]}-${
                      p.startDate.split("-")[1]
                    }`}
                    endDate={`${p.endDate.split("-")[0]}-${
                      p.endDate.split("-")[1]
                    }`}
                    phase={p.phase}
                    leader={p.leader.userName}
                  />
                );
              })}
          </section>
        </div>
      </main>
    </PrivateRoute>
  );
};

export default ProjectsIndex;
