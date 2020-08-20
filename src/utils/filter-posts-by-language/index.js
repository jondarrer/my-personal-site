/**
 * @typedef {import('../../models').Posts} Posts
 */

/**
 * Filters the posts according to language
 *
 * @param {Posts} posts The list of posts
 * @param {string} language The desired post language
 * @return {Posts} The posts filtered by language
 */
const filterPostsByLanguage = (posts, language) => {
  const result = {};

  if (posts === null) {
    return null;
  }

  Object.keys(posts).forEach((key) => {
    if (posts[key].language === language) {
      result[key] = posts[key];
    }
  });

  return result;
};

export default filterPostsByLanguage;
