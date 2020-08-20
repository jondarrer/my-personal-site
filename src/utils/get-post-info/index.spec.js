const mockUseTranslation = jest.fn();
jest.mock('react-i18next', () => {
  return {
    ...jest.requireActual('react-i18next'),
    useTranslation: () => {
      return { t: mockUseTranslation };
    },
  };
});

jest.mock('../../contexts', () => {
  return {
    ...jest.requireActual('../../contexts'),
    useLanguage: () => {
      return { currentLanguage: 'en' };
    },
  };
});

// @TODO Fix this hack, so the file can be mocked
import post1 from '../../markdown/post-1.md';
const mockBlogPostMarkdown = post1;
// const mockBlogPostMarkdown = '# This is a mock blog post';
// jest.mock('../../markdown/post-1.md', () => {
//   return mockBlogPostMarkdown;
// });

// The component to test
import getPostInfo from './';

describe('utils/getPostInfo', () => {
  beforeEach(() => {
    mockUseTranslation.mockReset();
  });
  /* eslint-disable max-statements */
  it('should get the post info for a valid post', async () => {
    // Arrange
    const postId = 'post-1';
    const title = 'First blog post';
    const description = 'The first blog post, which is a mock';
    const author = 'The author';
    const datePosted = '1970-01-01';
    const tags = 'mock';
    const picture = 'IMG';
    const language = 'en';

    mockUseTranslation.mockImplementation((id, _opts) => {
      switch (id) {
        case `blog-posts:${postId}-title`:
          return title;
        case `blog-posts:${postId}-description`:
          return description;
        case `blog-posts:${postId}-author`:
          return author;
        case `blog-posts:${postId}-date-posted`:
          return datePosted;
        case `blog-posts:${postId}-tags`:
          return tags;
        case `blog-posts:${postId}-picture`:
          return picture;
        case `blog-posts:${postId}-language`:
          return language;
        default:
          break;
      }
      return null;
    });

    // Act
    const postInfo = getPostInfo(postId);

    // Assert
    expect(postInfo).toStrictEqual({
      id: postId,
      title,
      description,
      author,
      datePosted,
      tags,
      picture,
      language,
      fileName: 'post1',
      markdown: mockBlogPostMarkdown,
    });
  });
  it('should error for an invalid post', async () => {
    // Arrange
    const postId = 'post-none';

    // Act & Assert
    expect(() => getPostInfo(postId)).toThrow(
      new Error(`Unable to find post "${postId}"`)
    );
  });
});
