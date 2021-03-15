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

jest.mock('../../markdown', () => {
  return { 'post-1': '# This is a mock blog post' };
});

// The component to test
import getPostInfo from './';

const setPostInfo = ({
  postId,
  title,
  description,
  author,
  datePosted,
  tags,
  picture,
  language,
  isDraft,
}) => {
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
      case `blog-posts:${postId}-is-draft`:
        return isDraft;
      default:
        break;
    }
    return null;
  });
};

/* eslint-disable max-statements */
describe('utils/getPostInfo', () => {
  beforeEach(() => {
    mockUseTranslation.mockReset();
  });

  it('should get the postId for a post', async () => {
    // Arrange
    const postId = 'post-1';

    setPostInfo({
      postId,
    });

    // Act
    const postInfo = getPostInfo(postId);

    // Assert
    expect(postInfo.id).toBe(postId);
  });

  it('should get the title for a post', async () => {
    // Arrange
    const postId = 'post-1';
    const title = 'First blog post';

    setPostInfo({
      postId,
      title,
    });

    // Act
    const postInfo = getPostInfo(postId);

    // Assert
    expect(postInfo.title).toBe(title);
  });

  it('should get the description for a post', async () => {
    // Arrange
    const postId = 'post-1';
    const description = 'The first blog post, which is a mock';

    setPostInfo({
      postId,
      description,
    });

    // Act
    const postInfo = getPostInfo(postId);

    // Assert
    expect(postInfo.description).toBe(description);
  });

  it('should get the author for a post', async () => {
    // Arrange
    const postId = 'post-1';
    const author = 'The author';

    setPostInfo({
      postId,
      author,
    });

    // Act
    const postInfo = getPostInfo(postId);

    // Assert
    expect(postInfo.author).toBe(author);
  });

  it('should get the datePosted for a post', async () => {
    // Arrange
    const postId = 'post-1';
    const datePosted = '1970-01-01';

    setPostInfo({
      postId,
      datePosted,
    });

    // Act
    const postInfo = getPostInfo(postId);

    // Assert
    expect(postInfo.datePosted).toBe(datePosted);
  });

  it('should get the tags for a post', async () => {
    // Arrange
    const postId = 'post-1';
    const tags = 'mock';

    setPostInfo({
      postId,
      tags,
    });

    // Act
    const postInfo = getPostInfo(postId);

    // Assert
    expect(postInfo.tags).toBe(tags);
  });

  it('should get the picture for a post', async () => {
    // Arrange
    const postId = 'post-1';
    const picture = 'IMG';

    setPostInfo({
      postId,
      picture,
    });

    // Act
    const postInfo = getPostInfo(postId);

    // Assert
    expect(postInfo.picture).toBe(picture);
  });

  it('should get the language for a post', async () => {
    // Arrange
    const postId = 'post-1';
    const language = 'en';

    setPostInfo({
      postId,
      language,
    });

    // Act
    const postInfo = getPostInfo(postId);

    // Assert
    expect(postInfo.language).toBe(language);
  });

  it('should get isDraft for a draft post', async () => {
    // Arrange
    const postId = 'post-1';
    const isDraft = true;

    setPostInfo({
      postId,
      isDraft,
    });

    // Act
    const postInfo = getPostInfo(postId);

    // Assert
    expect(postInfo.isDraft).toBe(isDraft);
  });

  it('should get isDraft false for a non-draft post', async () => {
    // Arrange
    const postId = 'post-1';
    const isDraft = false;

    setPostInfo({
      postId,
      isDraft,
    });

    // Act
    const postInfo = getPostInfo(postId);

    // Assert
    expect(postInfo.isDraft).toBe(isDraft);
  });

  it('should get isDraft false for a post where isDraft is not specified', async () => {
    // Arrange
    const postId = 'post-1';

    setPostInfo({
      postId,
    });

    // Act
    const postInfo = getPostInfo(postId);

    // Assert
    expect(postInfo.isDraft).toBe(false);
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
