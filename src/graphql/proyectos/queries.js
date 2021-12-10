import { gql } from '@apollo/client';

const PROYECTOS = gql`
query FindAllProjects {
    findAllProjects {
      _id
      projectName
      budget
      startDate
      endDate
      status
      phase
    }
  }
`;

export { PROYECTOS };