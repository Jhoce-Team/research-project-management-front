import { gql } from "@apollo/client";

const CREATE_PROJECT = gql`
  mutation createProject(
    $projectName: String!
    $budget: Float!
    $startDate: Date!
    $endDate: Date!
    $leader: ID!
    $projectShortDescription: String!
    $projectDescription: String!
  ) {
    createProject(
      projectName: $projectName
      budget: $budget
      startDate: $startDate
      endDate: $endDate
      leader: $leader
      projectShortDescription: $projectShortDescription
      projectDescription: $projectDescription
    ) {
      _id
    }
  }
`;


export { CREATE_PROJECT };
