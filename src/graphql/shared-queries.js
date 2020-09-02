import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GetPosts($language: Language!, $dateOrder: AscDescOrder) {
    getPosts(language: $language, dateOrder: $dateOrder) @client {
      id
      title
      description
      author
      datePosted
      tags
      picture
      language
      fileName
      markdown
    }
  }
`;
