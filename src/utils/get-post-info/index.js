import { useTranslation } from 'react-i18next';

import { useLanguage } from '../../contexts';

import post1 from '../../markdown/post-1.md';
import post2 from '../../markdown/post-2.md';
import peaSoupRecipe from '../../markdown/pea-soup-recipe.md';
import retetaDeSupaDeMazare from '../../markdown/reteta-de-supa-de-mazare.md';

const posts = { post1, post2, peaSoupRecipe, retetaDeSupaDeMazare };

/**
 * @typedef {import('../../models').PostInfo} PostInfo
 */

/**
 * The info for the post
 *
 * @param {string} postId The id of the post
 * @return {PostInfo} The info for the post
 */
const getPostInfo = (postId) => {
  const { currentLanguage: lng } = useLanguage();
  const { t } = useTranslation();

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
