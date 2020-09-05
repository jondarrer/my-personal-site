import { gql } from '@apollo/client';
// import schema from '../schema.graphql';

import {
  i18n,
  getPostInfo,
  getRoutes,
  filterPostsByLanguage,
  orderPostsByDate,
} from '../utils';

export const typeDefs = gql`
  schema {
    query: Query
  }

  type PostInfo {
    id: ID!
    title: String
    description: String
    author: String
    datePosted: String
    tags: String
    picture: String
    language: String
    fileName: String
    markdown: String
  }

  enum AscDescOrder {
    asc
    desc
  }

  enum Language {
    en
    ro
  }

  type Query {
    getPosts(language: Language!, dateOrder: AscDescOrder): [PostInfo]
  }
`;

let postInfos;

export const resolvers = {
  Query: {
    getPosts: async (_a, { language, dateOrder }, _context) => {
      if (!postInfos) {
        postInfos = {};
        const t = await i18n;
        getRoutes()
          .filter(
            (route) =>
              route.startsWith('/blog/') || route.startsWith('/ro/blog/')
          )
          .forEach((route) => {
            const postId = route.substr(route.lastIndexOf('/') + 1);
            const res = getPostInfo(postId, language, t);
            postInfos[postId] = res;
          });
      }
      const filtered = filterPostsByLanguage(postInfos, language);
      return orderPostsByDate(filtered, dateOrder);
    },
  },
};
