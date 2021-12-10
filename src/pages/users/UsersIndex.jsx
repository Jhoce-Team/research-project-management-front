import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../../graphql/users/usersQueries";
import { useEffect } from "react";
import "../../styles/tableStyles.css";

const UsersIndex = () => {
  return (
    <main>
      <section>
        <h2 className="font-bold text-3xl">Users</h2>
      </section>
      <section>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
        sapiente ab dolorum commodi ad, nisi consectetur provident iure.
        Molestias, dolor.
      </section>
      <hr />
      <section className="sm:hidden">
        <PhoneTable />
      </section>
      <section className="hidden lg:block">
        <LargeTable/>
      </section>
    </main>
  );
};

const PhoneTable = () => {
  const { data, error, loading } = useQuery(GET_USERS);
  return <div>Phone Table</div>;
};

const LargeTable = () => {
  const { data, error, loading } = useQuery(GET_USERS);
  return (
    <div className="w-screen h-full flex justify-center items-center">
      <table className="default-table w-3/5 h-auto">
        <thead>
          <tr>
            <th>Identification</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Country</th>
            <th>Rol</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.findAllUsers.map((u) => {
              return (
                <tr key={u._id}>
                  <td>{u.identification}</td>
                  <td>{u.userName}</td>
                  <td>{u.userLastName}</td>
                  <td>{u.email}</td>
                  <td>{u.country}</td>
                  <td>{u.rol}</td>
                  <td>{u.status}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersIndex;
