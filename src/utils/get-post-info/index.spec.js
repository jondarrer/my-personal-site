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
  it('should get the post info for a valid post', async () => {
    // Arrange
    const postId = 'post-1';
    const title = 'First blog post';
    const description = 'The first blog post, which is a mock';
    const author = 'The author';
    const datePosted = '1970-01-01';
    const tags = 'mock';

    mockUseTranslation.mockImplementation((id, _opts) => {
      let result;
      switch (id) {
        case `blog-posts:${postId}-title`:
          result = title;
          break;
        case `blog-posts:${postId}-description`:
          result = description;
          break;
        case `blog-posts:${postId}-author`:
          result = author;
          break;
        case `blog-posts:${postId}-date-posted`:
          result = datePosted;
          break;
        case `blog-posts:${postId}-tags`:
          result = tags;
          break;
        default:
          break;
      }
      return result;
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
      fileName: 'post1',
      markdown: mockBlogPostMarkdown,
    });
  });
});
