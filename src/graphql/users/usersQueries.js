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

export { GET_USERS };
