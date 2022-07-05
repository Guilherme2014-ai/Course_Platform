import { gql } from "@apollo/client";

export const getLessonBySlugQuery = gql`
  query getLessonBySlug($slug: String!) {
    lesson(where: { slug: $slug }) {
      title
      videoId
      description
      teacher {
        bio
        avatarURL
        name
      }
    }
  }
`;
