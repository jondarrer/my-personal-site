/**
 * @typedef {import('../../models').Posts} Posts
 */

/**
 * Filters the posts according to draft mode
 *
 * @param {Posts} posts The list of posts
 * @param {boolean} isDraft Whether the post is in draft mode or not
 * @return {Posts} The posts filtered by isDraft
 */
const filterPostsByIsDraft = (posts, isDraft = false) => {
  const result = {};

  if (posts === null) {
    return null;
  }

  Object.keys(posts).forEach((key) => {
    if (posts[key].isDraft === isDraft) {
      result[key] = posts[key];
    }
  });

  return result;
};

export default filterPostsByIsDraft;
