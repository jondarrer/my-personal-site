/**
 * @typedef {import('../../models').Posts} Posts
 * @typedef {import('../../models').PostInfo} PostInfo
 */

/**
 * Orders posts by date, either descending (default) or ascending order
 *
 * @param {Posts} posts The posts to order
 * @param {string} direction Either desc or asc
 * @return {Array<PostInfo>} The ordered posts
 */
const orderPostsByDate = (posts, direction = 'desc') => {
  if (!['desc', 'asc'].includes(direction)) {
    throw new Error(
      `Unexpected direction "${direction}". Please provide either "asc", "desc" or allow the default.`
    );
  }
  if (!posts) {
    return posts;
  }

  return Object.keys(posts)
    .map((key) => posts[key])
    .sort((a, b) => {
      if (direction === 'asc') {
        return new Date(a.datePosted) - new Date(b.datePosted);
      }
      return new Date(b.datePosted) - new Date(a.datePosted);
    });
};

export default orderPostsByDate;
