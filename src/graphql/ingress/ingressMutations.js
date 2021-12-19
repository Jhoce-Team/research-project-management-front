import { gql } from "@apollo/client";

const REGISTER = gql`
  mutation register(
    $userName: String!
    $userLastName: String!
    $identification: String!
    $email: String!
    $rol: Enum_UserRol!
    $password: String!
    $country: String
  ) {
    register(
      userName: $userName
      userLastName: $userLastName
      identification: $identification
      email: $email
      rol: $rol
      password: $password
      country: $country
    ) {
      token
      error
    }
  }
`;

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      error
    }
  }
`;

const VALIDATE_TOKEN = gql`
  mutation ValidateToken {
    validateToken {
      token
      error
    }
  }
`;
export { REGISTER, LOGIN, VALIDATE_TOKEN };
