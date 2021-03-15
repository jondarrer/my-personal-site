import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GetPosts(
    $language: Language!
    $dateOrder: AscDescOrder
    $maxCount: Int
  ) {
    getPosts(language: $language, dateOrder: $dateOrder, maxCount: $maxCount)
      @client {
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

export const GET_POST = gql`
  query GetPost($language: Language!, $postId: String) {
    getPost(language: $language, postId: $postId) @client {
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
