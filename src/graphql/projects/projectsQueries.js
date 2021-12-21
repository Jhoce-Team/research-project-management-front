import { gql } from "@apollo/client";

const GET_PROJECTS = gql`
  query findAllProjects {
    findAllProjects {
      _id
      projectName
      projectDescription
      startDate
      endDate
      phase
      leader {
        userName
      }
    }
  }
`;

const GET_PROJECT = gql`
  query findOneProject($_id: String!) {
    findOneProject(_id: $_id) {
      _id
      projectName
      projectDescription
      budget
      startDate
      endDate
      status
      phase
      leader {
        _id
        userName
        userLastName
      }
      objectives {
        _id
        objectiveDescription
        objectiveType
      }
      advances {
        _id
        advanceDate
        advanceDescription
        advanceAuthor {
          userName
          userLastName
        }
      }
    }
  }
`;

export { GET_PROJECTS, GET_PROJECT };
