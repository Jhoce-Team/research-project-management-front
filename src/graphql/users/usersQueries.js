import { gql } from "@apollo/client";

const GET_USERS = gql`
  query findAllUsers {
    findAllUsers {
      _id
      userName
      userLastName
      identification
      email
      rol
      status
      country
      userDescription
    }
  }
`;

const GET_USER = gql`
  query findOneUser ($_id: String!) {
    findOneUser(_id: $_id) {
      _id
      userName
      userLastName
      identification
      email
      rol
      status
      country
      userDescription
    }
  }
`;

export { GET_USERS, GET_USER };
