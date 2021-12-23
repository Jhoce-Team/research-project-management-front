import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../../graphql/users/usersQueries";
import { useEffect, useState } from "react";
import "../../styles/tableStyles.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import PrivateRoute from "../../components/PrivateRoute";

const UsersIndex = () => {
  const { data, error, loading } = useQuery(GET_USERS);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState();

  useEffect(() => {
    if (data && data.findAllUsers) {
      setFilteredUsers(
        data.findAllUsers.filter((e) => {
          return JSON.stringify(e).toLowerCase().includes(search.toLowerCase());
        })
      );
    } else setFilteredUsers(null);
  }, [search, data]);

  useEffect(() => {
    if (error) {
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
  }, [error]);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <PrivateRoute roleList={["ADMINISTRADOR", "LIDER"]}>
      <main className="w-full h-auto">
        <div className="py-10">
          <section className="flex flex-col justify-center items-center px-10 mb-2 w-full">
            <section className="w-full flex justify-center items-center">
              <h2 className="font-bold text-3xl">Usuarios</h2>
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
          <section className="lg:hidden mt-2">
            <div className="px-3 grid sm:grid-cols-2 sm:gap-2 md:grid-cols-3">
              {filteredUsers &&
                filteredUsers.map((u) => {
                  return (
                    <div
                      key={u._id}
                      className="border-2 border-color1 rounded-sm px-2 py-3 mb-2 shadow"
                    >
                      <div className="flex justify-between">
                        <span>
                          <b>Nombre: </b>
                          {u.userName}
                        </span>

                        <Link to={`/users/editUser/${u._id}`}>
                          <i className="fas fa-list"></i>
                        </Link>
                      </div>
                      <div>
                        <b>Apellido: </b>
                        {u.userLastName}
                      </div>
                      <div>
                        <b>Identificacion: </b>
                        {u.identification}
                      </div>
                      <div>
                        <b>Correo: </b>
                        {u.email}
                      </div>
                      <div>
                        <b>Pais: </b>
                        {u.country}
                      </div>
                      <div>
                        <b>Rol: </b>
                        {u.rol}
                      </div>
                      <div>
                        <b>Estado: </b>
                        {u.status}
                      </div>
                    </div>
                  );
                })}
            </div>
          </section>
          <section className="hidden lg:block mt-2">
            <div className="w-full h-full flex justify-center items-center">
              <div className="h-96 overflow-auto overflow-x-hidden">
                <table className="default-table w-3/5 h-96 overflow-auto overflow-x-hidden">
                  <thead>
                    <tr>
                      <th>Identification</th>
                      <th>Nombre</th>
                      <th>Apellido</th>
                      <th>Correo</th>
                      <th>Pais</th>
                      <th>Rol</th>
                      <th>Estado</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers &&
                      filteredUsers.map((u) => {
                        return (
                          <tr key={u._id}>
                            <td>{u.identification}</td>
                            <td>{u.userName}</td>
                            <td>{u.userLastName}</td>
                            <td>{u.email}</td>
                            <td>{u.country}</td>
                            <td>{u.rol}</td>
                            <td>{u.status}</td>
                            <td>
                              <Link to={`/users/editUser/${u._id}`}>
                                <i className="fas fa-list"></i>
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
        <ToastContainer />
      </main>
    </PrivateRoute>
  );
};

export default UsersIndex;
