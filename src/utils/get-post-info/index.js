import { useTranslation } from 'react-i18next';

import { useLanguage } from '../../contexts';

import markdowns from '../../markdown';

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

  if (!markdowns.hasOwnProperty(postId)) {
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
    fileName: postId,
    markdown: markdowns[postId],
    isDraft: t(`blog-posts:${postId}-is-draft`, { lng }) === true,
  };
};

export default getPostInfo;
