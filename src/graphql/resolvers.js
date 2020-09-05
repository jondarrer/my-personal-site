import { gql } from '@apollo/client';
// import schema from '../schema.graphql';

// import { getPostInfo, filterPostsByLanguage, orderPostsByDate } from './utils';
import {
  i18n,
  getPostInfo,
  filterPostsByLanguage,
  orderPostsByDate,
} from '../utils';

// import post1 from './markdown/post-1.md';
// import post2 from './markdown/post-2.md';
// import peaSoupRecipe from './markdown/pea-soup-recipe.md';
// import retetaDeSupaDeMazare from './markdown/reteta-de-supa-de-mazare.md';

const posts = {
  post1: 'post-1',
  post2: 'post-2',
  peaSoupRecipe: 'pea-soup-recipe',
  retetaDeSupaDeMazare: 'reteta-de-supa-de-mazare',
  coconutFlourChocolateMuffin: 'coconut-flour-chocolate-muffin',
  muffinDeCiocolataCuFainaDeCocos: 'muffin-de-ciocolata-cu-faina-de-cocos',
};
let postInfos;

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

export const resolvers = {
  Query: {
    getPosts: async (_a, { language, dateOrder }, _context) => {
      if (!postInfos) {
        postInfos = {};
        const t = await i18n;
        Object.keys(posts).forEach((key) => {
          const res = getPostInfo(posts[key], language, t);
          postInfos[key] = res;
        });
      }
      const filtered = filterPostsByLanguage(postInfos, language);
      return orderPostsByDate(filtered, dateOrder);
    },
  },
};
