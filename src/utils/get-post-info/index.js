import { useTranslation } from 'react-i18next';

import { useLanguage } from '../../contexts';

import post1 from '../../markdown/post-1.md';
import post2 from '../../markdown/post-2.md';
import peaSoupRecipe from '../../markdown/pea-soup-recipe.md';
import retetaDeSupaDeMazare from '../../markdown/reteta-de-supa-de-mazare.md';
import coconutFlourChocolateMuffin from '../../markdown/coconut-flour-chocolate-muffin.md';
import muffinDeCiocolataCuFainaDeCocos from '../../markdown/muffin-de-ciocolata-cu-faina-de-cocos.md';

const posts = {
  post1,
  post2,
  peaSoupRecipe,
  retetaDeSupaDeMazare,
  coconutFlourChocolateMuffin,
  muffinDeCiocolataCuFainaDeCocos,
};

/**
 * @typedef {import('../../models').PostInfo} PostInfo
 */

/**
 * The info for the post
 *
 * @param {string} postId The id of the post
 * @param {undefined|string} language The id of the post
 * @param {undefined|TFunction} translation The id of the post
 * @return {PostInfo} The info for the post
 */
/* eslint-disable max-statements */
const getPostInfo = (postId, language, translation) => {
  let lng = language;
  let t = translation;
  if (!lng) {
    const { currentLanguage } = useLanguage();
    lng = currentLanguage;
  }
  if (!t) {
    const { t: trans } = useTranslation();
    t = trans;
  }

  /* eslint-disable require-unicode-regexp  */
  /* eslint-disable prefer-named-capture-group */
  const fileName = postId?.replace(/-([a-z0-9])/g, (g) => {
    return g[1].toUpperCase();
  });

  if (!posts.hasOwnProperty(fileName)) {
    throw new Error(`Unable to find post "${postId}"`);
  }

  return {
    id: postId,
    title: t(`blog-posts:${postId}-title`, { lng }),
    description: t(`blog-posts:${postId}-description`, {
      lng,
    }),
    author: t(`blog-posts:${postId}-author`, { lng }),
    datePosted: t(`blog-posts:${postId}-date-posted`, {
      lng,
    }),
    tags: t(`blog-posts:${postId}-tags`, { lng }),
    picture: t(`blog-posts:${postId}-picture`, { lng }),
    language: t(`blog-posts:${postId}-language`, { lng }),
    fileName,
    markdown: posts[fileName],
  };
};

export default getPostInfo;
