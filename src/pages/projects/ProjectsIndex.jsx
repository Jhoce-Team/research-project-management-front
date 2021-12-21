import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { GET_PROJECTS } from "../../graphql/projects/projectsQueries";
import { Link } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard";
import { useState, useEffect } from "react";

const ProjectsIndex = () => {
  const {
    data: getProjectsData,
    loading: getProjectsLoading,
    error: getProjectsError,
  } = useQuery(GET_PROJECTS);
  const [search, setSearch] = useState("");
  const [filteredProjects, setfilteredProjects] = useState();

  useEffect(() => {
    if (getProjectsData && getProjectsData.findAllProjects) {
      setfilteredProjects(
        getProjectsData.findAllProjects.filter((e) => {
          return JSON.stringify(e).toLowerCase().includes(search.toLowerCase());
        })
      );
    } else setfilteredProjects(null);
  }, [search, getProjectsData]);

  return (
    <main>
      <div className="pt-10">
        <section className="flex flex-col justify-center items-center px-10 mb-2 w-full">
          <section className="w-full flex justify-center items-center">
            <h2 className="font-bold text-3xl">Proyectos</h2>
          </section>
          <div className="border-gray-900 h-auto w-full sm:col-span-1">
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              type="text"
              placeholder={"🔎"}
              className="w-full my-2 bg-gray-100 border border-gray-400 rounded-md outline-none focus:border-color1 py-2 px-1"
            />
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
                  projectDescription={p.projectDescription}
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
  );
};

export default ProjectsIndex;
