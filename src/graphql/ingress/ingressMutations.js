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
    )
  }
`;
export { REGISTER };
