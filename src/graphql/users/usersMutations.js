import { gql } from "@apollo/client";

const EDIT_USER = gql`
  mutation editUser(
    $_id: String!
    $identification: String!
    $userName: String!
    $userLastName: String!
    $email: String!
    $rol: Enum_UserRol!
    $status: Enum_UserStatus!
    $country: String!
  ) {
    editUser(
      _id: $_id
      identification: $identification
      userName: $userName
      userLastName: $userLastName
      email: $email
      rol: $rol
      status: $status
      country: $country
    ) {
      _id
      userName
      userLastName
      identification
      email
      rol
      status
      country
    }
  }
`;

const DELETE_USER = gql`
  mutation deleteUser($_id: String!) {
    deleteUser(_id: $_id) {
      _id
      userName
      identification
      email
    }
  }
`;

const EDIT_PROFILE = gql`
  mutation editProfile($_id: String!, $fields: profileFields!) {
    editProfile(_id: $_id, fields: $fields) {
      _id
      userName
      userLastName
      identification
      email
      country
      userDescription
      photo
    }
  }
`;

export { EDIT_USER, DELETE_USER, EDIT_PROFILE };
