import { gql } from "@apollo/client";

export const getAllLessonsQuery = gql`
  query getAllLessons {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
      lessonType
    }
  }
`;
