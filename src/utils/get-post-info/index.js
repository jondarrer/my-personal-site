import { useTranslation } from 'react-i18next';

import { useLanguage } from '../../contexts';

import post1 from '../../markdown/post-1.md';
import post2 from '../../markdown/post-2.md';
import peaSoupRecipe from '../../markdown/pea-soup-recipe.md';
import retetaDeCiorbaDeMazare from '../../markdown/reteta-de-ciorba-de-mazare.md';

const posts = { post1, post2, peaSoupRecipe, retetaDeCiorbaDeMazare };

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
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation();

  const title = t(`blog-posts:${postId}-title`, { lng: currentLanguage });
  const description = t(`blog-posts:${postId}-description`, {
    lng: currentLanguage,
  });
  const author = t(`blog-posts:${postId}-author`, { lng: currentLanguage });
  const datePosted = t(`blog-posts:${postId}-date-posted`, {
    lng: currentLanguage,
  });
  const tags = t(`blog-posts:${postId}-tags`, { lng: currentLanguage });
  const picture = t(`blog-posts:${postId}-picture`, { lng: currentLanguage });
  /* eslint-disable require-unicode-regexp  */
  /* eslint-disable prefer-named-capture-group */
  const fileName = postId?.replace(/-([a-z0-9])/g, (g) => {
    return g[1].toUpperCase();
  });

  return {
    id: postId,
    title,
    description,
    author,
    datePosted,
    tags,
    picture,
    fileName,
    markdown: posts[fileName],
  };
};

export default getPostInfo;
